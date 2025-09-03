  import { HardDrive } from './type';
  
  export const seagateHardDrives: HardDrive[] = [  
  // Seagate BarraCuda Series
  { id: 'sg1', brand: 'Seagate', model: 'ST1000DM010', capacity: '1TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'BarraCuda', formFactor: '3.5"', targetUse: 'General desktop computing', workloadRating: '55TB/year' },
  { id: 'sg2', brand: 'Seagate', model: 'ST2000DM008', capacity: '2TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'BarraCuda', formFactor: '3.5"', targetUse: 'General desktop computing', workloadRating: '55TB/year' },
  { id: 'sg3', brand: 'Seagate', model: 'ST4000DM004', capacity: '4TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'BarraCuda', formFactor: '3.5"', targetUse: 'General desktop computing', workloadRating: '55TB/year' },
  { id: 'sg4', brand: 'Seagate', model: 'ST8000DM004', capacity: '8TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'BarraCuda', formFactor: '3.5"', targetUse: 'General desktop computing', workloadRating: '55TB/year' },

  // Seagate IronWolf Series
  { id: 'sg5', brand: 'Seagate', model: 'ST1000VN002', capacity: '1TB', rpm: 5900, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS applications with 24/7 operation', workloadRating: '180TB/year', warranty: '3 years' },
  { id: 'sg6', brand: 'Seagate', model: 'ST2000VN004', capacity: '2TB', rpm: 5900, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS applications with 24/7 operation', workloadRating: '180TB/year', warranty: '3 years' },
  { id: 'sg7', brand: 'Seagate', model: 'ST4000VN008', capacity: '4TB', rpm: 5900, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS applications with 24/7 operation', workloadRating: '180TB/year', warranty: '3 years' },
  { id: 'sg8', brand: 'Seagate', model: 'ST16000VN001', capacity: '16TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'IronWolf', formFactor: '3.5"', targetUse: 'NAS applications with 24/7 operation', workloadRating: '180TB/year', warranty: '3 years' },

  // Seagate IronWolf Pro Series
  { id: 'sg9', brand: 'Seagate', model: 'ST2000NE001', capacity: '2TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS and multi-user environments', workloadRating: '300TB/year', warranty: '5 years' },
  { id: 'sg10', brand: 'Seagate', model: 'ST4000NE001', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS and multi-user environments', workloadRating: '300TB/year', warranty: '5 years' },
  { id: 'sg11', brand: 'Seagate', model: 'ST30000NT001', capacity: '30TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'HAMR', series: 'IronWolf Pro', formFactor: '3.5"', targetUse: 'NAS and multi-user environments', workloadRating: '550TB/year', warranty: '5 years', performance: '275 MB/s sustained transfer' },

  // Seagate FireCuda Series
  { id: 'sg12', brand: 'Seagate', model: 'ST1000DX002', capacity: '1TB', rpm: 7200, cache: '64MB + 8GB SSD', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'FireCuda', formFactor: '3.5"', targetUse: 'Gaming and creative applications' },
  { id: 'sg13', brand: 'Seagate', model: 'ST2000DX002', capacity: '2TB', rpm: 7200, cache: '64MB + 8GB SSD', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'FireCuda', formFactor: '3.5"', targetUse: 'Gaming and creative applications' },

  // Seagate Exos Series
  { id: 'sg14', brand: 'Seagate', model: 'ST1000NM0055', capacity: '1TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Exos 7E2', formFactor: '3.5"', targetUse: 'Enterprise and data center applications', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'sg15', brand: 'Seagate', model: 'ST4000NM0035', capacity: '4TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Exos 7E8', formFactor: '3.5"', targetUse: 'Enterprise and data center applications', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'sg16', brand: 'Seagate', model: 'ST12000NM0008', capacity: '12TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Exos X12', formFactor: '3.5"', targetUse: 'Enterprise and data center applications', workloadRating: '550TB/year', warranty: '5 years' },
];