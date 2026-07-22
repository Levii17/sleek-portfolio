export type Movie = {
  title: string;
  year: string;
};

export const movies: Movie[] = [
  { title: 'Dead Poets Society', year: '1989' },
  { title: 'Equilibrium', year: '2002' },
  { title: 'The Social Network', year: '2010' },
  { title: 'Inception', year: '2010' },
  { title: 'The Blacklist', year: '2013' },
  { title: 'Interstellar', year: '2014' },
  { title: 'Mr. Robot', year: '2015' },
  { title: 'Dark', year: '2017' },
  { title: 'Arcane', year: '2021' },
  { title: 'Cyberpunk: Edgerunners', year: '2022' },
];

const moviesConfig = {
  movies,
};

export default moviesConfig;
