import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// frontend bulid pm2에서 동시에 돌리기
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// Config
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  // frontend bulid pm2에서 동시에 돌리기
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Vue dist 정적 파일 서빙
  app.useStaticAssets(join(__dirname, '..', '..', 'frontend', 'dist'));
  app.setBaseViewsDir(join(__dirname, '..', '..', 'frontend', 'dist'));

  try {
    // 환경변수 디버깅
    console.log('🔍 환경변수 확인:');
    console.log('DB_HOST:', process.env.DB_HOST);
    console.log('DB_PORT:', process.env.DB_PORT);
    console.log('DB_USERNAME:', process.env.DB_USERNAME);
    console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
    console.log('DB_DATABASE:', process.env.DB_DATABASE);

    const app = await NestFactory.create(AppModule);

    // CORS
    const config = app.get(ConfigService);

    app.enableCors({
      origin: `http://localhost:${config.get<number>('SERVICE_PORT') || 8080}`,
      methods: 'GET,POST,PUT,PATCH,DELETE',
      credentials: true,
    });

    await app.listen(process.env.PORT ?? 8080);
    console.log(
      `🚀 애플리케이션이 http://localhost:${process.env.PORT} 에서 실행 중입니다`,
    );
  } catch (error) {
    console.error('애플리케이션 시작 중 오류 발생:', error);
    process.exit(1);
  }
}
// 부트스트랩 함수 호출과 에러 처리
bootstrap().catch((err) => {
  console.error('부트스트랩 실패:', err);
  process.exit(1);
});
