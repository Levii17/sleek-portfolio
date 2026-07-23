import { Link } from 'next-view-transitions';
import * as React from 'react';

import ArrowLeft from '../svgs/ArrowLeft';
import { Button } from '../ui/button';

interface PageHeaderProps {
  title: string;
  description?: React.ReactNode;
  /** Where the back button should go. Defaults to the homepage. */
  backHref?: string;
  /** Defaults to "Back to Home". */
  backLabel?: string;
  /** Applied to the <h1> so an ancestor <section> can use aria-labelledby. */
  headingId?: string;
  /** Used to build a consistent analytics buttonId/section for the back button. */
  trackId: string;
}

/**
 * The standard page header used across all top-level pages (Books, Movies,
 * Blog, Resume, Gears, Setup, Contact, etc): a small back button, then the
 * title and description, with a divider below. Keeping this in one place
 * means every page's header stays visually consistent by construction.
 */
export function PageHeader({
  title,
  description,
  backHref = '/',
  backLabel = 'Back to Home',
  headingId,
  trackId,
}: PageHeaderProps) {
  return (
    <div className="animate-in-up border-border space-y-4 border-b pb-8">
      <Button
        variant="ghost"
        size="sm"
        asChild
        className="group"
        track={{
          name: 'button_click',
          data: { buttonId: `${trackId}_back`, section: trackId },
        }}
      >
        <Link href={backHref} className="flex items-center space-x-2">
          <ArrowLeft className="size-4" />
          <span>{backLabel}</span>
        </Link>
      </Button>

      <div className="space-y-3">
        <h1
          id={headingId}
          className="text-foreground text-2xl font-bold tracking-tight"
        >
          {title}
        </h1>
        {description && (
          <p className="text-secondary max-w-2xl">{description}</p>
        )}
      </div>
    </div>
  );
}
