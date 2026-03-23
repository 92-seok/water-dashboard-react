import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'wb_isualert' })
export class WB_IsuAlert {
  @PrimaryColumn({
    name: 'AltCode',
    type: 'int',
  })
  AltCode: string;

  @Column({
    name: 'CD_DIST_OBSV',
    type: 'varchar',
    length: 10,
  })
  CD_DIST_OBSV: string;

  @Column({
    name: 'EquType',
    type: 'varchar',
    length: 20,
  })
  EquType: string;

  @Column({
    name: 'RainTime',
    type: 'varchar',
    length: 20,
  })
  RainTime: string;

  @Column({
    name: 'L1Use',
    type: 'varchar',
    length: 10,
  })
  L1Use: string;

  @Column({
    name: 'L1Std',
    type: 'varchar',
    length: 50,
  })
  L1Std: string;

  @Column({
    name: 'L2Use',
    type: 'varchar',
    length: 10,
  })
  L2Use: string;

  @Column({
    name: 'L2Std',
    type: 'varchar',
    length: 50,
  })
  L2Std: string;

  @Column({
    name: 'L3Use',
    type: 'varchar',
    length: 10,
  })
  L3Use: string;

  @Column({
    name: 'L3Std',
    type: 'varchar',
    length: 50,
  })
  L3Std: string;

  @Column({
    name: 'L4Use',
    type: 'varchar',
    length: 10,
  })
  L4Use: string;

  @Column({
    name: 'L4Std',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  L4Std: string;

  @Column({
    name: 'L5Use',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  L5Use: string;

  @Column({
    name: 'L5Std',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  L5Std: string;

  @Column({
    name: 'LowUse',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  LowUse: string;

  @Column({
    name: 'LowStd',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  LowStd: string;

  @Column({
    name: 'HighUse',
    type: 'varchar',
    length: 10,
    nullable: true,
  })
  HighUse: string;

  @Column({
    name: 'HighStd',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  HighStd: string;

  @Column({
    name: 'NowType',
    type: 'varchar',
    length: 20,
  })
  NowType: string;

  @Column({
    name: 'ChkCount',
    type: 'int',
  })
  ChkCount: number;
}
