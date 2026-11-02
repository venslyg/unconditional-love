export interface SessionItem {
  id: string;
  order: number;
  period: 'Morning' | 'Midday' | 'Afternoon' | 'Evening';
  title: string;
  focus: string;
  description: string;
  type: 'worship' | 'keynote' | 'fellowship' | 'prayer' | 'check-in';
  timingDisplay: string; // e.g., 'Timing to be announced'
}

export interface ScheduleConfig {
  isAnnounced: boolean;
  announcementNotice: string;
  sessions: SessionItem[];
}

