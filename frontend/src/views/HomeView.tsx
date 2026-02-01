import { useState, useEffect } from 'react'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/ko'
import BluePanel from '../components/BluePanel'

// dayjs 한국어 로케일 설정
dayjs.locale('ko')

interface Device {
  CD_DIST_OBSV: string
  NM_DIST_OBSV: string
  Data: string | number
  SeeLevelUse: string | number
  ErrorChk: number
}

export default function HomeView() {
  const [currentTime, setCurrentTime] = useState('')
  const [devices, setDevices] = useState<Device[]>([])
  const [averagePercent, setAveragePercent] = useState(0)
  const [showExitModal, setShowExitModal] = useState(false)
  const [countdown, setCountdown] = useState(3)

  // 현재 시각 갱신 (1초 마다)
  useEffect(() => {
    const updateTime = () => {
      const formatted = dayjs().format('YYYY-MM-DD HH:mm:ss')
      setCurrentTime(formatted)
    }

    updateTime()
    const timeInterval = setInterval(updateTime, 1000)

    return () => clearInterval(timeInterval)
  }, [])

  // 데이터 갱신 (20초 마다)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Device[]>('/api/devices')
        setDevices(response.data)

        // 평균 저수율 계산
        const validDevices = response.data.filter((d) => d.ErrorChk > 0)
        if (validDevices.length > 0) {
          const sum = validDevices.reduce((acc, d) => {
            const waterLevel = parseInt(String(d.Data)) || 0
            const threshold = parseInt(String(d.SeeLevelUse)) || 1
            return acc + (waterLevel / threshold) * 100
          }, 0)
          setAveragePercent(sum / validDevices.length)
        }
      } catch (error) {
        console.error('데이터 로드 실패: ', error)
      }
    }

    fetchData()
    const dataInterval = setInterval(fetchData, 2000)
    return () => clearInterval(dataInterval)
  })

  // 우클릭 종료 모달
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      setShowExitModal(true)
      setCountdown(3)
    }

    document.addEventListener('contextmenu', handleContextMenu)

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu)
    }
  }, [])

  // 카운트다운 타이머
  useEffect(() => {
    if (!showExitModal) return

    if (countdown === 0) {
      window.close()
      return
    }

    const timer = setTimeout(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [showExitModal, countdown])

  // 풀 스크린 토글
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      // 현재 화면이 아니면 전체화면으로 전환
      document.documentElement.requestFullscreen().catch((err) => {
        console.error('전체화면 전환 실패: ', err)
      })
    } else {
      // 전제 화면이면 해제
      document.exitFullscreen().catch((err) => {
        console.error('전체화면 해제 실패: ', err)
      })
    }
  }

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'F11') {
        e.preventDefault()
        toggleFullscreen()
      }
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => document.removeEventListener('keydown', handleKeyPress)
  }, [])

  // 게이지 색상 결정
  const getFillColor = (percent: number) => {
    if (percent >= 100) return '#ef4444'
    if (percent >= 80) return '#f59e0b'
    if (percent >= 60) return '#eab308'
    return '#10b981'
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      {/* 헤더 */}
      <header className="mb-8">
        <div className="flex items-center justify-between text-white">
          <h1 className="text-5xl text-bold">안성 수위 통합 대시보드</h1>
          <div className="text-3xl text-gray-300">{currentTime}</div>
          <div className="text-3xl font-semibold text-gray-300">
            평균 저수율: {averagePercent.toFixed(1)}%
          </div>
        </div>
      </header>

      {/* 패널 그리드 */}
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {devices.map((device) => {
          const waterLevel = parseInt(String(device.Data)) || 0
          const threshold = parseInt(String(device.SeeLevelUse)) || 1
          const fillPercent = (waterLevel / threshold) * 100
          const badge = device.ErrorChk > 0 ? '정상' : '오류'
          const fillColor = getFillColor(fillPercent)

          return (
            <BluePanel
              key={device.CD_DIST_OBSV}
              title={device.NM_DIST_OBSV}
              badge={badge}
              waterLevel={waterLevel}
              threshold={threshold}
              fillPercent={fillPercent}
              fillColor={fillColor}
            ></BluePanel>
          )
        })}
      </div>

      {/* 우클릭 종료 모달 */}
      {showExitModal && (
        <div className="fixed inset-0 z-50 flex-items-center justify-center bg-black bg-opacity-70">
          <div className="rounded-lg bg-white p-8 text-center shadow-2xl">
            <h2 className="mb-4 text-2xl font-bold text-gray-900">프로그램 종료</h2>
            <p className="mb-6 text-lg text-gray-700">{countdown}초 후 자동으로 종료됩니다.</p>
            <button
              onClick={() => setShowExitModal(false)}
              className="rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-600"
            >
              취소
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
