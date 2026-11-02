import { TeamGroup, TeamMember } from '@/types/team';

/**
 * Team Data Configuration for Unconditional Love 3
 * 
 * TRUTH IN DATA ENFORCEMENT:
 * - Do not invent false names, photos, or roles.
 * - When individuals are officially approved by the committee, add them with isAnnounced: true.
 * - Current state: Committee structural areas are shown with tasteful pending announcement states.
 */
export const TEAM_GROUPS: TeamGroup[] = [
  {
    category: 'leadership',
    title: 'Gathering Coordination & Vision',
    description: 'Guiding the spiritual heart, overall program vision, and inter-church fellowship.',
    placeholderCount: 2,
  },
  {
    category: 'worship',
    title: 'Worship & Creative Arts',
    description: 'Leading our community in authentic, Christ-centered musical adoration and prayer.',
    placeholderCount: 3,
  },
  {
    category: 'hospitality',
    title: 'Hospitality & Welcome Crew',
    description: 'Ensuring every single young person feels seen, valued, and embraced from the moment they arrive.',
    placeholderCount: 3,
  },
  {
    category: 'logistics',
    title: 'Operations, Safety & Venue Care',
    description: 'Managing seamless check-in, audiovisual tech, venue setup, and attendee well-being at Avenra Gangaara.',
    placeholderCount: 2,
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  // Committee approval pending — entries will be populated upon sign-off
];

