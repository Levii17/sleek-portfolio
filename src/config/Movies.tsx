export type Movie = {
  title: string;
  year: string;
  /** Override the auto-generated slug used to look up a movie note MDX file. */
  slug?: string;
};

export type MovieCategory = {
  name: string;
  movies: Movie[];
};

export const movieCategories: MovieCategory[] = [
  {
    name: 'Sci-Fi & Speculative',
    movies: [
      { title: 'Equilibrium', year: '2002' },
      { title: 'Inception', year: '2010' },
      { title: 'Interstellar', year: '2014' },
      { title: 'Dark', year: '2017' },
    ],
  },
  {
    name: 'Tech & Hacker Culture',
    movies: [
      { title: 'The Social Network', year: '2010' },
      { title: 'Mr. Robot', year: '2015' },
    ],
  },
  {
    name: 'Animated',
    movies: [
      { title: 'Arcane', year: '2021' },
      { title: 'Cyberpunk: Edgerunners', year: '2022' },
    ],
  },
  {
    name: 'Drama & Crime',
    movies: [
      { title: 'Dead Poets Society', year: '1989' },
      { title: 'The Blacklist', year: '2013' },
    ],
  },
];

const moviesConfig = {
  movieCategories,
};

export default moviesConfig;
