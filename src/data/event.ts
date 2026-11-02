import { EventConfig } from '@/types/event';

/**
 * Authoritative Event Configuration for Unconditional Love 3
 * 
 * NOTE FOR AGENTS & DEVELOPERS:
 * - Event Date: Wednesday, January 20, 2027
 * - Event Time: 2:30 PM – 9:30 PM (Confirmed)
 * - Registration / Doors Open: 2:00 PM (Confirmed)
 * - Venue: Avenra Gangaara, Wennappuwa, Sri Lanka
 * - Base Fee: LKR 1,000 per person
 */
export const EVENT_DATA: EventConfig = {
  id: 'ul3-2027',
  name: 'Unconditional Love 3',
  romanTitle: 'Unconditional Love III',
  theme: 'Bring One Another',
  subtitle: 'A youth gathering to experience God’s love and community',
  date: '2027-01-20',
  dateDisplay: 'Wednesday, January 20, 2027',
  timeDisplay: '2:30 PM – 9:30 PM (Doors open at 2:00 PM)',
  timezone: 'Asia/Colombo',
  venue: {
    name: 'Avenra Gangaara',
    city: 'Wennappuwa',
    country: 'Sri Lanka',
    addressDisplay: 'Avenra Gangaara, Wennappuwa, Sri Lanka',
    mapsQuery: 'Avenra+Gangaara+Wennappuwa+Sri+Lanka',
  },
  fee: {
    amount: 1000,
    currency: 'LKR',
    formatted: 'Rs. 1,000',
    unit: 'per person',
  },
  expectedAttendance: 500,
  isRegistrationLive: false, // PREVIEW ONLY. Do not enable without committee sign-off.
  
  // Confirmed timings
  startTime: '14:30', // 2:30 PM
  endTime: '21:30',   // 9:30 PM
  checkInStartTime: '14:00', // 2:00 PM (Registrations open at the door)

  // Pending committee support channel sign-off
  officialEmail: null,
  officialPhone: null,
  officialWhatsApp: null,
};
