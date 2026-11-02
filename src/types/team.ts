export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'leadership' | 'worship' | 'hospitality' | 'logistics' | 'prayer';
  bio?: string;
  image?: string;
  isAnnounced: boolean;
}

export interface TeamGroup {
  category: 'leadership' | 'worship' | 'hospitality' | 'logistics' | 'prayer';
  title: string;
  description: string;
  placeholderCount: number;
}

