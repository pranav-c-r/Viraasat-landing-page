'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 bg-surface hover:bg-primary text-text-primary hover:text-background p-3 rounded-full shadow-lg transition-all duration-300 border border-borders"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-xl">
        {darkMode ? '☀️' : '🌙'}
      </span>
    </button>
  );
}