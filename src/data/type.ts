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
  MTBF?: string;
}