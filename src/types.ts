export type BayType = 'private_room' | 'open_bay';

export interface BookingDetails {
  id: string;
  bayType: BayType;
  date: string;
  timeSlot: string;
  durationHours: number;
  playersCount: number;
  addSwingAnalysis: boolean;
  foodPackageId?: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  totalPrice: number;
  status: 'confirmed' | 'pending';
  createdAt: string;
}

export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'beverages' | 'cocktails';
  description: string;
  price: number;
  popular?: boolean;
  dietary?: string[];
  image?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar: string;
  rating: number;
  date: string;
  comment: string;
  tag: 'Private Room' | 'Open Bays' | 'Swing Analysis' | 'Food & Drinks' | 'General';
  helpfulCount: number;
}

export interface ClubTelemetry {
  clubName: string;
  avgDistanceYards: number;
  clubSpeedMph: number;
  ballSpeedMph: number;
  launchAngleDeg: number;
  spinRateRpm: number;
}
