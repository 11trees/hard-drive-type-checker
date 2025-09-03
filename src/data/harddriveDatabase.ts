import { HardDrive } from './type';
import { wdHardDrives } from './wd';
import { seagateHardDrives } from './seagate';
import { samsungHardDrives} from './samsung';
import { toshibaHardDrives} from './toshiba';
import { hgstHardDrives } from './HGST';


export const hardDriveDatabase = [
  ...wdHardDrives,
  ...seagateHardDrives,
  ...samsungHardDrives,
  ...toshibaHardDrives,
  ...hgstHardDrives,
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