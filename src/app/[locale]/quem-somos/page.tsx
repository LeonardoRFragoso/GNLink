'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Flame, Wind, Leaf, Atom, Droplets } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations('about');

  const gases = [
    { key: 'gnl', icon: Flame, color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' },
    { key: 'gnc', icon: Wind, color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' },
    { key: 'gnr', icon: Leaf, color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' },
    { key: 'co2', icon: Droplets, color: 'bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400' },
    { key: 'h2v', icon: Atom, color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400' },
  ];

  const values = [
    { key: 'ethics', icon: Heart },
    { key: 'teamwork', icon: Target },
    { key: 'excellence', icon: Eye },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-white/90">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-lg md:text-xl text-dark-600 dark:text-dark-300 leading-relaxed">
              {t('description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">{t('mission.title')}</h2>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{t('mission.description')}</p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg"
            >
              <div className="w-14 h-14 bg-secondary-100 dark:bg-secondary-900/30 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-secondary-600 dark:text-secondary-400" />
              </div>
              <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">{t('vision.title')}</h2>
              <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{t('vision.description')}</p>
            </motion.div>
          </div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 bg-white dark:bg-dark-700 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-8 text-center">{t('values.title')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={value.key} className="text-center">
                  <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-accent-600 dark:text-accent-400" />
                  </div>
                  <p className="text-dark-600 dark:text-dark-300">{t(`values.${value.key}`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gases Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title dark:text-white">{t('gases.title')}</h2>
            <p className="section-subtitle mx-auto dark:text-dark-300">{t('gases.description')}</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gases.map((gas, index) => (
              <motion.div
                key={gas.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-dark-50 dark:bg-dark-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className={`w-14 h-14 ${gas.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <gas.icon className="w-7 h-7" />
                </div>
                <p className="text-sm font-medium text-dark-700 dark:text-dark-200">{t(`gases.${gas.key}`)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Context Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-6">{t('context.title')}</h2>
            <p className="text-lg text-white/90 leading-relaxed">{t('context.description')}</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
