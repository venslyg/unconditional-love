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
  readonly timeDisplay: string;
  readonly timezone: string;
  readonly venue: VenueInfo;
  readonly fee: FeeInfo;
  readonly expectedAttendance: number;
  readonly isRegistrationLive: boolean; // Must remain false during frontend phases
  // Confirmed event schedule hours
  readonly startTime: string; // '14:30' (2:30 PM)
  readonly endTime: string; // '21:30' (9:30 PM)
  readonly checkInStartTime: string; // '14:00' (2:00 PM)
  // Unconfirmed contact channels (pending support roster)
  readonly officialEmail: string | null;
  readonly officialPhone: string | null;
  readonly officialWhatsApp: string | null;
}
