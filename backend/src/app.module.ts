import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Config(.ENV)
import { ConfigModule } from '@nestjs/config';

// TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';

// entity
import { WBEquip } from './entities/wb_equip.entity';
import { WB_IsuAlert } from './entities/wb_isualert.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [WBEquip, WB_IsuAlert],
      synchronize: false, // 기존 DB이므로 false로 설정
      logging: false,
    }),
    TypeOrmModule.forFeature([WBEquip, WB_IsuAlert]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
