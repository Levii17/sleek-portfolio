export interface MovieNoteFrontmatter {
  title: string;
  year: string;
  category: string;
  rating?: number;
  date: string;
  isPublished: boolean;
}

export interface MovieNote {
  slug: string;
  frontmatter: MovieNoteFrontmatter;
  content: string;
}

export interface MovieNotePreview {
  slug: string;
  frontmatter: MovieNoteFrontmatter;
}
