import Laptop from '@/components/svgs/devices/Laptop';
import Monitor from '@/components/svgs/devices/Monitor';

// TODO: replace with your real devices
export const devices = [
  {
    name: 'Your laptop (e.g. brand, model, specs)',
    icon: <Laptop className="size-4" />,
  },
  {
    name: 'Your monitor',
    icon: <Monitor className="size-4" />,
  },
];

// TODO: replace with the browser extensions you actually use
export const webExtensions = [
  { name: 'uBlock Origin', href: 'https://ublockorigin.com/' },
];

// TODO: replace with the software/apps you actually use
export const software = [
  { name: 'VS Code', href: 'https://code.visualstudio.com/' },
];
