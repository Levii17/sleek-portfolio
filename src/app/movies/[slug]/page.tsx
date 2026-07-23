import Container from '@/components/common/Container';
import { MovieNoteContent } from '@/components/movies/MovieNoteContent';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/Meta';
import { getMovieNoteBySlug, getMovieNoteSlugs } from '@/lib/movies';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

interface MovieNotePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getMovieNoteSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: MovieNotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getMovieNoteBySlug(slug);

  if (!note || !note.frontmatter.isPublished) {
    return {
      title: 'Note Not Found',
    };
  }

  const { title, year } = note.frontmatter;
  const description = `My thoughts on "${title}" (${year}).`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${title} — Movie Notes`,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
  };
}

export default async function MovieNotePage({ params }: MovieNotePageProps) {
  const { slug } = await params;
  const note = getMovieNoteBySlug(slug);

  if (!note || !note.frontmatter.isPublished) {
    notFound();
  }

  return (
    <Container className="py-16">
      <div className="space-y-12">
        <div>
          <Button
            variant="ghost"
            asChild
            className="group"
            track={{
              name: 'button_click',
              data: { buttonId: 'movie_note_back', section: 'movie_note' },
            }}
          >
            <Link href="/movies" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Movies</span>
            </Link>
          </Button>
        </div>

        <MovieNoteContent
          frontmatter={note.frontmatter}
          content={note.content}
        />
      </div>
    </Container>
  );
}
