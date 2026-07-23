export type Book = {
  title: string;
  author: string;
  /** Override the auto-generated slug used to look up a book note MDX file. */
  slug?: string;
};

export type BookCategory = {
  name: string;
  books: Book[];
};

export const bookCategories: BookCategory[] = [
  {
    name: 'Programming',
    books: [
      { title: 'The Pragmatic Programmer', author: 'Andrew Hunt' },
      { title: 'Clean Code', author: 'Robert Martin' },
      {
        title: 'Designing Data-Intensive Applications',
        author: 'Martin Kleppmann',
      },
      {
        title: 'Fundamentals of Software Architecture',
        author: 'Mark Richards',
      },
      { title: 'Learning Domain-Driven Design', author: 'Vlad Khononov' },
      {
        title: 'The Phoenix Project',
        author: 'Gene Kim, Kevin Behr & George Spafford',
      },
    ],
  },
  {
    name: 'Classic & Literary Fiction',
    books: [
      { title: 'No Longer Human', author: 'Osamu Dazai' },
      { title: 'The Metamorphosis', author: 'Frans Kafka' },
      { title: 'Letters To Felice', author: 'Frans Kafka' },
      { title: '1984', author: 'George Orwell' },
      { title: 'Animal Farm', author: 'George Orwell' },
    ],
  },
  {
    name: 'Philosophy, Logic & Strategy',
    books: [
      { title: 'The Republic', author: 'Plato' },
      { title: 'Mein Kampf', author: 'Adolf Hitler' },
      { title: 'The Art of War', author: 'Sun Tzu' },
    ],
  },
  {
    name: 'Psychology, Human Behavior & Improvement',
    books: [
      { title: 'The Rules of The Game', author: 'Neil Strauss' },
      { title: 'The Alchemist', author: 'Paulo Coelho' },
      { title: 'Manual of the Warrior of Light', author: 'Paulo Coelho' },
      { title: 'The 48 Laws of Power', author: 'Robert Greene' },
      { title: "Can't Hurt Me", author: 'David Goggins' },
    ],
  },
  {
    name: 'Creativity',
    books: [{ title: 'Steal Like an Artist', author: 'Austin Kleon' }],
  },
];
