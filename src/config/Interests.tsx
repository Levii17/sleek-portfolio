export type Interest = {
  title: string;
  description: string;
};

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
    title: 'Anime',
    description:
      'Watching anime and reading manga, especially action and psychological genres.',
  },
  {
    title: 'Gaming',
    description:
      'FIFA / FC | Call of Duty | GTA | God of War | Valorant | Need for Speed | The Witcher | Assassin’s Creed | Resident Evil | The Last of Us | Cyberpunk 2077 | Elden Ring | Horizon Zero Dawn | Red Dead Redemption 2 | Ghost of Tsushima | Spider-Man | Uncharted',
  },
];

const interestsConfig = {
  interests,
};

export default interestsConfig;
