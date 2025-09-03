import { HardDrive } from './type';

// P300系列（消费级PC入门硬盘）
const p300Drives: HardDrive[] = [
  { id: 'HDWD220UZSVA', brand: 'Toshiba', model: 'HDWD220UZSVA', capacity: '2TB', rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
  { id: 'HDWD240UZSVA', brand: 'Toshiba', model: 'HDWD240UZSVA', capacity: '4TB', rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
  { id: 'HDWD260UZSVA', brand: 'Toshiba', model: 'HDWD260UZSVA', capacity: '6TB', rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
  { id: 'HDWD320UZSVA', brand: 'Toshiba', model: 'HDWD320UZSVA', capacity: '2TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
  { id: 'HDWD110UZSVA', brand: 'Toshiba', model: 'HDWD110UZSVA', capacity: '1TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
  { id: 'HDWD120UZSVA', brand: 'Toshiba', model: 'HDWD120UZSVA', capacity: '2TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
  { id: 'HDWD130UZSVA', brand: 'Toshiba', model: 'HDWD130UZSVA', capacity: '3TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'P300', formFactor: '3.5"', targetUse: 'PC入门硬盘' },
];

// X300系列（高性能游戏/工作站硬盘）
const x300Drives: HardDrive[] = [
  { id: 'HDWE140', brand: 'Toshiba', model: 'HDWE140', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'X300', formFactor: '3.5"', targetUse: '游戏/工作站盘' },
  { id: 'HDWE150', brand: 'Toshiba', model: 'HDWE150', capacity: '5TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'X300', formFactor: '3.5"', targetUse: '游戏/工作站盘' },
  { id: 'HDWE160', brand: 'Toshiba', model: 'HDWE160', capacity: '6TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'X300', formFactor: '3.5"', targetUse: '游戏/工作站盘' },
];

// N300系列（8盘位NAS盘，180TB/年）
const n300Drives: HardDrive[] = [
  { id: 'HDWQ140UZSVA', brand: 'Toshiba', model: 'HDWQ140UZSVA', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG440UZSVA', brand: 'Toshiba', model: 'HDWG440UZSVA', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG460UZSVA', brand: 'Toshiba', model: 'HDWG460UZSVA', capacity: '6TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG480UZSVA', brand: 'Toshiba', model: 'HDWG480UZSVA', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG31EUZSVA', brand: 'Toshiba', model: 'HDWG31EUZSVA', capacity: '14TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG31GUZSVA', brand: 'Toshiba', model: 'HDWG31GUZSVA', capacity: '16TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG11AUZSVA', brand: 'Toshiba', model: 'HDWG11AUZSVA', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG21CUZSVA', brand: 'Toshiba', model: 'HDWG21CUZSVA', capacity: '12TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG51JUZSVA', brand: 'Toshiba', model: 'HDWG51JUZSVA', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG62AUZSVA', brand: 'Toshiba', model: 'HDWG62AUZSVA', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
  { id: 'HDWG62CUZSVA', brand: 'Toshiba', model: 'HDWG62CUZSVA', capacity: '22TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '8盘位NAS', workloadRating: '180TB/年' },
];

// N300 Pro系列（24盘位，专业NAS，300TB/年）
const n300proDrives: HardDrive[] = [
  { id: 'HDWG480UZSVB', brand: 'Toshiba', model: 'HDWG480UZSVB', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300 Pro', formFactor: '3.5"', targetUse: '24盘位NAS', workloadRating: '300TB/年' },
  { id: 'HDWG51GUZSVB', brand: 'Toshiba', model: 'HDWG51GUZSVB', capacity: '16TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300 Pro', formFactor: '3.5"', targetUse: '24盘位NAS', workloadRating: '300TB/年' },
  { id: 'HDWG51JUZSVB', brand: 'Toshiba', model: 'HDWG51JUZSVB', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300 Pro', formFactor: '3.5"', targetUse: '24盘位NAS', workloadRating: '300TB/年' },
];

// 2.5寸笔记本、视频硬盘
const mobileDrives: HardDrive[] = [
  { id: 'MQ04ABF100',   brand: 'Toshiba', model: 'MQ04ABF100',   capacity: '1TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '2.5"',  targetUse:  '笔记本' },
  { id: 'MQ04ABD200',   brand: 'Toshiba', model: 'MQ04ABD200',   capacity: '2TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '2.5"',  targetUse:  '笔记本' },
  { id: 'MQ04ABD400',   brand: 'Toshiba', model: 'MQ04ABD400',   capacity: '4TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '2.5"',  targetUse:  '笔记本' },
  { id: 'MQ01ABD032',   brand: 'Toshiba', model: 'MQ01ABD032',   capacity: '320GB', rpm: 5400, cache: '8MB',    interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '2.5"',  targetUse:  '笔记本' },
  { id: 'MQ01ABD050',   brand: 'Toshiba', model: 'MQ01ABD050',   capacity: '500GB', rpm: 5400, cache: '8MB',    interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '2.5"',  targetUse:  '笔记本' },
  { id: 'MQ01ABD100',   brand: 'Toshiba', model: 'MQ01ABD100',   capacity: '1TB',   rpm: 5400, cache: '8MB',    interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '2.5"',  targetUse:  '笔记本' },

  { id: 'MQ04ABF100V',  brand: 'Toshiba', model: 'MQ04ABF100V',  capacity: '1TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '2.5"', targetUse: '视频', workloadRating: '55TB/年' },
  { id: 'MQ04ABD200V',  brand: 'Toshiba', model: 'MQ04ABD200V',  capacity: '2TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '2.5"', targetUse: '视频', workloadRating: '55TB/年' },
];

// 3.5寸PC硬盘与高容量（桌面）
const desktopDrives: HardDrive[] = [
  { id: 'DT02ABA200',   brand: 'Toshiba', model: 'DT02ABA200',   capacity: '2TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘' },
  { id: 'DT02ABA400',   brand: 'Toshiba', model: 'DT02ABA400',   capacity: '4TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘' },
  { id: 'DT02ABA400',   brand: 'Toshiba', model: 'DT02ABA400',   capacity: '6TB',   rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘' },

  { id: 'DT01ACA100',   brand: 'Toshiba', model: 'DT01ACA100',   capacity: '1TB',   rpm: 7200, cache: '32MB',  interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘' },
  { id: 'DT01ACA200',   brand: 'Toshiba', model: 'DT01ACA200',   capacity: '2TB',   rpm: 7200, cache: '64MB',  interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘' },
  { id: 'DT01ACA300',   brand: 'Toshiba', model: 'DT01ACA300',   capacity: '3TB',   rpm: 7200, cache: '64MB',  interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘' },

  { id: 'MD07ACA12T',   brand: 'Toshiba', model: 'MD07ACA12T',   capacity: '12TB',  rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  '高容量' },
  { id: 'MD07ACA14T',   brand: 'Toshiba', model: 'MD07ACA14T',   capacity: '14TB',  rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  '高容量' },
  { id: 'DT02ACA200',   brand: 'Toshiba', model: 'DT02ACA200',   capacity: '2TB',   rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'PC HDD', formFactor: '3.5"',  targetUse:  'PC硬盘', workloadRating: '55TB/年' },
];

// 监控、视频盘 Video/S300/S300 Pro
const surveillanceDrives: HardDrive[] = [
  // Video HDD、监控入门
  { id: 'DT02ABA100V',  brand: 'Toshiba', model: 'DT02ABA100V',  capacity: '1TB',  rpm: 5700, cache: '32MB',  interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '监控盘', workloadRating: '180TB/年' },
  { id: 'DT02ABA200V',  brand: 'Toshiba', model: 'DT02ABA200V',  capacity: '2TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '监控盘' },
  { id: 'DT02ABA400V',  brand: 'Toshiba', model: 'DT02ABA400V',  capacity: '4TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '监控盘' },
  { id: 'DT02ABA600V',  brand: 'Toshiba', model: 'DT02ABA600V',  capacity: '6TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '监控盘' },

  // Video HDD 高频监控
  { id: 'DT02ABA400VH', brand: 'Toshiba', model: 'DT02ABA400VH', capacity: '4TB',  rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '监控盘' },
  { id: 'DT02ABA600VH', brand: 'Toshiba', model: 'DT02ABA600VH', capacity: '6TB',  rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '监控盘' },

  // 大型32头监控/8盘架
  { id: 'MD04ABA400V',  brand: 'Toshiba', model: 'MD04ABA400V',  capacity: '4TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '32头监控', workloadRating: '180TB/年' },
  { id: 'MD04ABA500V',  brand: 'Toshiba', model: 'MD04ABA500V',  capacity: '5TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '32头监控', workloadRating: '180TB/年' },

  { id: 'HDWT720UZSVA', brand: 'Toshiba', model: 'HDWT720UZSVA', capacity: '2TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '32头8支架监控', workloadRating: '180TB/年' },
  { id: 'HDWT740UZSVA', brand: 'Toshiba', model: 'HDWT740UZSVA', capacity: '4TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '32头8支架监控', workloadRating: '180TB/年' },
  { id: 'HDWT760UZSVA', brand: 'Toshiba', model: 'HDWT760UZSVA', capacity: '6TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '64头8支架监控', workloadRating: '180TB/年' },
  { id: 'HDWT840UZSVA', brand: 'Toshiba', model: 'HDWT840UZSVA', capacity: '4TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '64头8支架监控', workloadRating: '180TB/年' },
  { id: 'HDWT860UZSVA', brand: 'Toshiba', model: 'HDWT860UZSVA', capacity: '6TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Video HDD', formFactor: '3.5"', targetUse: '64头8支架监控', workloadRating: '180TB/年' },

  // S300监控系列（5400rpm）
  { id: 'HDWT740UZSVA', brand: 'Toshiba', model: 'HDWT740UZSVA', capacity: '4TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'S300', formFactor: '3.5"', targetUse: '监控盘' },
  { id: 'HDWT760UZSVA', brand: 'Toshiba', model: 'HDWT760UZSVA', capacity: '6TB',  rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'S300', formFactor: '3.5"', targetUse: '监控盘' },

  // S300高端系列（7200rpm）
  { id: 'HDWTA40UZSVA', brand: 'Toshiba', model: 'HDWTA40UZSVA', capacity: '4TB',  rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'S300', formFactor: '3.5"', targetUse: '64头监控', workloadRating: '300TB/年' },
  { id: 'HDWTA60UZSVA', brand: 'Toshiba', model: 'HDWTA60UZSVA', capacity: '6TB',  rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'S300', formFactor: '3.5"', targetUse: '64头监控', workloadRating: '300TB/年' },
  { id: 'HDWTA80UZSVA', brand: 'Toshiba', model: 'HDWTA80UZSVA', capacity: '8TB',  rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'S300 Pro', formFactor: '3.5"', targetUse: '专业监控', workloadRating: '300TB/年' },
  { id: 'HDWTA1UZSVA',  brand: 'Toshiba', model: 'HDWTA1UZSVA',  capacity: '10TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'S300 Pro', formFactor: '3.5"', targetUse: '专业监控', workloadRating: '300TB/年' },
];

// 云级容量盘（企业级氦气盘/大容量存储）
const cloudDrives: HardDrive[] = [
  // MG07SCA系列 12TB/14TB（氦气, CMR, 256MB缓存）
  { id: 'MG07SCA12', brand: 'Toshiba', model: 'MG07SCA12', capacity: '12TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG07SCA', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG07SCA14', brand: 'Toshiba', model: 'MG07SCA14', capacity: '14TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG07SCA', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG07ACA系列 12TB/14TB（CMR, 512MB缓存）
  { id: 'MG07ACA12', brand: 'Toshiba', model: 'MG07ACA12', capacity: '12TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG07ACA', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG07ACA14', brand: 'Toshiba', model: 'MG07ACA14', capacity: '14TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG07ACA', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG08系列 14TB/16TB
  { id: 'MG08ACA14', brand: 'Toshiba', model: 'MG08ACA14', capacity: '14TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG08', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG08ACA16', brand: 'Toshiba', model: 'MG08ACA16', capacity: '16TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG08', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG09系列 10-18TB
  { id: 'MG09ACA12', brand: 'Toshiba', model: 'MG09ACA12', capacity: '12TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG09', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG09ACA18', brand: 'Toshiba', model: 'MG09ACA18', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG09', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG10系列 18TB/20TB
  { id: 'MG10ACA18', brand: 'Toshiba', model: 'MG10ACA18', capacity: '18TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG10', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG10ACA20', brand: 'Toshiba', model: 'MG10ACA20', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG10', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG10F系列 20TB/22TB
  { id: 'MG10FACA20', brand: 'Toshiba', model: 'MG10FACA20', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG10F', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG10FACA22', brand: 'Toshiba', model: 'MG10FACA22', capacity: '22TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG10F', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG11系列 14TB-24TB（新款，缓存1GiB）
  { id: 'MG11ACA14', brand: 'Toshiba', model: 'MG11ACA14', capacity: '14TB', rpm: 7200, cache: '1GB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG11', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG11ACA24', brand: 'Toshiba', model: 'MG11ACA24', capacity: '24TB', rpm: 7200, cache: '1GB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG11', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },

  // MG11 SMR 27/28TB
  { id: 'MG11SMR27', brand: 'Toshiba', model: 'MG11SMR27', capacity: '27TB', rpm: 7200, cache: '1GB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'MG11', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
  { id: 'MG11SMR28', brand: 'Toshiba', model: 'MG11SMR28', capacity: '28TB', rpm: 7200, cache: '1GB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'MG11', formFactor: '3.5"', targetUse: '云级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '250万小时' },
];

// 企业级容量盘（经典企业盘）
const enterpriseDrives: HardDrive[] = [
  // MG04SCA系列/氦气盘 2TB/4TB/6TB/10TB（CMR 128/256MB缓存）
  { id: 'MG04SCA-N2', brand: 'Toshiba', model: 'MG04SCA-N2', capacity: '2TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04SCA-N', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04SCA-N4', brand: 'Toshiba', model: 'MG04SCA-N4', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04SCA-N', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04SCA6', brand: 'Toshiba', model: 'MG04SCA6', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04SCA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04SCA10', brand: 'Toshiba', model: 'MG04SCA10', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04SCA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },

  // MG04ACA-N系列 1-4TB
  { id: 'MG04ACA-N1', brand: 'Toshiba', model: 'MG04ACA-N1', capacity: '1TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA-N', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04ACA-N4', brand: 'Toshiba', model: 'MG04ACA-N4', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA-N', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },

  // MG04ACA系列/企业耐用 2TB/3TB/4TB/5TB/6TB
  { id: 'MG04ACA2', brand: 'Toshiba', model: 'MG04ACA2', capacity: '2TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04ACA3', brand: 'Toshiba', model: 'MG04ACA3', capacity: '3TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04ACA4', brand: 'Toshiba', model: 'MG04ACA4', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04ACA5', brand: 'Toshiba', model: 'MG04ACA5', capacity: '5TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },
  { id: 'MG04ACA6', brand: 'Toshiba', model: 'MG04ACA6', capacity: '6TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG04ACA', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '140万小时' },

  // MG08-D & MG10-D 系列
  { id: 'MG08-D6', brand: 'Toshiba', model: 'MG08-D6', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG08-D', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', MTBF: '200万小时' }, // workload未知
  { id: 'MG10-D10', brand: 'Toshiba', model: 'MG10-D10', capacity: '10TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'MG10-D', formFactor: '3.5"', targetUse: '企业级容量盘', warranty: '5年', MTBF: '200万小时' }, // workload未知
];

// 企业级性能盘（高转速2.5寸6000系列/SAS）
const performanceDrives: HardDrive[] = [
  // AL15SE系列 10500rpm
  { id: 'AL15SE300', brand: 'Toshiba', model: 'AL15SE300', capacity: '300GB', rpm: 10500, cache: '128MB', interface: 'SAS 12Gb/s', technology: 'CMR', series: 'AL15SE', formFactor: '2.5"', targetUse: '企业性能盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '200万小时' },
  { id: 'AL15SE2400', brand: 'Toshiba', model: 'AL15SE2400', capacity: '2400GB', rpm: 10500, cache: '128MB', interface: 'SAS 12Gb/s', technology: 'CMR', series: 'AL15SE', formFactor: '2.5"', targetUse: '企业性能盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '200万小时' },

  // AL14SX系列 15000rpm
  { id: 'AL14SX900', brand: 'Toshiba', model: 'AL14SX900', capacity: '900GB', rpm: 15000, cache: '128MB', interface: 'SAS 12Gb/s', technology: 'CMR', series: 'AL14SX', formFactor: '2.5"', targetUse: '企业性能盘', warranty: '5年', workloadRating: '550TB/年', MTBF: '200万小时' },
];

export const toshibaHardDrives = [
  ...p300Drives,
  ...x300Drives,
  ...n300Drives,
  ...n300proDrives,
  ...mobileDrives,
  ...desktopDrives,
  ...surveillanceDrives,
  ...cloudDrives,
  ...enterpriseDrives,
  ...performanceDrives,
];