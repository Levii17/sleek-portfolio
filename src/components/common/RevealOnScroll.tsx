'use client';

import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import * as React from 'react';

interface RevealOnScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /** Extra delay (in seconds) before the reveal transition starts once in view. */
  delay?: number;
}

/**
 * Fades an element up into place the first time it scrolls into the
 * viewport. A thin client wrapper around the `useInView` hook so Server
 * Components can opt individual blocks into the `animate-in-up-on-view` /
 * `in-view` reveal without becoming Client Components themselves — just
 * pass the content in as children.
 */
export function RevealOnScroll({
  children,
  className,
  delay = 0,
  style,
  ...props
}: RevealOnScrollProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={cn('animate-in-up-on-view', { 'in-view': inView }, className)}
      style={{ transitionDelay: `${delay}s`, ...style }}
      {...props}
    >
      {children}
    </div>
  );
}
