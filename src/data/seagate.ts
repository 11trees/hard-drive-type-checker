import { HardDrive } from './type';

// Barracuda 酷鱼（消费级，2.5/3.5寸，主打家用，注意部分SMR/叠瓦）
const barracudaDrives: HardDrive[] = [
  { id: 'ST500LM030', brand: 'Seagate', model: 'ST500LM030', capacity: '500GB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST500LM034', brand: 'Seagate', model: 'ST500LM034', capacity: '500GB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST1000LM048', brand: 'Seagate', model: 'ST1000LM048', capacity: '1TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST1000LM049', brand: 'Seagate', model: 'ST1000LM049', capacity: '1TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST2000LM015', brand: 'Seagate', model: 'ST2000LM015', capacity: '2TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST3000LM024', brand: 'Seagate', model: 'ST3000LM024', capacity: '3TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST4000LM024', brand: 'Seagate', model: 'ST4000LM024', capacity: '4TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST5000LM000', brand: 'Seagate', model: 'ST5000LM000', capacity: '5TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '2.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST500DM009', brand: 'Seagate', model: 'ST500DM009', capacity: '500GB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/非叠瓦' },
  { id: 'ST1000DM010', brand: 'Seagate', model: 'ST1000DM010', capacity: '1TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/非叠瓦' },
  { id: 'ST2000DM008', brand: 'Seagate', model: 'ST2000DM008', capacity: '2TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST2000DM005', brand: 'Seagate', model: 'ST2000DM005', capacity: '2TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST3000DM007', brand: 'Seagate', model: 'ST3000DM007', capacity: '3TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST4000DM004', brand: 'Seagate', model: 'ST4000DM004', capacity: '4TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST6000DM003', brand: 'Seagate', model: 'ST6000DM003', capacity: '6TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
  { id: 'ST8000DM004', brand: 'Seagate', model: 'ST8000DM004', capacity: '8TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'Barracuda', formFactor: '3.5"', targetUse: '家用消费级', notes: '空气封装/叠瓦' },
];

// SkyHawk 胞鹰（监控专用盘）
const skyhawkDrives: HardDrive[] = [
  { id: 'ST1000VX005', brand: 'Seagate', model: 'ST1000VX005', capacity: '1TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
  { id: 'ST3000VX009', brand: 'Seagate', model: 'ST3000VX009', capacity: '3TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
  { id: 'ST4000VX007', brand: 'Seagate', model: 'ST4000VX007', capacity: '4TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
  { id: 'ST4000VX013', brand: 'Seagate', model: 'ST4000VX013', capacity: '4TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'SMR', series: 'SkyHawk', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/叠瓦' },
  { id: 'ST6000VX001', brand: 'Seagate', model: 'ST6000VX001', capacity: '6TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
  { id: 'ST8000VX004', brand: 'Seagate', model: 'ST8000VX004', capacity: '8TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
];

// SkyHawk AI（高端监控/AI盘）
const skyhawkAIDrives: HardDrive[] = [
  { id: 'ST8000VE001', brand: 'Seagate', model: 'ST8000VE001', capacity: '8TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk AI', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
  { id: 'ST10000VE001', brand: 'Seagate', model: 'ST10000VE001', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk AI', formFactor: '3.5"', targetUse: '监控级', notes: '空气封装/非叠瓦' },
  { id: 'ST10000VE0008', brand: 'Seagate', model: 'ST10000VE0008', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk AI', formFactor: '3.5"', targetUse: '监控级', notes: '氧气封装/非叠瓦' },
  { id: 'ST12000VE001', brand: 'Seagate', model: 'ST12000VE001', capacity: '12TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk AI', formFactor: '3.5"', targetUse: '监控级', notes: '氧气封装/非叠瓦' },
  { id: 'ST16000VE002', brand: 'Seagate', model: 'ST16000VE002', capacity: '16TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk AI', formFactor: '3.5"', targetUse: '监控级', notes: '氧气封装/非叠瓦' },
  { id: 'ST18000VE002', brand: 'Seagate', model: 'ST18000VE002', capacity: '18TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'SkyHawk AI', formFactor: '3.5"', targetUse: '监控级', notes: '氧气封装/非叠瓦' },
];

// IronWolf / IronWolf Pro（NAS专用盘）
const ironwolfDrives: HardDrive[] = [
  // IronWolf
  { id: 'ST1000VN002', brand: 'Seagate', model: 'ST1000VN002', capacity: '1TB', rpm: 5900, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST2000VN004', brand: 'Seagate', model: 'ST2000VN004', capacity: '2TB', rpm: 5900, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST3000VN007', brand: 'Seagate', model: 'ST3000VN007', capacity: '3TB', rpm: 5900, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST4000VN008', brand: 'Seagate', model: 'ST4000VN008', capacity: '4TB', rpm: 5900, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST6000VN001', brand: 'Seagate', model: 'ST6000VN001', capacity: '6TB', rpm: 5400, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST8000VN004', brand: 'Seagate', model: 'ST8000VN004', capacity: '8TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST10000VN000', brand: 'Seagate', model: 'ST10000VN000', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST10000VN0008', brand: 'Seagate', model: 'ST10000VN0008', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
  { id: 'ST12000VN0008', brand: 'Seagate', model: 'ST12000VN0008', capacity: '12TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
  // IronWolf Pro
  { id: 'ST4000NE001', brand: 'Seagate', model: 'ST4000NE001', capacity: '4TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST6000NE000', brand: 'Seagate', model: 'ST6000NE000', capacity: '6TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST8000NE001', brand: 'Seagate', model: 'ST8000NE001', capacity: '8TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST10000NE000', brand: 'Seagate', model: 'ST10000NE000', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '空气封装/非叠瓦' },
  { id: 'ST10000NE0008', brand: 'Seagate', model: 'ST10000NE0008', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
  { id: 'ST12000NE0008', brand: 'Seagate', model: 'ST12000NE0008', capacity: '12TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
  { id: 'ST14000NE0008', brand: 'Seagate', model: 'ST14000NE0008', capacity: '14TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
  { id: 'ST16000NE000', brand: 'Seagate', model: 'ST16000NE000', capacity: '16TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
  { id: 'ST18000NE000', brand: 'Seagate', model: 'ST18000NE000', capacity: '18TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS', notes: '氧气封装/非叠瓦' },
];

// Exos（银河，企业级）
const exos7E8Drives: HardDrive[] = [
  { id: 'ST1000NM000A', brand: 'Seagate', model: 'ST1000NM000A', capacity: '1TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos 7E8', formFactor: '3.5"', targetUse: '企业级', notes: '空气封装/非叠瓦' },
  { id: 'ST2000NM001A', brand: 'Seagate', model: 'ST2000NM001A', capacity: '2TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos 7E8', formFactor: '3.5"', targetUse: '企业级', notes: '空气封装/非叠瓦' },
  { id: 'ST4000NM002A', brand: 'Seagate', model: 'ST4000NM002A', capacity: '4TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos 7E8', formFactor: '3.5"', targetUse: '企业级', notes: '空气封装/非叠瓦' },
  { id: 'ST6000NM021A', brand: 'Seagate', model: 'ST6000NM021A', capacity: '6TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos 7E8', formFactor: '3.5"', targetUse: '企业级', notes: '空气封装/非叠瓦' },
  { id: 'ST8000NM000A', brand: 'Seagate', model: 'ST8000NM000A', capacity: '8TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos 7E8', formFactor: '3.5"', targetUse: '企业级', notes: '空气封装/非叠瓦' },
];

const exosX16Drives: HardDrive[] = [
  { id: 'ST10000NM001G', brand: 'Seagate', model: 'ST10000NM001G', capacity: '10TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X16', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
  { id: 'ST12000NM001G', brand: 'Seagate', model: 'ST12000NM001G', capacity: '12TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X16', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
  { id: 'ST14000NM001G', brand: 'Seagate', model: 'ST14000NM001G', capacity: '14TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X16', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
  { id: 'ST16000NM001G', brand: 'Seagate', model: 'ST16000NM001G', capacity: '16TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X16', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
];

const exosX18Drives: HardDrive[] = [
  { id: 'ST12000NM000J', brand: 'Seagate', model: 'ST12000NM000J', capacity: '12TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X18', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
  { id: 'ST14000NM000J', brand: 'Seagate', model: 'ST14000NM000J', capacity: '14TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X18', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
  { id: 'ST16000NM000J', brand: 'Seagate', model: 'ST16000NM000J', capacity: '16TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X18', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' },
  { id: 'ST18000NM000J', brand: 'Seagate', model: 'ST18000NM000J', capacity: '18TB', rpm: 7200, cache: '-', interface: 'SATA', technology: 'CMR', series: 'Exos X18', formFactor: '3.5"', targetUse: '企业级', notes: '氧气封装/非叠瓦' }
];

export const seagateHardDrives = [
  ...barracudaDrives,
  ...skyhawkDrives,
  ...skyhawkAIDrives,
  ...ironwolfDrives,
  ...exos7E8Drives,
  ...exosX16Drives,
  ...exosX18Drives,
];