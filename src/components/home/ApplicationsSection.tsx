'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Leaf, Zap, Globe, Atom } from 'lucide-react';

export default function ApplicationsSection() {
  const t = useTranslations('home.applicationsSection');

  const applications = [
    { icon: Globe, key: 'interiorization', color: 'bg-blue-500' },
    { icon: Leaf, key: 'transition', color: 'bg-green-500' },
    { icon: Zap, key: 'esg', color: 'bg-purple-500' },
    { icon: Atom, key: 'hydrogen', color: 'bg-teal-500' },
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
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle mx-auto">{t('description')}</p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-dark-50 dark:bg-dark-800 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                <div className={`absolute top-0 left-0 w-full h-1 ${app.color}`} />
                <div className={`w-16 h-16 ${app.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <app.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">{t(`items.${app.key}.title`)}</h3>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{t(`items.${app.key}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
