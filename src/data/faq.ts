export interface FAQItem {
  id: string;
  category: 'essentials' | 'ticketing' | 'logistics' | 'community';
  question: string;
  answer: string;
  isConfirmed: boolean;
}

export const FAQ_CATEGORIES = [
  { id: 'all', label: 'All Questions' },
  { id: 'essentials', label: 'Essentials' },
  { id: 'ticketing', label: 'Ticketing & Fee' },
  { id: 'logistics', label: 'Venue & Travel' },
  { id: 'community', label: 'Community & Faith' },
] as const;

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'essentials',
    question: 'When and where is Unconditional Love 3 taking place?',
    answer:
      'Unconditional Love 3 is taking place on Wednesday, January 20, 2027 at Avenra Gangaara, Wennappuwa, Sri Lanka. The venue provides a serene waterside setting ideal for worship and fellowship.',
    isConfirmed: true,
  },
  {
    id: 'faq-2',
    category: 'essentials',
    question: 'What is the theme of this year’s gathering?',
    answer:
      'The theme is “Bring One Another”, drawn from John 13:34. It calls young people not to walk faith alone, but to reach out, invite friends, and bring one another into a safe, grace-filled community.',
    isConfirmed: true,
  },
  {
    id: 'faq-3',
    category: 'essentials',
    question: 'What are the start and finish times for the gathering?',
    answer:
      'Unconditional Love 3 runs from 2:30 PM to 9:30 PM on Wednesday, January 20, 2027. Registration check-in and doors will open promptly at 2:00 PM at Avenra Gangaara.',
    isConfirmed: true,
  },
  {
    id: 'faq-4',
    category: 'ticketing',
    question: 'How much is the entrance fee and what does it cover?',
    answer:
      'The entrance fee is Rs. 1,000 (LKR) per person. This standard admission fee helps cover gathering facilities, seating, and single-day event access at Avenra Gangaara.',
    isConfirmed: true,
  },
  {
    id: 'faq-5',
    category: 'ticketing',
    question: 'How do I pay and when will registration open?',
    answer:
      'Online registration will open following formal committee announcement. Secure payments will be processed in LKR via an approved Sri Lankan hosted payment gateway supporting credit/debit cards.',
    isConfirmed: true,
  },
  {
    id: 'faq-6',
    category: 'ticketing',
    question: 'How will I receive my admission ticket?',
    answer:
      'Upon verified successful payment, a confirmation email containing your unique, cryptographic single-use QR ticket will be sent to your registered email address. Present this code at the venue door for admission.',
    isConfirmed: true,
  },
  {
    id: 'faq-7',
    category: 'ticketing',
    question: 'Can one person buy multiple passes for a youth group?',
    answer:
      'The baseline system is engineered for single individual registrations. Group booking options are under review by the committee and will be confirmed alongside live launch terms.',
    isConfirmed: false,
  },
  {
    id: 'faq-8',
    category: 'logistics',
    question: 'How do I get to Avenra Gangaara in Wennappuwa?',
    answer:
      'Avenra Gangaara is located along the Colombo–Chilaw coastal road in Wennappuwa. It is easily accessible via private transport (with on-site parking) and public express buses operating between Colombo, Negombo, and Chilaw.',
    isConfirmed: true,
  },
  {
    id: 'faq-9',
    category: 'logistics',
    question: 'Are meals and refreshments provided?',
    answer:
      'Detailed meal and refreshment arrangements will be announced alongside the program schedule. A dedicated fellowship lunch break is scheduled.',
    isConfirmed: false,
  },
  {
    id: 'faq-10',
    category: 'logistics',
    question: 'Is there a specific dress code?',
    answer:
      'Casual, comfortable, and modest attire suitable for an open-air riverside youth gathering and worship sessions.',
    isConfirmed: true,
  },
  {
    id: 'faq-11',
    category: 'community',
    question: 'Who can attend? Do I need to belong to a specific church?',
    answer:
      'Unconditional Love 3 is an open Christian youth gathering. Young people, school leavers, university students, and young adults from all Christian denominations and those seeking God are warmly welcomed.',
    isConfirmed: true,
  },
  {
    id: 'faq-12',
    category: 'community',
    question: 'Will there be pastoral support and personal prayer?',
    answer:
      'Yes. Our ministry team and youth pastors will be available throughout the day for anyone seeking personal prayer, encouragement, or spiritual guidance in a private, confidential setting.',
    isConfirmed: true,
  },
];

