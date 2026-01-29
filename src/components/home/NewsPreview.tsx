'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';

const news = [
  {
    id: 1,
    title: 'GNLink inaugura nova usina em Barra Bonita',
    excerpt: 'A empresa celebra mais um marco importante no setor de energia renovável do Brasil.',
    date: '2024-01-15',
    image: null,
  },
  {
    id: 2,
    title: 'Parceria estratégica para expansão no Nordeste',
    excerpt: 'Novo acordo visa ampliar a capacidade de geração de energia na região.',
    date: '2024-01-10',
    image: null,
  },
  {
    id: 3,
    title: 'Prêmio de sustentabilidade para projeto Carnaúba',
    excerpt: 'Reconhecimento internacional destaca compromisso ambiental da GNLink.',
    date: '2024-01-05',
    image: null,
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
              <Link href={`/noticias/${item.id}` as any}>
                <div className="card dark:bg-dark-800 group cursor-pointer h-full flex flex-col">
                  {/* Image Placeholder */}
                  <div className="h-48 bg-gradient-to-br from-dark-200 to-dark-300 dark:from-dark-600 dark:to-dark-700 flex items-center justify-center">
                    <div className="text-dark-400 dark:text-dark-500 text-sm">Imagem</div>
                  </div>
                  
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 text-dark-400 dark:text-dark-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <time className="text-sm">{formatDate(item.date)}</time>
                    </div>
                    
                    <h3 className="font-semibold text-lg text-dark-800 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    
                    <p className="text-dark-500 dark:text-dark-400 text-sm mb-4 flex-grow line-clamp-3">
                      {item.excerpt}
                    </p>
                    
                    <span className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors">
                      {t('readMore')}
                      <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
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
