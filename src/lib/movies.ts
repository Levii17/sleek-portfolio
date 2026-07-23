import {
  MovieNote,
  MovieNoteFrontmatter,
  MovieNotePreview,
} from '@/types/movies';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const moviesDirectory = path.join(process.cwd(), 'src/data/movies');

/**
 * Get all movie note files from the movies directory
 */
export function getMovieNoteSlugs(): string[] {
  if (!fs.existsSync(moviesDirectory)) {
    return [];
  }

  const files = fs.readdirSync(moviesDirectory);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

/**
 * Get a movie note by slug with full content
 */
export function getMovieNoteBySlug(slug: string): MovieNote | null {
  try {
    const fullPath = path.join(moviesDirectory, `${slug}.mdx`);

    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // Validate frontmatter
    const frontmatter = data as MovieNoteFrontmatter;
    if (!frontmatter.title || !frontmatter.year) {
      throw new Error(`Invalid frontmatter in ${slug}.mdx`);
    }

    return {
      slug,
      frontmatter,
      content,
    };
  } catch (error) {
    console.error(`Error reading movie note ${slug}:`, error);
    return null;
  }
}

/**
 * Get all published movie notes (frontmatter only)
 */
export function getPublishedMovieNotes(): MovieNotePreview[] {
  const slugs = getMovieNoteSlugs();

  return slugs
    .map((slug) => {
      const note = getMovieNoteBySlug(slug);
      if (!note) return null;

      return { slug: note.slug, frontmatter: note.frontmatter };
    })
    .filter(
      (note): note is MovieNotePreview =>
        note !== null && note.frontmatter.isPublished,
    );
}

/**
 * Slugs of every published movie note, for quick "does this movie have a
 * note?" lookups when rendering the movie list.
 */
export function getPublishedMovieNoteSlugs(): Set<string> {
  return new Set(getPublishedMovieNotes().map((note) => note.slug));
}
