'use client';

import * as React from 'react';

const DEFAULT_OPTIONS: IntersectionObserverInit = {
  threshold: 0.15,
  rootMargin: '0px 0px -10% 0px',
};

/**
 * Tracks whether an element has scrolled into the viewport and returns a ref
 * to attach plus a boolean that flips to `true` the first time it becomes
 * visible (and stays `true` afterwards). Pairs with the `.animate-in-up-on-view`
 * / `.in-view` CSS utilities for a one-time fade-up reveal.
 *
 * Falls back to an immediately-visible state when IntersectionObserver isn't
 * available or the user prefers reduced motion.
 */
export function useInView<T extends HTMLElement>(
  options: IntersectionObserverInit = DEFAULT_OPTIONS,
) {
  const ref = React.useRef<T>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    ) {
      setInView(true);
      return;
    }

    if (typeof IntersectionObserver === 'undefined') {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
