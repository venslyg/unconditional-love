import { EventConfig } from '@/types/event';

/**
 * Authoritative Event Configuration for Unconditional Love 3
 * 
 * NOTE FOR AGENTS & DEVELOPERS:
 * - Only confirmed facts are hardcoded here.
 * - Do not invent agenda timings, speaker names, phone numbers, or refund promises.
 * - The reference flyer date (Nov 1, 2026) was for a core-team meeting and MUST NOT
 *   be used here. The public event date is January 20, 2027.
 */
export const EVENT_DATA: EventConfig = {
  id: 'ul3-2027',
  name: 'Unconditional Love 3',
  romanTitle: 'Unconditional Love III',
  theme: 'Bring One Another',
  subtitle: 'A youth gathering to experience God’s love and community',
  date: '2027-01-20',
  dateDisplay: 'Wednesday, January 20, 2027',
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
  
  // Pending committee approvals — DO NOT INVENT
  startTime: null,
  endTime: null,
  checkInStartTime: null,
  officialEmail: null,
  officialPhone: null,
  officialWhatsApp: null,
};

