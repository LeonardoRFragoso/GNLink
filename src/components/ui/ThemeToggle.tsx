'use client';

import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check current theme from DOM
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const newIsDark = !isDark;
    
    if (newIsDark) {
      root.classList.add('dark');
      localStorage.setItem('gnlink-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('gnlink-theme', 'light');
    }
    
    setIsDark(newIsDark);
  };

  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-700" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-dark-100 dark:bg-dark-700 hover:bg-dark-200 dark:hover:bg-dark-600 transition-all duration-200"
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      type="button"
    >
      {isDark ? (
        <Moon className="w-5 h-5 text-blue-400" />
      ) : (
        <Sun className="w-5 h-5 text-yellow-500" />
      )}
    </button>
  );
}
