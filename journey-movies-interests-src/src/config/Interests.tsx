export type Interest = {
  title: string;
  description: string;
};

// TODO: replace these with your actual interests — placeholders for now.
export const interests: Interest[] = [
  {
    title: 'Formula 1',
    description: 'Following the sport, the strategy, and the technology.',
  },
  {
    title: 'Chess',
    description: 'Casual games and studying openings.',
  },
  {
    title: 'Photography',
    description: 'Street and landscape shots on weekends.',
  },
];

const interestsConfig = {
  interests,
};

export default interestsConfig;
