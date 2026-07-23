export type Interest = {
  title: string;
  description: string;
};

export const interests: Interest[] = [
  {
    title: 'Football',
    description:
      'Following the sport, the leagues, and the players. Especially the English Premier League & La Liga. Chelsea x Barcelona. Visca el Barça! ❤️💙️',
  },
  {
    title: 'Chess',
    description:
      'Casual games and studying openings. Some of my favorite openings are the Sicilian Defense, the Ruy Lopez, and the Queen’s Gambit. S/O to Gotham Chess | Levy Rozman.',
  },
  {
    title: 'Anime',
    description:
      'Watching anime and reading manga, especially action and psychological genres. Some of my favorite anime are Death Note, Attack on Titan, Bungo Stray Dogs, Darker than Black, and Vinland Saga.',
  },
  {
    title: 'Gaming',
    description:
      'FIFA / FC | Call of Duty | GTA | God of War | Need for Speed | Assassin’s Creed | Elden Ring | Red Dead Redemption 2 | Ghost of Tsushima | Uncharted',
  },
  {
    title: 'UFC',
    description:
      'Following the sport, the fighters, and the techniques used in the octagon. Some of my favorite fighters are Conor McGregor, Ilia Topuria, Jon Jones, and Israel Adesanya.',
  },
  {
    title: 'Formula 1',
    description:
      'Following the sport, the strategy, and the technology. Some of my favorite drivers are Lewis Hamilton, Max Verstappen, and Charles Leclerc.',
  },
];

const interestsConfig = {
  interests,
};

export default interestsConfig;
