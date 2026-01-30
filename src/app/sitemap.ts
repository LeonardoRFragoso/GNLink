import { MetadataRoute } from 'next';

const baseUrl = 'https://gnlink.com.br';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['pt', 'en'];
  
  const routes = [
    '',
    '/quem-somos',
    '/nosso-time',
    '/projetos',
    '/nossa-etica',
    '/noticias',
    '/trabalhe-conosco',
    '/contato',
  ];

  const sitemap: MetadataRoute.Sitemap = [];

  // Gerar URLs para cada locale
  for (const locale of locales) {
    for (const route of routes) {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
      });
    }
  }

  return sitemap;
}
