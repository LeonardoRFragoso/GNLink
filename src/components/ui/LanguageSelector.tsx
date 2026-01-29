'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const languages = [
  { code: 'pt', label: 'PT', fullLabel: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'EN', fullLabel: 'English', flag: '🇺🇸' },
];

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('language');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === locale) || languages[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const currentPath = pathname;
    const segments = currentPath.split('/').filter(Boolean);
    
    if (segments[0] === 'pt' || segments[0] === 'en') {
      segments[0] = langCode;
    } else {
      segments.unshift(langCode);
    }
    
    const newPath = '/' + segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-dark-100 transition-colors duration-200"
        aria-label={t('select')}
      >
        <Globe className="w-4 h-4 text-dark-500" />
        <span className="text-sm font-medium text-dark-700">{currentLanguage.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-dark-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border border-dark-100 py-1 z-50"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-sm hover:bg-dark-50 transition-colors duration-150 ${
                  locale === lang.code ? 'bg-primary-50 text-primary-600' : 'text-dark-700'
                }`}
              >
                <span>{lang.flag}</span>
                <span>{lang.fullLabel}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
