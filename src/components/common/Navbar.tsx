import { navbarConfig } from '@/config/Navbar';
import React from 'react';

import Container from './Container';
import { ThemeToggleButton } from './ThemeSwitch';
import { TrackedLink } from './TrackedLink';

export default function Navbar() {
  return (
    <Container className="sticky top-0 z-20 max-w-5xl px-0 py-2 backdrop-blur-sm">
      <div className="flex items-center justify-between px-4 sm:px-6">
        <nav className="flex items-center gap-6">
          {navbarConfig.navItems.map((item) => (
            <TrackedLink
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
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

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggleButton variant="circle" start="top-right" blur />
        </div>
      </div>
    </Container>
  );
}
