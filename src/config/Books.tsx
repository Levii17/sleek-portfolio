export type Book = {
  title: string;
  author: string;
};

export type BookCategory = {
  name: string;
  books: Book[];
};

export const bookCategories: BookCategory[] = [
  {
    name: 'Power & Influence',
    books: [
      { title: 'The 48 Laws of Power', author: 'Robert Greene' },
      { title: 'The Art of Seduction', author: 'Robert Greene' },
      { title: 'The Laws of Human Nature', author: 'Robert Greene' },
      { title: 'Surrounded by Idiots', author: 'Thomas Erikson' },
    ],
  },
  {
    name: 'Mastery & Focus',
    books: [
      { title: 'Mastery', author: 'Robert Greene' },
      { title: 'Deep Work', author: 'Cal Newport' },
      { title: 'Limitless', author: 'Jim Kwik' },
    ],
  },
  {
    name: 'Discipline & Grit',
    books: [
      { title: 'No Excuses', author: 'Brian Tracy' },
      { title: "Can't Hurt Me", author: 'David Goggins' },
      { title: 'Unfuck Yourself', author: 'Gary John Bishop' },
    ],
  },
  {
    name: 'Meaning & Mind',
    books: [
      { title: "Man's Search for Meaning", author: 'Viktor E. Frankl' },
      {
        title: 'The Power of Your Subconscious Mind',
        author: 'Joseph Murphy',
      },
    ],
  },
  {
    name: 'Habits & Systems',
    books: [
      {
        title: 'The 7 Habits of Highly Effective People',
        author: 'Stephen R. Covey',
      },
    ],
  },
  {
    name: 'Attention & Dopamine',
    books: [
      { title: 'Dopamine Detox', author: 'Thibaut Meurisse' },
      { title: 'Digital Minimalism', author: 'Cal Newport' },
    ],
  },
  {
    name: 'Creativity',
    books: [{ title: 'Steal Like an Artist', author: 'Austin Kleon' }],
  },
  {
    name: 'Big Ideas',
    books: [{ title: 'This Explains Everything', author: 'John Brockman' }],
  },
];
