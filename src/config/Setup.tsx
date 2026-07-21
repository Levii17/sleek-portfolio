import { FileText, Settings } from 'lucide-react';

// TODO: swap these for the extensions you actually use
export const extensions = [
  'Prettier - Code formatter',
  'ESLint',
  'GitLens',
  'Tailwind CSS IntelliSense',
];

export const steps = [
  {
    id: 1,
    title: 'Recommended extensions',
    icon: <FileText className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open the Extensions view',
      },
      {
        type: 'shortcut',
        text: 'Cmd + ⇧ + X (Mac) / Ctrl + ⇧ + X (Windows)',
      },
      {
        type: 'instruction',
        text: `Search for and install: ${extensions.join(', ')}`,
      },
    ],
  },
  {
    id: 2,
    title: 'VS Code settings',
    icon: <Settings className="size-4" />,
    content: [
      {
        type: 'instruction',
        text: 'Open Command Palette by pressing the keyboard shortcut',
      },
      {
        type: 'shortcut',
        text: 'Cmd + ⇧ + P (Mac) / Ctrl + ⇧ + P (Windows)',
      },
      {
        type: 'instruction',
        text: 'Enter the text in prompt and press Enter ⏎',
      },
      {
        type: 'prompt',
        text: 'Preferences: Open Settings (JSON)',
      },
      {
        type: 'instruction',
        text: 'Paste the settings.json below',
      },
    ],
  },
];

// TODO: replace with your real settings.json
export const settingsJson = `{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontFamily": "Fira Code, Consolas, 'Courier New', monospace",
  "editor.fontLigatures": true,
  "editor.minimap.enabled": false,
  "editor.wordWrap": "on",
  "files.autoSave": "afterDelay",
  "git.autofetch": true,
  "workbench.colorTheme": "Default Dark+"
}`;
