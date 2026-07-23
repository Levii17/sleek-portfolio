export interface BookNoteFrontmatter {
  title: string;
  author: string;
  category: string;
  rating?: number;
  date: string;
  isPublished: boolean;
}

export interface BookNote {
  slug: string;
  frontmatter: BookNoteFrontmatter;
  content: string;
}

export interface BookNotePreview {
  slug: string;
  frontmatter: BookNoteFrontmatter;
}
