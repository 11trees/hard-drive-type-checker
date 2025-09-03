export interface HardDrive {
  id: string;
  brand: string;
  model: string;
  capacity: string;
  rpm: number;
  cache: string;
  interface: string;
  technology: 'PMR' | 'SMR' | 'CMR' | 'HAMR';
  series?: string;
  formFactor: string;
  workloadRating?: string;
  warranty?: string;
  targetUse: string;
  performance?: string;
  price?: string;
  notes?: string;
}

export const hardDriveDatabase: HardDrive[] = [
  // Western Digital Blue Series
  { id: 'wd1', brand: 'Western Digital', model: 'WD10EZEX', capacity: '1TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Blue', formFactor: '3.5"', targetUse: 'General computing, cold storage, occasional usage', performance: '147-180 MB/s sustained transfer', price: '$49.09' },
  { id: 'wd2', brand: 'Western Digital', model: 'WD20EZAZ', capacity: '2TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Blue', formFactor: '3.5"', targetUse: 'General computing, cold storage, occasional usage', performance: '147-180 MB/s sustained transfer' },
  { id: 'wd3', brand: 'Western Digital', model: 'WD40EZAZ', capacity: '4TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Blue', formFactor: '3.5"', targetUse: 'General computing, cold storage, occasional usage', performance: '147-180 MB/s sustained transfer' },
  { id: 'wd4', brand: 'Western Digital', model: 'WD60EZAZ', capacity: '6TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Blue', formFactor: '3.5"', targetUse: 'General computing, cold storage, occasional usage', performance: '147-180 MB/s sustained transfer', price: '$249' },

  // Western Digital Black Series
  { id: 'wd5', brand: 'Western Digital', model: 'WD1003FZEX', capacity: '1TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Black', formFactor: '3.5"', targetUse: 'Gaming, workstations, demanding applications', performance: '202-227 MB/s sustained transfer', price: '$49.09' },
  { id: 'wd6', brand: 'Western Digital', model: 'WD2003FZEX', capacity: '2TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Black', formFactor: '3.5"', targetUse: 'Gaming, workstations, demanding applications', performance: '202-227 MB/s sustained transfer' },
  { id: 'wd7', brand: 'Western Digital', model: 'WD4005FZBX', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Black', formFactor: '3.5"', targetUse: 'Gaming, workstations, demanding applications', performance: '202-227 MB/s sustained transfer' },
  { id: 'wd8', brand: 'Western Digital', model: 'WD6003FZBX', capacity: '6TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Black', formFactor: '3.5"', targetUse: 'Gaming, workstations, demanding applications', performance: '202-227 MB/s sustained transfer' },
  { id: 'wd9', brand: 'Western Digital', model: 'WD101FZBX', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Black', formFactor: '3.5"', targetUse: 'Gaming, workstations, demanding applications', performance: '202-227 MB/s sustained transfer', price: '$273.87' },

  // Western Digital Red Series
  { id: 'wd10', brand: 'Western Digital', model: 'WD10EFRX', capacity: '1TB', rpm: 5400, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Red', formFactor: '3.5"', targetUse: 'File sharing, NAS devices, RAID configurations', performance: '150-210 MB/s sustained transfer', price: '$49.99' },
  { id: 'wd11', brand: 'Western Digital', model: 'WD20EFAX', capacity: '2TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Red', formFactor: '3.5"', targetUse: 'File sharing, NAS devices, RAID configurations', performance: '150-210 MB/s sustained transfer' },
  { id: 'wd12', brand: 'Western Digital', model: 'WD40EFAX', capacity: '4TB', rpm: 5400, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'Red', formFactor: '3.5"', targetUse: 'File sharing, NAS devices, RAID configurations', performance: '150-210 MB/s sustained transfer' },
  { id: 'wd13', brand: 'Western Digital', model: 'WD140EFFX', capacity: '14TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Red', formFactor: '3.5"', targetUse: 'File sharing, NAS devices, RAID configurations', performance: '150-210 MB/s sustained transfer', price: '$257.88' },

  // Western Digital Gold Series
  { id: 'wd14', brand: 'Western Digital', model: 'WD1005FBYZ', capacity: '1TB', rpm: 7200, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Gold', formFactor: '3.5"', targetUse: 'Enterprise environments, 24/7 operation', performance: '255+ MB/s sustained transfer', workloadRating: '550TB/year', warranty: '5 years', price: '$79.99' },
  { id: 'wd15', brand: 'Western Digital', model: 'WD4003FRYZ', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Gold', formFactor: '3.5"', targetUse: 'Enterprise environments, 24/7 operation', performance: '255+ MB/s sustained transfer', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'wd16', brand: 'Western Digital', model: 'WD101KRYZ', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Gold', formFactor: '3.5"', targetUse: 'Enterprise environments, 24/7 operation', performance: '255+ MB/s sustained transfer', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'wd17', brand: 'Western Digital', model: 'WD201KRYZ', capacity: '20TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Gold', formFactor: '3.5"', targetUse: 'Enterprise environments, 24/7 operation', performance: '255+ MB/s sustained transfer', workloadRating: '550TB/year', warranty: '5 years', price: '$976.00' },

  // Western Digital Purple Series
  { id: 'wd18', brand: 'Western Digital', model: 'WD10PURZ', capacity: '1TB', rpm: 5400, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Purple', formFactor: '3.5"', targetUse: '24/7 video recording, CCTV, security systems', performance: '110-145 MB/s sustained transfer', price: '$46.99' },
  { id: 'wd19', brand: 'Western Digital', model: 'WD40PURZ', capacity: '4TB', rpm: 5400, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Purple', formFactor: '3.5"', targetUse: '24/7 video recording, CCTV, security systems', performance: '110-145 MB/s sustained transfer' },
  { id: 'wd20', brand: 'Western Digital', model: 'WD101PURP', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Purple', formFactor: '3.5"', targetUse: '24/7 video recording, CCTV, security systems', performance: '110-145 MB/s sustained transfer', price: '$300' },

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

  // Toshiba P300 Series
  { id: 'ts1', brand: 'Toshiba', model: 'HDWD110UZSVA', capacity: '1TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'P300', formFactor: '3.5"', targetUse: 'Desktop PC storage', warranty: '2 years' },
  { id: 'ts2', brand: 'Toshiba', model: 'HDWD120UZSVA', capacity: '2TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'P300', formFactor: '3.5"', targetUse: 'Desktop PC storage', warranty: '2 years' },
  { id: 'ts3', brand: 'Toshiba', model: 'HDWD220UZSVA', capacity: '2TB', rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'Desktop PC storage', warranty: '2 years' },
  { id: 'ts4', brand: 'Toshiba', model: 'HDWD130UZSVA', capacity: '3TB', rpm: 7200, cache: '64MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'P300', formFactor: '3.5"', targetUse: 'Desktop PC storage', warranty: '2 years' },
  { id: 'ts5', brand: 'Toshiba', model: 'HDWD240UZSVA', capacity: '4TB', rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'Desktop PC storage', warranty: '2 years' },
  { id: 'ts6', brand: 'Toshiba', model: 'HDWD260UZSVA', capacity: '6TB', rpm: 5400, cache: '128MB', interface: 'SATA 6Gb/s', technology: 'SMR', series: 'P300', formFactor: '3.5"', targetUse: 'Desktop PC storage', warranty: '2 years' },

  // Toshiba N300 Series
  { id: 'ts7', brand: 'Toshiba', model: 'HDWG11AUZSVA', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '24/7 NAS environments', workloadRating: '180TB/year' },
  { id: 'ts8', brand: 'Toshiba', model: 'HDWG180UZSVA', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'N300', formFactor: '3.5"', targetUse: '24/7 NAS environments', workloadRating: '180TB/year' },

  // Toshiba X300 Series
  { id: 'ts9', brand: 'Toshiba', model: 'HDWR11AUZSVA', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'X300', formFactor: '3.5"', targetUse: 'Creative applications, gaming, and professional use' },
  { id: 'ts10', brand: 'Toshiba', model: 'HDWR180UZSVA', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'X300', formFactor: '3.5"', targetUse: 'Creative applications, gaming, and professional use' },

  // HGST Ultrastar Series
  { id: 'hg1', brand: 'HGST', model: 'HUS726T4TALA6L4', capacity: '4TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Ultrastar 7K6', formFactor: '3.5"', targetUse: 'Traditional storage and server applications', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'hg2', brand: 'HGST', model: 'HUS728T8TALE6L4', capacity: '8TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Ultrastar DC HC320', formFactor: '3.5"', targetUse: 'Enterprise 24/7 operation', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'hg3', brand: 'HGST', model: 'HUH721010ALE600', capacity: '10TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Ultrastar He10', formFactor: '3.5"', targetUse: 'Enterprise applications, helium-filled', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'hg4', brand: 'HGST', model: 'HUH721212ALE600', capacity: '12TB', rpm: 7200, cache: '256MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Ultrastar He12', formFactor: '3.5"', targetUse: 'Enterprise applications, helium-filled', workloadRating: '550TB/year', warranty: '5 years' },
  { id: 'hg5', brand: 'HGST', model: 'HUH721414ALE600', capacity: '14TB', rpm: 7200, cache: '512MB', interface: 'SATA 6Gb/s', technology: 'CMR', series: 'Ultrastar DC HC530', formFactor: '3.5"', targetUse: 'Enterprise applications, helium-filled', workloadRating: '550TB/year', warranty: '5 years' },

  // Samsung SpinPoint Series
  { id: 'sm1', brand: 'Samsung', model: 'HD103SJ', capacity: '1TB', rpm: 7200, cache: '32MB', interface: 'SATA 3Gb/s', technology: 'PMR', series: 'SpinPoint F3', formFactor: '3.5"', targetUse: 'Desktop computing' },
  { id: 'sm2', brand: 'Samsung', model: 'HD204UI', capacity: '2TB', rpm: 5400, cache: '32MB', interface: 'SATA 3Gb/s', technology: 'PMR', series: 'SpinPoint F4EG', formFactor: '3.5"', targetUse: 'Desktop computing, green series' },
  { id: 'sm3', brand: 'Samsung', model: 'HD502HJ', capacity: '500GB', rpm: 7200, cache: '16MB', interface: 'SATA 3Gb/s', technology: 'PMR', series: 'SpinPoint F3', formFactor: '3.5"', targetUse: 'Desktop computing' },
  { id: 'sm4', brand: 'Samsung', model: 'HD753LJ', capacity: '750GB', rpm: 7200, cache: '32MB', interface: 'SATA 3Gb/s', technology: 'PMR', series: 'SpinPoint F1', formFactor: '3.5"', targetUse: 'Desktop computing' },
  { id: 'sm5', brand: 'Samsung', model: 'HD154UI', capacity: '1.5TB', rpm: 5400, cache: '32MB', interface: 'SATA 3Gb/s', technology: 'PMR', series: 'SpinPoint F2EG', formFactor: '3.5"', targetUse: 'Desktop computing, green series' }
];

export const searchHardDrives = (query: string): HardDrive[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase();
  return hardDriveDatabase.filter(drive => 
    drive.brand.toLowerCase().includes(searchTerm) ||
    drive.model.toLowerCase().includes(searchTerm) ||
    drive.series?.toLowerCase().includes(searchTerm) ||
    drive.capacity.toLowerCase().includes(searchTerm) ||
    drive.technology.toLowerCase().includes(searchTerm) ||
    drive.targetUse.toLowerCase().includes(searchTerm)
  );
};

export const getAllBrands = (): string[] => {
  return Array.from(new Set(hardDriveDatabase.map(drive => drive.brand))).sort();
};

export const getAllSeries = (): string[] => {
  return Array.from(new Set(hardDriveDatabase.map(drive => drive.series).filter(Boolean))).sort();
};

export const getAllTechnologies = (): string[] => {
  return Array.from(new Set(hardDriveDatabase.map(drive => drive.technology))).sort();
};