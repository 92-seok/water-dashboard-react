import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'wb_equip' })
export class WBEquip {
  @PrimaryColumn({
    name: 'CD_DIST_OBSV',
    type: 'varchar',
    length: 10,
  })
  CD_DIST_OBSV: string;

  @Column({
    name: 'DSCODE',
    type: 'char',
    length: 10,
  })
  DSCODE: string;

  @Column({
    name: 'BDONG_CD',
    type: 'varchar',
    length: 10,
  })
  BD_CODE: string;

  @Column({
    name: 'NM_DIST_OBSV',
    type: 'varchar',
    length: 30,
  })
  NM_DIST_OBSV: string;

  @Column({
    name: 'ConnType',
    type: 'varchar',
    length: 20,
  })
  ConnType: string;

  @Column({
    name: 'ConnModel',
    type: 'varchar',
    length: 20,
  })
  ConnModel: string;

  @Column({
    name: 'ConnPhone',
    type: 'varchar',
    length: 20,
  })
  ConnPhone: string;

  @Column({
    name: 'ConnIP',
    type: 'varchar',
    length: 40,
  })
  ConnIP: string;

  @Column({
    name: 'ConnPort',
    type: 'varchar',
    length: 10,
  })
  ConnPort: string;

  @Column({
    name: 'LastDate',
    type: 'varchar',
    length: 20,
  })
  LastDate: string;

  @Column({
    name: 'LastStatus',
    type: 'varchar',
    length: 10,
  })
  LastStatus: string;

  @Column({
    name: 'ErrorChk',
    type: 'int',
  })
  ErrorChk: number;

  @Column({
    name: 'GB_OBSV',
    type: 'char',
    length: 2,
    nullable: true,
  })
  GB_OBSV: string;

  @Column({
    name: 'USE_YN',
    type: 'char',
    length: 2,
    nullable: true,
  })
  USE_YN: string;

  @Column({
    name: 'RainBit',
    type: 'double',
    nullable: true,
  })
  RainBit: number;

  @Column({
    name: 'LAT',
    type: 'double',
    nullable: true,
    comment: '위도',
  })
  LAT: number;

  @Column({
    name: 'LON',
    type: 'double',
    nullable: true,
    comment: '경도',
  })
  LON: number;

  @Column({
    name: 'DTL_ADRES',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  DTL_ADRES: string;

  @Column({
    name: 'EType',
    type: 'varchar',
    length: 20,
    nullable: true,
  })
  EType: string;

  @Column({
    name: 'SizeX',
    type: 'int',
  })
  SizeX: number;

  @Column({
    name: 'SizeY',
    type: 'int',
  })
  SizeY: number;

  @Column({
    name: 'URL',
    type: 'varchar',
    length: 20,
  })
  URL: string;

  @Column({
    name: 'EComment',
    type: 'varchar',
    length: 400,
  })
  EComment: string;

  @Column({
    name: 'MNTN_ADRES_AT',
    type: 'char',
    length: 1,
  })
  MNTN_ADRES_AT: string;

  @Column({
    name: 'MLNM',
    type: 'varchar',
    length: 4,
  })
  MLNM: string;

  @Column({
    name: 'AULNM',
    type: 'varchar',
    length: 4,
  })
  AULNM: string;

  @Column({
    name: 'RDNMADR_CD',
    type: 'varchar',
    length: 25,
  })
  RDNMADR_CD: string;

  @Column({
    name: 'RN_DTL_ADRES',
    type: 'varchar',
    length: 300,
  })
  RN_DTL_ADRES: string;

  @Column({
    name: 'SPO_NO_CD',
    type: 'varchar',
    length: 12,
  })
  SPO_NO_CD: string;

  @Column({
    name: 'ORGN_CD',
    type: 'char',
    length: 7,
  })
  ORGN_CD: string;

  @Column({
    name: 'DT_REGT',
    type: 'varchar',
    length: 14,
  })
  DT_REGT: string;

  @Column({
    name: 'DT_UPT',
    type: 'varchar',
    length: 14,
  })
  DT_UPT: string;

  @Column({
    name: 'SubOBCount',
    type: 'int',
    nullable: true,
  })
  SubOBCount: number;

  @Column({
    name: 'DetCode',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  DetCode: number;

  @Column({
    name: 'SeeLevelUse',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  SeeLevelUse: string;

  @Column({
    name: 'Data',
    type: 'mediumtext',
    nullable: true,
  })
  Data: string;

  @Column({
    name: 'UNIT',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  UNIT: string;
}
