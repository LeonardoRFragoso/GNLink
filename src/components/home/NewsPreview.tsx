'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, ExternalLink } from 'lucide-react';
import { useState } from 'react';

function getArticleImageUrl(url: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&meta=true&embed=image.url`;
}

function getScreenshotUrl(url: string): string {
  return `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`;
}

const FALLBACK_IMAGE = 'data:image/svg+xml,' + encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300">
    <rect fill="#1e3a5f" width="400" height="300"/>
    <text x="200" y="140" text-anchor="middle" fill="#4fd1c5" font-family="Arial" font-size="24" font-weight="bold">GNLink</text>
    <text x="200" y="170" text-anchor="middle" fill="#a0aec0" font-family="Arial" font-size="14">Na Mídia</text>
  </svg>
`);

function ArticleImage({ url, title }: { url: string; title: string }) {
  const [fallbackLevel, setFallbackLevel] = useState(0);
  
  const imageSources = [
    getArticleImageUrl(url),
    getScreenshotUrl(url),
    FALLBACK_IMAGE
  ];

  const handleError = () => {
    if (fallbackLevel < imageSources.length - 1) {
      setFallbackLevel(prev => prev + 1);
    }
  };

  return (
    <img
      key={fallbackLevel}
      src={imageSources[fallbackLevel]}
      alt={title}
      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
      loading="lazy"
      onError={handleError}
    />
  );
}

const news = [
  {
    id: 1,
    title: 'GNLink recebe aval da ANP para iniciar operação de sua 1ª planta de liquefação',
    source: 'Eixos',
    date: '2024-11-15',
    url: 'https://eixos.com.br/gas-natural/mercado-de-gas/gnlink-recebe-aval-da-anp-para-iniciar-operacao-de-sua-1a-planta-de-liquefacao',
  },
  {
    id: 2,
    title: 'GNLink assina contrato de liquefação e compressão de gás no RN',
    source: 'Canal Energia',
    date: '2024-10-20',
    url: 'https://www.canalenergia.com.br/noticias/53275479/gnlink-assina-contrato-de-liquefacao-e-compressao-de-gas-no-rn',
  },
  {
    id: 3,
    title: 'A estratégia da GNLink para expandir o GNL em pequena escala',
    source: 'EPBR',
    date: '2024-09-18',
    url: 'https://epbr.com.br/a-estrategia-da-gnlink-para-expandir-o-gnl-em-pequena-escala/',
  },
];

function formatDate(dateString: string, locale: string = 'pt-BR') {
  return new Date(dateString).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function NewsPreview() {
  const t = useTranslations('home.newsSection');

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title dark:text-white">{t('title')}</h2>
          <p className="section-subtitle mx-auto dark:text-dark-300">{t('description')}</p>
        </motion.div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <a 
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="card dark:bg-dark-800 group cursor-pointer h-full flex flex-col overflow-hidden">
                  {/* Article Screenshot */}
                  <div className="h-48 bg-gray-100 dark:bg-dark-700 overflow-hidden">
                    <ArticleImage url={item.url} title={item.title} />
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center justify-between text-dark-400 dark:text-dark-500 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <time className="text-sm">{formatDate(item.date)}</time>
                      </div>
                      <span className="text-xs font-medium text-primary-600 dark:text-primary-400">{item.source}</span>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-dark-800 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <span className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors mt-auto">
                      {t('readMore')}
                      <ExternalLink className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/noticias"
            className="btn-secondary group"
          >
            {t('viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
