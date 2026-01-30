import { Metadata } from 'next';

const siteConfig = {
  name: 'GNLink',
  description: 'Distribuidora de Gás Natural - Soluções em GNL, GNC, GNR e Hidrogênio Verde para a transição energética do Brasil.',
  url: 'https://gnlink.com.br',
  ogImage: '/og-image.jpg',
  locale: 'pt-BR',
  keywords: [
    'gás natural',
    'GNL',
    'GNC',
    'GNR',
    'hidrogênio verde',
    'energia limpa',
    'transição energética',
    'distribuidora de gás',
    'liquefação',
    'regaseificação',
    'Brasil',
  ],
};

export function generateSiteMetadata(
  title?: string,
  description?: string,
  path?: string
): Metadata {
  const pageTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
  const pageDescription = description || siteConfig.description;
  const pageUrl = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title: pageTitle,
    description: pageDescription,
    keywords: siteConfig.keywords,
    authors: [{ name: 'GNLink' }],
    creator: 'GNLink',
    publisher: 'GNLink',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
      languages: {
        'pt-BR': `${siteConfig.url}/pt${path || ''}`,
        'en': `${siteConfig.url}/en${path || ''}`,
      },
    },
    openGraph: {
      type: 'website',
      locale: siteConfig.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [siteConfig.ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      // google: 'seu-codigo-google',
    },
  };
}

export const defaultMetadata = generateSiteMetadata();

export const pageMetadata = {
  home: generateSiteMetadata(
    'Energia para o Futuro',
    'GNLink - Distribuidora de Gás Natural. Soluções em GNL, GNC, GNR e Hidrogênio Verde para impulsionar a transição energética do Brasil.',
    '/'
  ),
  about: generateSiteMetadata(
    'Quem Somos',
    'Conheça a GNLink: mais de 70 anos de experiência no setor de energia. Nossa missão, visão e valores.',
    '/quem-somos'
  ),
  team: generateSiteMetadata(
    'Nosso Time',
    'Conheça a equipe de especialistas da GNLink que impulsiona a inovação no setor de gás natural.',
    '/nosso-time'
  ),
  projects: generateSiteMetadata(
    'Projetos',
    'Conheça os projetos da GNLink em desenvolvimento: usinas de liquefação, transporte e distribuição de gás natural.',
    '/projetos'
  ),
  ethics: generateSiteMetadata(
    'Nossa Ética',
    'Código de conduta e canal de ética da GNLink. Transparência e integridade em todas as nossas operações.',
    '/nossa-etica'
  ),
  news: generateSiteMetadata(
    'Notícias',
    'Acompanhe as últimas notícias e novidades da GNLink na mídia.',
    '/noticias'
  ),
  careers: generateSiteMetadata(
    'Trabalhe Conosco',
    'Faça parte do time GNLink. Confira nossas oportunidades de carreira no setor de energia.',
    '/trabalhe-conosco'
  ),
  contact: generateSiteMetadata(
    'Contato',
    'Entre em contato com a GNLink. Estamos prontos para atender sua empresa.',
    '/contato'
  ),
};

export { siteConfig };
