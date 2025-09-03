export interface HardDrive {
  model: string;
  brand: string;
  capacity: string;
  rpm: number;
  cache: string;
  interface: string;
  technology: 'PMR' | 'SMR' | 'CMR' | 'HAMR';
  series: string;
  formFactor: string;
  workloadRating?: string;
  warranty?: string;
  targetUse: string;
  performance?: string;
  price?: string;
}

export const expandedHardDrives: HardDrive[] = [
  // Western Digital Blue Series
  {
    model: "WD10EZEX",
    brand: "Western Digital",
    capacity: "1TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Blue",
    formFactor: "3.5\"",
    targetUse: "General computing, cold storage, occasional usage",
    performance: "147-180 MB/s sustained transfer",
    price: "$49.09"
  },
  {
    model: "WD20EZAZ",
    brand: "Western Digital",
    capacity: "2TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "Blue",
    formFactor: "3.5\"",
    targetUse: "General computing, cold storage, occasional usage",
    performance: "147-180 MB/s sustained transfer"
  },
  {
    model: "WD40EZAZ",
    brand: "Western Digital",
    capacity: "4TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "Blue",
    formFactor: "3.5\"",
    targetUse: "General computing, cold storage, occasional usage",
    performance: "147-180 MB/s sustained transfer"
  },
  {
    model: "WD60EZAZ",
    brand: "Western Digital",
    capacity: "6TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "Blue",
    formFactor: "3.5\"",
    targetUse: "General computing, cold storage, occasional usage",
    performance: "147-180 MB/s sustained transfer",
    price: "$249"
  },

  // Western Digital Black Series
  {
    model: "WD1003FZEX",
    brand: "Western Digital",
    capacity: "1TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Black",
    formFactor: "3.5\"",
    targetUse: "Gaming, workstations, demanding applications",
    performance: "202-227 MB/s sustained transfer",
    price: "$49.09"
  },
  {
    model: "WD2003FZEX",
    brand: "Western Digital",
    capacity: "2TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Black",
    formFactor: "3.5\"",
    targetUse: "Gaming, workstations, demanding applications",
    performance: "202-227 MB/s sustained transfer"
  },
  {
    model: "WD4005FZBX",
    brand: "Western Digital",
    capacity: "4TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Black",
    formFactor: "3.5\"",
    targetUse: "Gaming, workstations, demanding applications",
    performance: "202-227 MB/s sustained transfer"
  },
  {
    model: "WD6003FZBX",
    brand: "Western Digital",
    capacity: "6TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Black",
    formFactor: "3.5\"",
    targetUse: "Gaming, workstations, demanding applications",
    performance: "202-227 MB/s sustained transfer"
  },
  {
    model: "WD101FZBX",
    brand: "Western Digital",
    capacity: "10TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Black",
    formFactor: "3.5\"",
    targetUse: "Gaming, workstations, demanding applications",
    performance: "202-227 MB/s sustained transfer",
    price: "$273.87"
  },

  // Western Digital Red Series
  {
    model: "WD10EFRX",
    brand: "Western Digital",
    capacity: "1TB",
    rpm: 5400,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Red",
    formFactor: "3.5\"",
    targetUse: "File sharing, NAS devices, RAID configurations",
    performance: "150-210 MB/s sustained transfer",
    price: "$49.99"
  },
  {
    model: "WD20EFAX",
    brand: "Western Digital",
    capacity: "2TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "Red",
    formFactor: "3.5\"",
    targetUse: "File sharing, NAS devices, RAID configurations",
    performance: "150-210 MB/s sustained transfer"
  },
  {
    model: "WD40EFAX",
    brand: "Western Digital",
    capacity: "4TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "Red",
    formFactor: "3.5\"",
    targetUse: "File sharing, NAS devices, RAID configurations",
    performance: "150-210 MB/s sustained transfer"
  },
  {
    model: "WD140EFFX",
    brand: "Western Digital",
    capacity: "14TB",
    rpm: 7200,
    cache: "512MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Red",
    formFactor: "3.5\"",
    targetUse: "File sharing, NAS devices, RAID configurations",
    performance: "150-210 MB/s sustained transfer",
    price: "$257.88"
  },

  // Western Digital Gold Series
  {
    model: "WD1005FBYZ",
    brand: "Western Digital",
    capacity: "1TB",
    rpm: 7200,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Gold",
    formFactor: "3.5\"",
    targetUse: "Enterprise environments, 24/7 operation",
    performance: "255+ MB/s sustained transfer",
    workloadRating: "550TB/year",
    warranty: "5 years",
    price: "$79.99"
  },
  {
    model: "WD4003FRYZ",
    brand: "Western Digital",
    capacity: "4TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Gold",
    formFactor: "3.5\"",
    targetUse: "Enterprise environments, 24/7 operation",
    performance: "255+ MB/s sustained transfer",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "WD101KRYZ",
    brand: "Western Digital",
    capacity: "10TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Gold",
    formFactor: "3.5\"",
    targetUse: "Enterprise environments, 24/7 operation",
    performance: "255+ MB/s sustained transfer",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "WD201KRYZ",
    brand: "Western Digital",
    capacity: "20TB",
    rpm: 7200,
    cache: "512MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Gold",
    formFactor: "3.5\"",
    targetUse: "Enterprise environments, 24/7 operation",
    performance: "255+ MB/s sustained transfer",
    workloadRating: "550TB/year",
    warranty: "5 years",
    price: "$976.00"
  },

  // Western Digital Purple Series
  {
    model: "WD10PURZ",
    brand: "Western Digital",
    capacity: "1TB",
    rpm: 5400,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Purple",
    formFactor: "3.5\"",
    targetUse: "24/7 video recording, CCTV, security systems",
    performance: "110-145 MB/s sustained transfer",
    price: "$46.99"
  },
  {
    model: "WD40PURZ",
    brand: "Western Digital",
    capacity: "4TB",
    rpm: 5400,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Purple",
    formFactor: "3.5\"",
    targetUse: "24/7 video recording, CCTV, security systems",
    performance: "110-145 MB/s sustained transfer"
  },
  {
    model: "WD101PURP",
    brand: "Western Digital",
    capacity: "10TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Purple",
    formFactor: "3.5\"",
    targetUse: "24/7 video recording, CCTV, security systems",
    performance: "110-145 MB/s sustained transfer",
    price: "$300"
  },

  // Seagate BarraCuda Series
  {
    model: "ST1000DM010",
    brand: "Seagate",
    capacity: "1TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "BarraCuda",
    formFactor: "3.5\"",
    targetUse: "General desktop computing",
    workloadRating: "55TB/year"
  },
  {
    model: "ST2000DM008",
    brand: "Seagate",
    capacity: "2TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "BarraCuda",
    formFactor: "3.5\"",
    targetUse: "General desktop computing",
    workloadRating: "55TB/year"
  },
  {
    model: "ST4000DM004",
    brand: "Seagate",
    capacity: "4TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "BarraCuda",
    formFactor: "3.5\"",
    targetUse: "General desktop computing",
    workloadRating: "55TB/year"
  },
  {
    model: "ST8000DM004",
    brand: "Seagate",
    capacity: "8TB",
    rpm: 5400,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "BarraCuda",
    formFactor: "3.5\"",
    targetUse: "General desktop computing",
    workloadRating: "55TB/year"
  },

  // Seagate IronWolf Series
  {
    model: "ST1000VN002",
    brand: "Seagate",
    capacity: "1TB",
    rpm: 5900,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "IronWolf",
    formFactor: "3.5\"",
    targetUse: "NAS applications with 24/7 operation",
    workloadRating: "180TB/year",
    warranty: "3 years"
  },
  {
    model: "ST2000VN004",
    brand: "Seagate",
    capacity: "2TB",
    rpm: 5900,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "IronWolf",
    formFactor: "3.5\"",
    targetUse: "NAS applications with 24/7 operation",
    workloadRating: "180TB/year",
    warranty: "3 years"
  },
  {
    model: "ST4000VN008",
    brand: "Seagate",
    capacity: "4TB",
    rpm: 5900,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "IronWolf",
    formFactor: "3.5\"",
    targetUse: "NAS applications with 24/7 operation",
    workloadRating: "180TB/year",
    warranty: "3 years"
  },
  {
    model: "ST16000VN001",
    brand: "Seagate",
    capacity: "16TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "IronWolf",
    formFactor: "3.5\"",
    targetUse: "NAS applications with 24/7 operation",
    workloadRating: "180TB/year",
    warranty: "3 years"
  },

  // Seagate IronWolf Pro Series
  {
    model: "ST2000NE001",
    brand: "Seagate",
    capacity: "2TB",
    rpm: 7200,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "IronWolf Pro",
    formFactor: "3.5\"",
    targetUse: "NAS and multi-user environments",
    workloadRating: "300TB/year",
    warranty: "5 years"
  },
  {
    model: "ST4000NE001",
    brand: "Seagate",
    capacity: "4TB",
    rpm: 7200,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "IronWolf Pro",
    formFactor: "3.5\"",
    targetUse: "NAS and multi-user environments",
    workloadRating: "300TB/year",
    warranty: "5 years"
  },
  {
    model: "ST30000NT001",
    brand: "Seagate",
    capacity: "30TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "HAMR",
    series: "IronWolf Pro",
    formFactor: "3.5\"",
    targetUse: "NAS and multi-user environments",
    workloadRating: "550TB/year",
    warranty: "5 years",
    performance: "275 MB/s sustained transfer"
  },

  // Seagate FireCuda Series
  {
    model: "ST1000DX002",
    brand: "Seagate",
    capacity: "1TB",
    rpm: 7200,
    cache: "64MB + 8GB SSD",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "FireCuda",
    formFactor: "3.5\"",
    targetUse: "Gaming and creative applications"
  },
  {
    model: "ST2000DX002",
    brand: "Seagate",
    capacity: "2TB",
    rpm: 7200,
    cache: "64MB + 8GB SSD",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "FireCuda",
    formFactor: "3.5\"",
    targetUse: "Gaming and creative applications"
  },

  // Seagate Exos Series
  {
    model: "ST1000NM0055",
    brand: "Seagate",
    capacity: "1TB",
    rpm: 7200,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Exos 7E2",
    formFactor: "3.5\"",
    targetUse: "Enterprise and data center applications",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "ST4000NM0035",
    brand: "Seagate",
    capacity: "4TB",
    rpm: 7200,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Exos 7E8",
    formFactor: "3.5\"",
    targetUse: "Enterprise and data center applications",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "ST12000NM0008",
    brand: "Seagate",
    capacity: "12TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Exos X12",
    formFactor: "3.5\"",
    targetUse: "Enterprise and data center applications",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },

  // Toshiba P300 Series
  {
    model: "HDWD110UZSVA",
    brand: "Toshiba",
    capacity: "1TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "P300",
    formFactor: "3.5\"",
    targetUse: "Desktop PC storage",
    warranty: "2 years"
  },
  {
    model: "HDWD120UZSVA",
    brand: "Toshiba",
    capacity: "2TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "P300",
    formFactor: "3.5\"",
    targetUse: "Desktop PC storage",
    warranty: "2 years"
  },
  {
    model: "HDWD220UZSVA",
    brand: "Toshiba",
    capacity: "2TB",
    rpm: 5400,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "P300",
    formFactor: "3.5\"",
    targetUse: "Desktop PC storage",
    warranty: "2 years"
  },
  {
    model: "HDWD130UZSVA",
    brand: "Toshiba",
    capacity: "3TB",
    rpm: 7200,
    cache: "64MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "P300",
    formFactor: "3.5\"",
    targetUse: "Desktop PC storage",
    warranty: "2 years"
  },
  {
    model: "HDWD240UZSVA",
    brand: "Toshiba",
    capacity: "4TB",
    rpm: 5400,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "P300",
    formFactor: "3.5\"",
    targetUse: "Desktop PC storage",
    warranty: "2 years"
  },
  {
    model: "HDWD260UZSVA",
    brand: "Toshiba",
    capacity: "6TB",
    rpm: 5400,
    cache: "128MB",
    interface: "SATA 6Gb/s",
    technology: "SMR",
    series: "P300",
    formFactor: "3.5\"",
    targetUse: "Desktop PC storage",
    warranty: "2 years"
  },

  // Toshiba N300 Series
  {
    model: "HDWG11AUZSVA",
    brand: "Toshiba",
    capacity: "10TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "N300",
    formFactor: "3.5\"",
    targetUse: "24/7 NAS environments",
    workloadRating: "180TB/year"
  },
  {
    model: "HDWG180UZSVA",
    brand: "Toshiba",
    capacity: "8TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "N300",
    formFactor: "3.5\"",
    targetUse: "24/7 NAS environments",
    workloadRating: "180TB/year"
  },

  // Toshiba X300 Series
  {
    model: "HDWR11AUZSVA",
    brand: "Toshiba",
    capacity: "10TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "X300",
    formFactor: "3.5\"",
    targetUse: "Creative applications, gaming, and professional use"
  },
  {
    model: "HDWR180UZSVA",
    brand: "Toshiba",
    capacity: "8TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "X300",
    formFactor: "3.5\"",
    targetUse: "Creative applications, gaming, and professional use"
  },

  // HGST Ultrastar Series
  {
    model: "HUS726T4TALA6L4",
    brand: "HGST",
    capacity: "4TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Ultrastar 7K6",
    formFactor: "3.5\"",
    targetUse: "Traditional storage and server applications",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "HUS728T8TALE6L4",
    brand: "HGST",
    capacity: "8TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Ultrastar DC HC320",
    formFactor: "3.5\"",
    targetUse: "Enterprise 24/7 operation",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "HUH721010ALE600",
    brand: "HGST",
    capacity: "10TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Ultrastar He10",
    formFactor: "3.5\"",
    targetUse: "Enterprise applications, helium-filled",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "HUH721212ALE600",
    brand: "HGST",
    capacity: "12TB",
    rpm: 7200,
    cache: "256MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Ultrastar He12",
    formFactor: "3.5\"",
    targetUse: "Enterprise applications, helium-filled",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },
  {
    model: "HUH721414ALE600",
    brand: "HGST",
    capacity: "14TB",
    rpm: 7200,
    cache: "512MB",
    interface: "SATA 6Gb/s",
    technology: "CMR",
    series: "Ultrastar DC HC530",
    formFactor: "3.5\"",
    targetUse: "Enterprise applications, helium-filled",
    workloadRating: "550TB/year",
    warranty: "5 years"
  },

  // Samsung SpinPoint Series
  {
    model: "HD103SJ",
    brand: "Samsung",
    capacity: "1TB",
    rpm: 7200,
    cache: "32MB",
    interface: "SATA 3Gb/s",
    technology: "PMR",
    series: "SpinPoint F3",
    formFactor: "3.5\"",
    targetUse: "Desktop computing"
  },
  {
    model: "HD204UI",
    brand: "Samsung",
    capacity: "2TB",
    rpm: 5400,
    cache: "32MB",
    interface: "SATA 3Gb/s",
    technology: "PMR",
    series: "SpinPoint F4EG",
    formFactor: "3.5\"",
    targetUse: "Desktop computing, green series"
  },
  {
    model: "HD502HJ",
    brand: "Samsung",
    capacity: "500GB",
    rpm: 7200,
    cache: "16MB",
    interface: "SATA 3Gb/s",
    technology: "PMR",
    series: "SpinPoint F3",
    formFactor: "3.5\"",
    targetUse: "Desktop computing"
  },
  {
    model: "HD753LJ",
    brand: "Samsung",
    capacity: "750GB",
    rpm: 7200,
    cache: "32MB",
    interface: "SATA 3Gb/s",
    technology: "PMR",
    series: "SpinPoint F1",
    formFactor: "3.5\"",
    targetUse: "Desktop computing"
  },
  {
    model: "HD154UI",
    brand: "Samsung",
    capacity: "1.5TB",
    rpm: 5400,
    cache: "32MB",
    interface: "SATA 3Gb/s",
    technology: "PMR",
    series: "SpinPoint F2EG",
    formFactor: "3.5\"",
    targetUse: "Desktop computing, green series"
  }
];

export default expandedHardDrives;