import { ScheduleConfig } from '@/types/schedule';

/**
 * Schedule Outline for Unconditional Love 3 (January 20, 2027)
 * 
 * TRUTH IN DATA ENFORCEMENT:
 * - Do not invent false starting/ending hours.
 * - The session order and thematic flow are defined, while specific clock times remain
 *   strictly marked as 'To be announced' pending committee sign-off.
 */
export const SCHEDULE_DATA: ScheduleConfig = {
  isAnnounced: false,
  announcementNotice:
    'Exact starting hour, session durations, and check-in times are being finalized by the organizing committee and will be announced prior to registration opening.',
  sessions: [
    {
      id: 'session-1',
      order: 1,
      period: 'Morning',
      title: 'Doors Open, Check-In & Welcome',
      focus: 'Arrival & Welcome',
      description:
        'Arrival at Avenra Gangaara, QR admission verification, welcome refreshments, and time to explore the waterside grounds.',
      type: 'check-in',
      timingDisplay: 'Morning (Time to be announced)',
    },
    {
      id: 'session-2',
      order: 2,
      period: 'Morning',
      title: 'Opening Worship & Community Gathering',
      focus: 'United Praise',
      description:
        'Lifting our voices in heartfelt praise, setting our hearts on Jesus, and embracing the gathering theme “Bring One Another”.',
      type: 'worship',
      timingDisplay: 'Morning Session',
    },
    {
      id: 'session-3',
      order: 3,
      period: 'Midday',
      title: 'Keynote Message: Experiencing God’s Love',
      focus: 'Scripture & Message',
      description:
        'An engaging, biblically grounded message on God’s unconditional grace, personal healing, and living out Christ-centered purpose.',
      type: 'keynote',
      timingDisplay: 'Midday Session',
    },
    {
      id: 'session-4',
      order: 4,
      period: 'Midday',
      title: 'Community Lunch & Riverside Fellowship',
      focus: 'Shared Table & Connection',
      description:
        'Sharing meals together by the river, building new friendships, and sharing personal stories in an unhurried, joyful setting.',
      type: 'fellowship',
      timingDisplay: 'Afternoon Break',
    },
    {
      id: 'session-5',
      order: 5,
      period: 'Afternoon',
      title: 'Ministry, Reflection & Extended Worship',
      focus: 'Prayer & Heart Ministry',
      description:
        'A dedicated time for personal reflection, prayer ministry, acoustic worship, and seeking God’s guidance for the year ahead.',
      type: 'prayer',
      timingDisplay: 'Afternoon Session',
    },
    {
      id: 'session-6',
      order: 6,
      period: 'Evening',
      title: 'Commissioning & Closing Celebration',
      focus: 'Going Forth in Love',
      description:
        'Final blessing, collective declaration of faith, and being commissioned to love and serve our communities back home.',
      type: 'worship',
      timingDisplay: 'Closing Session',
    },
  ],
};

