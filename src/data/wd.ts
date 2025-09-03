import { HardDrive } from './type';

// WD 蓝盘
const wdBlueDrives: HardDrive[] = [
  { id: 'WD10EARZ', brand: 'WD', model: 'WD10EARZ', capacity: '1TB', rpm: 5400, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '380', notes: '', warranty: '', },
  { id: 'WD10EZEX', brand: 'WD', model: 'WD10EZEX', capacity: '1TB', rpm: 7200, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '409', },
  { id: 'WD20EARZ', brand: 'WD', model: 'WD20EARZ', capacity: '2TB', rpm: 5400, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '429', },
  { id: 'WD20EZBX', brand: 'WD', model: 'WD20EZBX', capacity: '2TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'SMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '449', },
  { id: 'WD30EZAX', brand: 'WD', model: 'WD30EZAX', capacity: '3TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '家用/办公', price: '539', warranty: '2年只换不修', },
  { id: 'WD40EZAX', brand: 'WD', model: 'WD40EZAX', capacity: '4TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '599', },
  { id: 'WD60EZAX', brand: 'WD', model: 'WD60EZAX', capacity: '6TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '969', },
  { id: 'WD80EAAZ', brand: 'WD', model: 'WD80EAAZ', capacity: '8TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '蓝盘', formFactor: '3.5"', targetUse: '', price: '1249', },
];

// WD 紫盘（普通/Pro）
const wdPurpleDrives: HardDrive[] = [
  // 普通
  { id: 'WD11PURZ', brand: 'WD', model: 'WD11PURZ', capacity: '1TB', rpm: 5400, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '紫盘 (普通)', formFactor: '3.5"', targetUse: '', price: '399', },
  { id: 'WD23PURZ', brand: 'WD', model: 'WD23PURZ', capacity: '2TB', rpm: 5400, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '紫盘 (普通)', formFactor: '3.5"', targetUse: '', price: '499', },
  { id: 'WD43PURZ', brand: 'WD', model: 'WD43PURZ', capacity: '4TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '紫盘 (普通)', formFactor: '3.5"', targetUse: '监控系统', price: '609', warranty: '3年只换不修', },
  { id: 'WD64PURZ', brand: 'WD', model: 'WD64PURZ', capacity: '6TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '紫盘 (普通)', formFactor: '3.5"', targetUse: '', price: '988', },
  { id: 'WD85PURZ', brand: 'WD', model: 'WD85PURZ', capacity: '8TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '紫盘 (普通)', formFactor: '3.5"', targetUse: '', price: '1289', },
  // Pro
  { id: 'WD102PURP_10TB', brand: 'WD', model: 'WD102PURP', capacity: '10TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '紫盘Pro', formFactor: '3.5"', targetUse: '', price: '1999', },
  { id: 'WD102PURP_12TB', brand: 'WD', model: 'WD102PURP', capacity: '12TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '紫盘Pro', formFactor: '3.5"', targetUse: '高性能', price: '2399', },
  { id: 'WD181EJRP', brand: 'WD', model: 'WD181EJRP', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '紫盘Pro', formFactor: '3.5"', targetUse: '多路监控系统', price: '5178', warranty: '5年只换不修', },
  { id: 'WD221PURP', brand: 'WD', model: 'WD221PURP', capacity: '22TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '紫盘Pro', formFactor: '3.5"', targetUse: '', price: '5499', },
];

// WD 红盘/红盘Plus/红盘Pro
const wdRedDrives: HardDrive[] = [
  // Plus
  { id: 'WD20EFPX', brand: 'WD', model: 'WD20EFPX', capacity: '2TB', rpm: 5400, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '红盘Plus', formFactor: '3.5"', targetUse: '', price: '589', },
  { id: 'WD40EFPX', brand: 'WD', model: 'WD40EFPX', capacity: '4TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Plus', formFactor: '3.5"', targetUse: '', price: '809', },
  { id: 'WD60EFPX', brand: 'WD', model: 'WD60EFPX', capacity: '6TB', rpm: 5400, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Plus', formFactor: '3.5"', targetUse: '中小企业', price: '1289', warranty: '3年只换不修', },
  { id: 'WD80EFPX', brand: 'WD', model: 'WD80EFPX', capacity: '8TB', rpm: 5640, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Plus', formFactor: '3.5"', targetUse: 'NAS', price: '1449', },
  { id: 'WD101EFBX', brand: 'WD', model: 'WD101EFBX', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Plus', formFactor: '3.5"', targetUse: '', price: '2059', },
  { id: 'WD120EFBX', brand: 'WD', model: 'WD120EFBX', capacity: '12TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Plus', formFactor: '3.5"', targetUse: '', price: '2359', },
  // Pro
  { id: 'WD4005FFBX', brand: 'WD', model: 'WD4005FFBX', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '1169', },
  { id: 'WD6003FFBX', brand: 'WD', model: 'WD6003FFBX', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '1499', },
  { id: 'WD8005FFBX', brand: 'WD', model: 'WD8005FFBX', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '1819', },
  { id: 'WD102KFBX', brand: 'WD', model: 'WD102KFBX', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '2459', },
  { id: 'WD121KFBX', brand: 'WD', model: 'WD121KFBX', capacity: '12TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '高性能NAS', price: '2739', warranty: '5年只换不修', },
  { id: 'WD161KFGX', brand: 'WD', model: 'WD161KFGX', capacity: '16TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '2999', },
  { id: 'WD181KFGX', brand: 'WD', model: 'WD181KFGX', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '3899', },
  { id: 'WD201KFGX', brand: 'WD', model: 'WD201KFGX', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '4449', },
  { id: 'WD221KFGX', brand: 'WD', model: 'WD221KFGX', capacity: '22TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '5439', },
  { id: 'WD240KFGX', brand: 'WD', model: 'WD240KFGX', capacity: '24TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '红盘Pro', formFactor: '3.5"', targetUse: '', price: '5899', },
];

// WD 黑盘
const wdBlackDrives: HardDrive[] = [
  { id: 'WD1003FZEX', brand: 'WD', model: 'WD1003FZEX', capacity: '1TB', rpm: 7200, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '黑盘', formFactor: '3.5"', targetUse: '', },
  { id: 'WD2003FZEX', brand: 'WD', model: 'WD2003FZEX', capacity: '2TB', rpm: 7200, cache: '64MB', interface: 'SATA', technology: 'CMR', series: '黑盘', formFactor: '3.5"', targetUse: '', price: '949', },
  { id: 'WD4006FZBX', brand: 'WD', model: 'WD4006FZBX', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '黑盘', formFactor: '3.5"', targetUse: '高性能计算', price: '1199', },
  { id: 'WD6004FZBX', brand: 'WD', model: 'WD6004FZBX', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'SMR', series: '黑盘', formFactor: '3.5"', targetUse: '游戏', price: '1699', warranty: '5年只换不修', },
  { id: 'WD8002FZBX', brand: 'WD', model: 'WD8002FZBX', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'SMR', series: '黑盘', formFactor: '3.5"', targetUse: '', price: '1899', },
  { id: 'WD102FZBX', brand: 'WD', model: 'WD102FZBX', capacity: '10TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'SMR', series: '黑盘', formFactor: '3.5"', targetUse: '', price: '2699', },
];

// WD 金盘
const wdGoldDrives: HardDrive[] = [
  { id: 'WD1005VBYZ', brand: 'WD', model: 'WD1005VBYZ', capacity: '1TB', rpm: 7200, cache: '128MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '819', },
  { id: 'WD2005VBYZ', brand: 'WD', model: 'WD2005VBYZ', capacity: '2TB', rpm: 7200, cache: '128MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '1059', },
  { id: 'WD4004FRYZ', brand: 'WD', model: 'WD4004FRYZ', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '1399', },
  { id: 'WD6004FRYZ', brand: 'WD', model: 'WD6004FRYZ', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '1799', },
  { id: 'WD8005FRYZ', brand: 'WD', model: 'WD8005FRYZ', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '1999', },
  { id: 'WD102VRYZ', brand: 'WD', model: 'WD102VRYZ', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '2699', },
  { id: 'WD122KRYZ', brand: 'WD', model: 'WD122KRYZ', capacity: '12TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '企业级存储', price: '2899', warranty: '5年只换不修', },
  { id: 'WD142KRYZ', brand: 'WD', model: 'WD142KRYZ', capacity: '14TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '3299', },
  { id: 'WD161VRYZ', brand: 'WD', model: 'WD161VRYZ', capacity: '16TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '3699', },
  { id: 'WD181VRYZ', brand: 'WD', model: 'WD181VRYZ', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '4299', },
  { id: 'WD202KRYZ', brand: 'WD', model: 'WD202KRYZ', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '4799', },
  { id: 'WD221KRYZ', brand: 'WD', model: 'WD221KRYZ', capacity: '22TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '5699', },
  { id: 'WD241KRYZ', brand: 'WD', model: 'WD241KRYZ', capacity: '24TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: '金盘', formFactor: '3.5"', targetUse: '', price: '6499', },
];

// 西数 UltraStar 企业级
const westernDigitalUltraStarDrives: HardDrive[] = [
  { id: 'HUS722T1TALA604', brand: 'Western Digital', model: 'HUS722T1TALA604', capacity: '1TB', rpm: 7200, cache: '128MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '819', },
  { id: 'HA210_HUS722T2TALA604', brand: 'Western Digital', model: '(HA210) HUS722T2TALA604', capacity: '2TB', rpm: 7200, cache: '128MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '1039', },
  { id: 'HUS726T4TALE6L4', brand: 'Western Digital', model: 'HUS726T4TALE6L4', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '1199', },
  { id: 'WUS721204BLE6L4', brand: 'Western Digital', model: 'WUS721204BLE6L4', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '1279', },
  { id: 'WUS721206BLE6L4_HA340', brand: 'Western Digital', model: 'WUS721206BLE6L4 (HA340)', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '1289', },
  { id: 'HA340_8TB', brand: 'Western Digital', model: '(HA340)', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '1359', },
  { id: 'WUS721210BLE6L4_HA340', brand: 'Western Digital', model: 'WUS721210BLE6L4 (HA340)', capacity: '10TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '企业级存储', price: '1899', },
  { id: 'WUS721212BLE6L4_HA340', brand: 'Western Digital', model: 'WUS721212BLE6L4 (HA340)', capacity: '12TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '/数据中心', price: '2189', },
  { id: 'WUH721816ALE6L4_HC550', brand: 'Western Digital', model: 'WUH721816ALE6L4 (HC550)', capacity: '16TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '2399', },
  { id: 'WUH721818ALE6L4_HC550', brand: 'Western Digital', model: 'WUH721818ALE6L4 (HC550)', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'CMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '2749', },
  { id: 'HC560_20TB', brand: 'Western Digital', model: '(HC560)', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'HAMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '2999', },
  { id: 'WUH722222ALE6L4_HC570', brand: 'Western Digital', model: 'WUH722222ALE6L4 (HC570)', capacity: '22TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'HAMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '3399', },
  { id: 'HC580_24TB', brand: 'Western Digital', model: '(HC580)', capacity: '24TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'HAMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '3799', },
  { id: 'WUH722626ALE6L4_HC590', brand: 'Western Digital', model: 'WUH722626ALE6L4 (HC590)', capacity: '26TB', rpm: 7200, cache: '512MB', interface: 'SATA', technology: 'HAMR', series: 'UltraStar', formFactor: '3.5"', targetUse: '', price: '4699', },
];

export const wdHardDrives = [
  ...wdBlueDrives,
  ...wdPurpleDrives,
  ...wdRedDrives,
  ...wdBlackDrives,
  ...wdGoldDrives,
  ...westernDigitalUltraStarDrives,
];