export interface VenueInfo {
  readonly name: string;
  readonly city: string;
  readonly country: string;
  readonly addressDisplay: string;
  readonly mapsQuery: string;
}

export interface FeeInfo {
  readonly amount: number;
  readonly currency: 'LKR';
  readonly formatted: string;
  readonly unit: string;
}

export interface EventConfig {
  readonly id: string;
  readonly name: string;
  readonly romanTitle: string;
  readonly theme: string;
  readonly subtitle: string;
  readonly date: string; // ISO date 'YYYY-MM-DD'
  readonly dateDisplay: string;
  readonly timezone: string;
  readonly venue: VenueInfo;
  readonly fee: FeeInfo;
  readonly expectedAttendance: number;
  readonly isRegistrationLive: boolean; // Must remain false during frontend phases
  // Unconfirmed details — strictly typed as pending/null
  readonly startTime: string | null;
  readonly endTime: string | null;
  readonly checkInStartTime: string | null;
  readonly officialEmail: string | null;
  readonly officialPhone: string | null;
  readonly officialWhatsApp: string | null;
}

