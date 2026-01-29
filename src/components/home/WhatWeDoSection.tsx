'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Droplets, Truck, Ship, Factory, Flame } from 'lucide-react';

export default function WhatWeDoSection() {
  const t = useTranslations('home.whatWeDoSection');

  const services = [
    {
      icon: Factory,
      key: 'liquefaction',
    },
    {
      icon: Truck,
      key: 'transport',
    },
    {
      icon: Ship,
      key: 'cabotage',
    },
    {
      icon: Droplets,
      key: 'storage',
    },
    {
      icon: Flame,
      key: 'regasification',
    },
  ];

  const benefits = [
    {
      text: t('items.competitiveness'),
      color: 'from-blue-500 to-blue-600',
    },
    {
      text: t('items.expansion'),
      color: 'from-green-500 to-green-600',
    },
    {
      text: t('items.innovation'),
      color: 'from-orange-500 to-orange-600',
    },
  ];

  return (
    <section className="py-20 bg-dark-50 dark:bg-dark-800">
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

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mx-auto mb-4">
                <service.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="font-semibold text-dark-800 dark:text-white mb-2">{t(`services.${service.key}.title`)}</h3>
              <p className="text-sm text-dark-500 dark:text-dark-400">{t(`services.${service.key}.description`)}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="bg-white dark:bg-dark-700 rounded-xl p-6 shadow-lg border-l-4 border-primary-500"
            >
              <p className="text-dark-700 dark:text-dark-200 leading-relaxed">{benefit.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
