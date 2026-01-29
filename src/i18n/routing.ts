import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
  locales: ['pt', 'en'],
  defaultLocale: 'pt',
  pathnames: {
    '/': '/',
    '/quem-somos': {
      pt: '/quem-somos',
      en: '/about-us',
    },
    '/nosso-time': {
      pt: '/nosso-time',
      en: '/our-team',
    },
    '/projetos': {
      pt: '/projetos',
      en: '/projects',
    },
    '/nossa-etica': {
      pt: '/nossa-etica',
      en: '/our-ethics',
    },
    '/noticias': {
      pt: '/noticias',
      en: '/news',
    },
    '/trabalhe-conosco': {
      pt: '/trabalhe-conosco',
      en: '/careers',
    },
    '/contato': {
      pt: '/contato',
      en: '/contact',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
