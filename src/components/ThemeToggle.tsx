import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useStore } from '../store/useStore';

export const ThemeToggle: React.FC = () => {
  const { isDark } = useStore((state) => state.theme);
  const toggleTheme = useStore((state) => state.toggleTheme);

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-dark-800 border border-dark-700 hover:bg-dark-700 transition-colors"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-primary-pink" />
      ) : (
        <Moon className="w-5 h-5 text-primary-purple" />
      )}
    </button>
  );
};