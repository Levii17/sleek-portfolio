import { navbarConfig } from '@/config/Navbar';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';
import { TrackedLink } from './TrackedLink';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 mx-auto flex h-14 max-w-2xl items-center justify-between px-4 backdrop-blur-sm">
      <nav className="flex items-center gap-6 text-sm font-medium">
        {navbarConfig.navItems.map((item) => (
          <TrackedLink
            className="text-secondary hover:text-primary transition-colors"
            key={item.label}
            href={item.href}
            track={{
              name: 'button_click',
              data: { buttonId: item.label, section: 'navbar' },
            }}
          >
            {item.label}
          </TrackedLink>
        ))}
      </nav>

      <div className="flex items-center gap-1">
        <button
          type="button"
          data-slot="button"
          data-variant="outline"
          data-size="sm"
          className="group/button aria-expanded:bg-muted aria-expanded:text-foreground aria-invalid:border-destructive aria-invalid:ring-destructive/20 focus-visible:border-ring focus-visible:ring-ring/50 sm:border-border sm:bg-background sm:hover:bg-background sm:hover:text-muted-foreground dark:sm:border-input dark:sm:bg-input/30 dark:sm:hover:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 text-muted-foreground inline-flex shrink-0 items-center justify-center transition-all outline-none focus-visible:ring-3 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 aria-invalid:ring-3 sm:h-8 sm:gap-1.5 sm:rounded-full sm:border sm:bg-clip-padding sm:px-2.5 sm:text-sm sm:font-medium sm:whitespace-nowrap sm:shadow-none sm:in-data-[slot=button-group]:rounded-lg sm:has-data-[icon=inline-end]:pr-1.5 sm:has-data-[icon=inline-start]:pl-1.5 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          aria-label="Open blog search (Ctrl+K)"
        >
          <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M10.278 11.514a5.824 5.824 0 1 1 1.235-1.235l3.209 3.208A.875.875 0 0 1 14.111 15a.875.875 0 0 1-.624-.278l-3.209-3.208Zm.623-4.69a4.077 4.077 0 1 1-8.154 0 4.077 4.077 0 0 1 8.154 0Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          <kbd
            data-slot="kbd-group"
            className="hidden items-center gap-1 sm:flex"
          >
            <kbd
              data-slot="kbd"
              className="text-muted-foreground in-data-[slot=tooltip-content]:text-background pointer-events-none inline-flex h-5 w-fit min-w-6 items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-sans text-sm/none font-normal shadow-[inset_0_-1px_2px] shadow-black/10 select-none in-data-[slot=tooltip-content]:bg-white/20 in-data-[slot=tooltip-content]:shadow-white/20 dark:bg-white/10 dark:shadow-white/10 dark:in-data-[slot=tooltip-content]:bg-black/10 dark:in-data-[slot=tooltip-content]:shadow-black/10 dark:in-data-[slot=tooltip-content]:text-shadow-xs [&_svg:not([class*='size-'])]:size-3"
            >
              Ctrl
            </kbd>
            <kbd
              data-slot="kbd"
              className="text-muted-foreground in-data-[slot=tooltip-content]:text-background pointer-events-none inline-flex h-5 w-5 min-w-5 items-center justify-center gap-1 rounded-sm bg-black/5 px-1 font-sans text-sm/none font-normal shadow-[inset_0_-1px_2px] shadow-black/10 select-none in-data-[slot=tooltip-content]:bg-white/20 in-data-[slot=tooltip-content]:shadow-white/20 dark:bg-white/10 dark:shadow-white/10 dark:in-data-[slot=tooltip-content]:bg-black/10 dark:in-data-[slot=tooltip-content]:shadow-black/10 dark:in-data-[slot=tooltip-content]:text-shadow-xs [&_svg:not([class*='size-'])]:size-3"
            >
              K
            </kbd>
          </kbd>
        </button>

        {/* Keeping your existing ThemeToggleButton to preserve functionality */}
        <ThemeToggleButton variant="circle" start="top-right" blur />
      </div>
    </Container>
  );
}
