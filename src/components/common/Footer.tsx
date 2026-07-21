import { footerConfig } from '@/config/Footer';
import Link from 'next/link';
import React from 'react';

import Container from './Container';

export default function Footer() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Blog', href: '/blog' },
    { name: 'Resume', href: '/resume' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gears', href: '/gears' },
    { name: 'Setup', href: '/setup' },
    { name: 'Terminal', href: '/terminal' },
    { name: 'Books', href: '/books' },
    { name: 'Movies', href: '/movies' },
    { name: 'RSS FEED', href: '/blog/feed.xml' },
  ];

  return (
    <footer className="border-border bg-muted/30 border-t">
      <Container className="mx-auto max-w-2xl px-4 py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          {/* Navigation Section */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
              Navigate
            </p>
            <nav className="flex flex-wrap gap-x-6 gap-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-primary text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect Section */}
          <div className="flex flex-col gap-4">
            <p className="text-muted-foreground text-xs font-medium tracking-wider uppercase">
              Connect
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="X"
                href="https://x.com/ramxcodes"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path d="M208,216H160L48,40H96Z" opacity="0.2" />
                  <path d="M214.75,211.71l-62.6-98.38,61.77-67.95a8,8,0,0,0-11.84-10.76L143.24,99.34,102.75,35.71A8,8,0,0,0,96,32H48a8,8,0,0,0-6.75,12.3l62.6,98.37-61.77,68a8,8,0,1,0,11.84,10.76l58.84-64.72,40.49,63.63A8,8,0,0,0,160,224h48a8,8,0,0,0,6.75-12.29ZM164.39,208,62.57,48h29L193.43,208Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/ramxcodes/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path
                    d="M224,40V216a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8H216A8,8,0,0,1,224,40Z"
                    opacity="0.2"
                  />
                  <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="Github"
                href="https://github.com/ramxcodes"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path
                    d="M208,104v8a48,48,0,0,1-48,48H136a32,32,0,0,1,32,32v40H104V192a32,32,0,0,1,32-32H112a48,48,0,0,1-48-48v-8a49.28,49.28,0,0,1,8.51-27.3A51.92,51.92,0,0,1,76,32a52,52,0,0,1,43.83,24h32.34A52,52,0,0,1,196,32a51.92,51.92,0,0,1,3.49,44.7A49.28,49.28,0,0,1,208,104Z"
                    opacity="0.2"
                  />
                  <path d="M208.3,75.68A59.74,59.74,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58,58,0,0,0,208.3,75.68ZM200,112a40,40,0,0,1-40,40H112a40,40,0,0,1-40-40v-8a41.74,41.74,0,0,1,6.9-22.48A8,8,0,0,0,80,73.83a43.81,43.81,0,0,1,.79-33.58,43.88,43.88,0,0,1,32.32,20.06A8,8,0,0,0,119.82,64h32.35a8,8,0,0,0,6.74-3.69,43.87,43.87,0,0,1,32.32-20.06A43.81,43.81,0,0,1,192,73.83a8.09,8.09,0,0,0,1,7.65A41.76,41.76,0,0,1,200,104Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="YouTube"
                href="https://youtube.com/@ramxcodes"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path
                    d="M226.59,71.53a16,16,0,0,0-9.63-11C183.48,47.65,128,48,128,48s-55.48-.35-89,12.58a16,16,0,0,0-9.63,11C27.07,80.54,24,98.09,24,128s3.07,47.46,5.41,56.47A16,16,0,0,0,39,195.42C72.52,208.35,128,208,128,208s55.48.35,89-12.58a16,16,0,0,0,9.63-10.95c2.34-9,5.41-26.56,5.41-56.47S228.93,80.54,226.59,71.53ZM112,160V96l48,32Z"
                    opacity="0.2"
                  />
                  <path d="M164.44,121.34l-48-32A8,8,0,0,0,104,96v64a8,8,0,0,0,12.44,6.66l48-32a8,8,0,0,0,0-13.32ZM120,145.05V111l25.58,17ZM234.33,69.52a24,24,0,0,0-14.49-16.4C185.56,39.88,131,40,128,40s-57.56-.12-91.84,13.12a24,24,0,0,0-14.49,16.4C19.08,79.5,16,97.74,16,128s3.08,48.5,5.67,58.48a24,24,0,0,0,14.49,16.41C69,215.56,120.4,216,127.34,216h1.32c6.94,0,58.37-.44,91.18-13.11a24,24,0,0,0,14.49-16.41c2.59-10,5.67-28.22,5.67-58.48S236.92,79.5,234.33,69.52Zm-15.49,113a8,8,0,0,1-4.77,5.49c-31.65,12.22-85.48,12-86.12,12s-54.37.18-86-12a8,8,0,0,1-4.77-5.49C34.8,173.39,32,156.57,32,128s2.8-45.39,5.16-54.47A8,8,0,0,1,41.93,68C73.58,55.82,127.4,56,128.05,56s54.37-.18,86,12a8,8,0,0,1,4.77,5.49C221.2,82.61,224,99.43,224,128S221.2,173.39,218.84,182.47Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="Instagram"
                href="https://www.instagram.com/ramxcodes/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path
                    d="M176,32H80A48,48,0,0,0,32,80v96a48,48,0,0,0,48,48h96a48,48,0,0,0,48-48V80A48,48,0,0,0,176,32ZM128,168a40,40,0,1,1,40-40A40,40,0,0,1,128,168Z"
                    opacity="0.2"
                  />
                  <path d="M176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm64-84a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="Pinterest"
                href="https://www.pinterest.com/ramxcodes/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path
                    d="M216,112c0,44.18-32,72-64,72s-41.63-21.07-41.63-21.07h0L128,88l13.14-55.83h0A80,80,0,0,1,216,112Z"
                    opacity="0.2"
                  />
                  <path d="M224,112c0,22.57-7.9,43.2-22.23,58.11C188.39,184,170.25,192,152,192c-17.88,0-29.82-5.86-37.43-12l-10.78,45.82A8,8,0,0,1,96,232a8.24,8.24,0,0,1-1.84-.21,8,8,0,0,1-6-9.62l32-136a8,8,0,0,1,15.58,3.66l-16.9,71.8C122,166,131.3,176,152,176c27.53,0,56-23.94,56-64A72,72,0,1,0,73.63,148a8,8,0,0,1-13.85,8A88,88,0,1,1,224,112Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="Medium"
                href="https://ramxcodes.medium.com/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path
                    d="M128,128A56,56,0,1,1,72,72,56,56,0,0,1,128,128Zm56-56c-13.25,0-24,25.07-24,56s10.75,56,24,56,24-25.07,24-56S197.25,72,184,72Z"
                    opacity="0.2"
                  />
                  <path d="M72,64a64,64,0,1,0,64,64A64.07,64.07,0,0,0,72,64Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,72,176ZM184,64c-5.68,0-16.4,2.76-24.32,21.25C154.73,96.8,152,112,152,128s2.73,31.2,7.68,42.75C167.6,189.24,178.32,192,184,192s16.4-2.76,24.32-21.25C213.27,159.2,216,144,216,128s-2.73-31.2-7.68-42.75C200.4,66.76,189.68,64,184,64Zm0,112c-5.64,0-16-18.22-16-48s10.36-48,16-48,16,18.22,16,48S189.64,176,184,176ZM248,72V184a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="border-border bg-background text-muted-foreground hover:bg-muted hover:text-primary flex size-9 items-center justify-center rounded-lg border shadow-none transition-colors"
                aria-label="Email"
                href="mailto:hi@ramx.in"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                  className="size-5"
                >
                  <path d="M224,56l-96,88L32,56Z" opacity="0.2" />
                  <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom / Copyright */}
        <div className="border-border mt-10 flex flex-col items-center justify-between gap-2 border-t pt-8 sm:flex-row sm:items-center sm:gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {footerConfig.developer}.{' '}
            {footerConfig.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
