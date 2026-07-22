import { Download, FileText, Settings } from 'lucide-react';

export const steps = [
  {
    id: 1,
    title: 'Download necessary files',
    icon: <Download className="size-4" />,
    content: [
      {
        type: 'download',
        name: 'Fira-code.zip',
        description: "Unzip the font's file",
        href: '/setup/fira-code.zip',
      },
      {
        type: 'instruction',
        text: 'Select all the fonts, right click, and click to Install',
      },
      {
        type: 'download',
        name: 'vsc-extensions.txt',
        description: 'Place this file in downloads',
        href: '/setup/vsc-extensions.txt',
      },
      {
        type: 'instruction',
        text: 'Open the vscode in downloads directory',
      },
      {
        type: 'instruction',
        text: 'Install VSC Export & Import extension in vs code.',
      },
    ],
  },
  {
    id: 2,
    title: 'Installing all the extensions',
    icon: <FileText className="size-4" />,
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
        text: 'VSC Export & Import',
      },
      {
        type: 'instruction',
        text: 'All extensions will start to install',
      },
    ],
  },
  {
    id: 3,
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
        text: 'Copy the settings.json from the below window',
      },
    ],
  },
];

// TODO: replace with your real settings.json if this isn't it
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
