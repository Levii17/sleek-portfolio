import { BookNoteContent } from '@/components/books/BookNoteContent';
import Container from '@/components/common/Container';
import ArrowLeft from '@/components/svgs/ArrowLeft';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/Meta';
import { getBookNoteBySlug, getBookNoteSlugs } from '@/lib/books';
import { Metadata } from 'next';
import { Link } from 'next-view-transitions';
import { notFound } from 'next/navigation';

interface BookNotePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getBookNoteSlugs();

  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: BookNotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getBookNoteBySlug(slug);

  if (!note || !note.frontmatter.isPublished) {
    return {
      title: 'Note Not Found',
    };
  }

  const { title, author } = note.frontmatter;
  const description = `My thoughts on "${title}" by ${author}.`;

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${title} — Book Notes`,
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

export default async function BookNotePage({ params }: BookNotePageProps) {
  const { slug } = await params;
  const note = getBookNoteBySlug(slug);

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
              data: { buttonId: 'book_note_back', section: 'book_note' },
            }}
          >
            <Link href="/books" className="flex items-center space-x-2">
              <ArrowLeft className="size-4" />
              <span>Back to Books</span>
            </Link>
          </Button>
        </div>

        <BookNoteContent
          frontmatter={note.frontmatter}
          content={note.content}
        />
      </div>
    </Container>
  );
}
