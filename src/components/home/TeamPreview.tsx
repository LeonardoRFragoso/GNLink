'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { User, ArrowRight } from 'lucide-react';

const teamMembers = [
  { key: 'marcelo', color: 'from-blue-500 to-blue-600' },
  { key: 'laila', color: 'from-purple-500 to-purple-600' },
  { key: 'silvino', color: 'from-green-500 to-green-600' },
  { key: 'cleber', color: 'from-orange-500 to-orange-600' },
];

export default function TeamPreview() {
  const t = useTranslations('team');

  return (
    <section className="py-20 bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">{t('title')}</h2>
          <p className="section-subtitle mx-auto">{t('subtitle')}</p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white dark:bg-dark-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className={`h-32 bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                  <User className="w-16 h-16 text-white/50" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-dark-800 dark:text-white text-sm md:text-base">
                    {t(`members.${member.key}.name`)}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-xs md:text-sm">
                    {t(`members.${member.key}.role`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/nosso-time"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors group"
          >
            Conheça toda a equipe
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
