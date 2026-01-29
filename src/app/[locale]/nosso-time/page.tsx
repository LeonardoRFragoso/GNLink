'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { User, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  { key: 'marcelo', image: null },
  { key: 'laila', image: null },
  { key: 'silvino', image: null },
  { key: 'cleber', image: null },
];

export default function TeamPage() {
  const t = useTranslations('team');

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

      {/* Team Grid */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  {/* Photo */}
                  <div className="aspect-square bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center relative overflow-hidden">
                    <User className="w-24 h-24 text-white/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-1">
                      {t(`members.${member.key}.name`)}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-4">
                      {t(`members.${member.key}.role`)}
                    </p>
                    <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed">
                      {t(`members.${member.key}.bio`)}
                    </p>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3 mt-4 pt-4 border-t border-dark-100 dark:border-dark-700">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:bg-primary-600 hover:text-white transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-dark-100 dark:bg-dark-700 flex items-center justify-center text-dark-500 dark:text-dark-400 hover:bg-primary-600 hover:text-white transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
