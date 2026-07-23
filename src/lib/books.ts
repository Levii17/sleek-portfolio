import { BookNote, BookNoteFrontmatter, BookNotePreview } from '@/types/books';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const booksDirectory = path.join(process.cwd(), 'src/data/books');

/**
 * Get all book note files from the books directory
 */
export function getBookNoteSlugs(): string[] {
  if (!fs.existsSync(booksDirectory)) {
    return [];
  }

  const files = fs.readdirSync(booksDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get a book note by slug with full content
 */
export function getBookNoteBySlug(slug: string): BookNote | null {
  try {
    const fullPath = path.join(booksDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate frontmatter
    const frontmatter = data as BookNoteFrontmatter;
    if (!frontmatter.title || !frontmatter.author) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading book note ${slug}:`, error);
    return null;
  }
}

/**
 * Get all published book notes (frontmatter only)
 */
export function getPublishedBookNotes(): BookNotePreview[] {
  const slugs = getBookNoteSlugs();

  return slugs
    .map((slug) => {
      const note = getBookNoteBySlug(slug);
      if (!note) return null;

      return { slug: note.slug, frontmatter: note.frontmatter };
    })
    .filter(
      (note): note is BookNotePreview =>
        note !== null && note.frontmatter.isPublished,
    );
}

/**
 * Slugs of every published book note, for quick "does this book have a
 * note?" lookups when rendering the book list.
 */
export function getPublishedBookNoteSlugs(): Set<string> {
  return new Set(getPublishedBookNotes().map((note) => note.slug));
}
