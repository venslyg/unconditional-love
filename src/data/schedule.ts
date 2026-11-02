import { ScheduleConfig } from '@/types/schedule';

/**
 * Confirmed Schedule Timeline for Unconditional Love 3
 * Date: Wednesday, January 20, 2027
 * Hours: 2:30 PM to 9:30 PM (Registrations & Doors open at 2:00 PM)
 * Venue: Avenra Gangaara, Wennappuwa
 */
export const SCHEDULE_DATA: ScheduleConfig = {
  isAnnounced: true,
  announcementNotice:
    'Official program hours confirmed: 2:30 PM to 9:30 PM. Doors and registration check-in desks open promptly at 2:00 PM at Avenra Gangaara.',
  sessions: [
    {
      id: 'session-1',
      order: 1,
      period: 'Afternoon',
      title: 'Doors Open, Registration & Welcome',
      focus: 'Check-In & Arrival',
      description:
        'Doors open at 2:00 PM. Digital QR ticket scanning, welcome packets, light refreshments, and time to explore the waterside grounds.',
      type: 'check-in',
      timingDisplay: '2:00 PM – 2:30 PM',
    },
    {
      id: 'session-2',
      order: 2,
      period: 'Afternoon',
      title: 'Opening Worship & Community Gathering',
      focus: 'United Praise',
      description:
        'Official start at 2:30 PM. Vibrant, heartfelt worship lifting our voices in unity under the 2027 theme “Bring One Another”.',
      type: 'worship',
      timingDisplay: '2:30 PM – 3:45 PM',
    },
    {
      id: 'session-3',
      order: 3,
      period: 'Afternoon',
      title: 'Keynote Message: Experiencing God’s Love',
      focus: 'Scripture & Truth',
      description:
        'An engaging biblical keynote addressing real youth questions—identity, belonging, overcoming anxiety, and finding purpose in Christ.',
      type: 'keynote',
      timingDisplay: '3:45 PM – 5:00 PM',
    },
    {
      id: 'session-4',
      order: 4,
      period: 'Evening',
      title: 'Riverside Fellowship & Community Dinner',
      focus: 'Shared Table & Connection',
      description:
        'Sharing meals together along the riverbanks, icebreakers, music, and building lifelong faith friendships.',
      type: 'fellowship',
      timingDisplay: '5:00 PM – 6:30 PM',
    },
    {
      id: 'session-5',
      order: 5,
      period: 'Evening',
      title: 'Ministry, Reflection & Extended Worship',
      focus: 'Prayer & Spiritual Renewal',
      description:
        'A sacred, unhurried time for personal prayer ministry, personal testimonies of God’s grace, and seeking the Holy Spirit.',
      type: 'prayer',
      timingDisplay: '6:30 PM – 8:30 PM',
    },
    {
      id: 'session-6',
      order: 6,
      period: 'Evening',
      title: 'Commissioning & Closing Sending',
      focus: 'Sent in Love',
      description:
        'Closing blessings, united declaration, and commissioning youth to live out unconditional love in their schools and hometowns.',
      type: 'worship',
      timingDisplay: '8:30 PM – 9:30 PM',
    },
  ],
};
