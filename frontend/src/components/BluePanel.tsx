interface BluePanelProps {
  title: string
  badge: string
  waterLevel: number
  threshold: number
  fillPercent: number
  fillColor: string
}

const MAX_CAPACITY = 200
const WARNING_THRESHOLD = 100

export default function BluePanel({
  title,
  badge,
  waterLevel,
  threshold,
  fillPercent,
  fillColor,
}: BluePanelProps) {
  const normalizedFill = Math.max(0, Math.min(MAX_CAPACITY, Math.round(fillPercent)))
  const gaugeHeight = Math.round((normalizedFill / MAX_CAPACITY) * 100)
  const thresholdLinePosition = Math.round((WARNING_THRESHOLD / MAX_CAPACITY) * 100)

  return (
    <div
      className="flex h-full flex-col justify-between gap-2 md:gap-3 rounded-xl border border-slate-200 bg-gradient-to-b from-gray-500    
  to-gray-700 px-2 md:px-3 pb-2 md:pb-3 pt-3 md:pt-4 shadow-[0_10px_24px_rgba(15,23,42,0.12)] transition duration-200 hover:-translate-y-0.5   
  hover:shadow-[0_16px_30px_rgba(15,23,42,0.16)]"
    >
      {/* 헤더 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 md:gap-2 pl-0.5 md:pl-1">
          <span className="text-lg md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl text-blue-500">
            💧
          </span>
          <span
            className="max-w-[100px] md:max-w-[120px] lg:max-w-[140px] xl:max-w-[160px] 2xl:max-w-[200px] truncate text-base md:text-lg  
  lg:text-xl xl:text-2xl 2xl:text-3xl font-semibold tracking-[0.06em] text-white"
            title={title}
          >
            {title}
          </span>
        </div>
        <span
          className={`min-w-[50px] md:min-w-[60px] xl:min-w-[68px] flex items-center justify-center rounded px-1 md:px-1.5 xl:px-2 py-0.5
   md:py-1 text-[10px] md:text-xs xl:text-sm font-bold text-black ${badge === '정상' ? 'bg-green-400' : 'bg-red-400'}`}
        >
          {badge === '정상' ? '통신정상' : '통신오류'}
        </span>
      </div>

      {/* 하단: 수위 정보 + 게이지 */}
      <div className="flex items-end justify-between gap-2 md:gap-3 lg:gap-4 xl:gap-5">
        {/* 왼쪽: 수위 정보 */}
        <div className="flex flex-col gap-1.5 md:gap-2 lg:gap-2.5">
          <div className="flex items-baseline justify-between gap-1 md:gap-1.5 pl-0.5 md:pl-1 lg:pl-2">
            <p
              className="text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-[0.04em] text-white                
  whitespace-nowrap"
            >
              현재 수위
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold leading-tight text-white whitespace-nowrap">
              {waterLevel.toFixed(2)} m
            </p>
          </div>
          <div className="flex items-baseline justify-between gap-1 md:gap-1.5 pl-0.5 md:pl-1 lg:pl-2">
            <p
              className="text-[11px] md:text-xs lg:text-sm xl:text-base 2xl:text-lg font-medium tracking-[0.04em] text-white                
  whitespace-nowrap"
            >
              임계치
            </p>
            <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold leading-tight text-white whitespace-nowrap">
              {threshold.toFixed(2)} m
            </p>
          </div>
        </div>

        {/* 우측: 세로형 게이지 */}
        <div className="flex flex-col items-center gap-0.5 text-center flex-shrink-0">
          <div
            className="relative flex h-[50px] w-[38px] md:h-[60px] md:w-[45px] lg:h-[68px] lg:w-[50px] xl:h-[72px] xl:w-[54px]            
  2xl:h-[80px] 2xl:w-[60px] items-end justify-center overflow-hidden rounded-[12px] border border-slate-200 bg-gradient-to-b from-[#e9f2ff]    
  via-[#dbe8ff] to-[#cdddfa] p-1 md:p-1.5 shadow-[0_6px_12px_rgba(59,130,246,0.18)]"
          >
            {/* 게이지 채우기 */}
            <div
              className="absolute inset-x-0 bottom-0 rounded-b-[10px] transition-all duration-500 ease-out"
              style={{
                height: `${gaugeHeight}%`,
                background: `linear-gradient(180deg, ${fillColor}, rgba(59, 130, 246, 0.45))`,
              }}
            />
            {/* 100% 기준선 */}
            <div
              className="absolute inset-x-1 h-[1px] border-t-2 border-dashed border-orange-600"
              style={{ bottom: `${thresholdLinePosition}%` }}
            />
            {/* 퍼센트 표시 */}
            <span
              className="relative mb-0.5 text-[9px] md:text-[10px] lg:text-xs font-semibold text-slate-900                               
  drop-shadow-[0_3px_6px_rgba(15,23,42,0.25)]"
            >
              {normalizedFill}%
            </span>
          </div>
          <span className="text-[8px] md:text-[9px] lg:text-[10px] font-medium tracking-[0.05em] text-white">
            저수용량
          </span>
        </div>
      </div>
    </div>
  )
}
