import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WBEquip } from './entities/wb_equip.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(WBEquip)
    private wbEquipRepository: Repository<WBEquip>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getDevices(): Promise<WBEquip[]> {
    try {
      const devices = await this.wbEquipRepository.find({
        where: { GB_OBSV: '02' },
        order: { CD_DIST_OBSV: 'ASC' },
      });
      // console.log('[AppService] getDevice result (GB_OBSV=02):', devices);
      return devices;
    } catch (err) {
      throw new Error(`장비 조회 중 오류 발생: ${err.message}`);
    }
  }
}
