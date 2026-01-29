'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Target, Eye, Heart, Flame } from 'lucide-react';

export default function AboutPreview() {
  const t = useTranslations('home.aboutSection');
  const tAbout = useTranslations('about');

  const values = [
    { 
      icon: Target, 
      title: tAbout('mission.title'), 
      description: tAbout('mission.description'),
      color: 'bg-blue-500' 
    },
    { 
      icon: Eye, 
      title: tAbout('vision.title'), 
      description: tAbout('vision.description'),
      color: 'bg-green-500' 
    },
    { 
      icon: Heart, 
      title: tAbout('values.title'), 
      description: tAbout('values.ethics'),
      color: 'bg-purple-500' 
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <Flame className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span className="text-sm text-primary-700 dark:text-primary-300 font-medium">Desde 1953</span>
          </div>
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-dark-50 dark:bg-dark-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${value.color}`} />
              <div className={`w-14 h-14 ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">{value.title}</h3>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link
            href="/quem-somos"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
          >
            {t('cta')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
