'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FileText, Shield, Download, ExternalLink } from 'lucide-react';

export default function EthicsPage() {
  const t = useTranslations('ethics');

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

      {/* Ethics Content */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Code of Conduct */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              id="codigo-de-conduta"
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 border border-dark-100 dark:border-dark-700"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
                {t('codeOfConduct.title')}
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-8 leading-relaxed">
                {t('codeOfConduct.description')}
              </p>
              <a
                href={t('codeOfConduct.downloadUrl')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Download className="w-5 h-5" />
                {t('codeOfConduct.download')}
              </a>
            </motion.div>

            {/* Ethics Channel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              id="canal-de-etica"
              className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8 border border-dark-100 dark:border-dark-700"
            >
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-accent-600 dark:text-accent-400" />
              </div>
              <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
                {t('ethicsChannel.title')}
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-8 leading-relaxed">
                {t('ethicsChannel.description')}
              </p>
              <a
                href={t('ethicsChannel.url')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-accent-600 text-white font-medium rounded-lg hover:bg-accent-700 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
                {t('ethicsChannel.cta')}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Banner */}
      <section className="py-16 bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
              Compromisso com a Integridade
            </h3>
            <p className="text-dark-600 dark:text-dark-300 leading-relaxed">
              Atuamos com ética, responsabilidade social e transparência. 
              Construímos juntos, trabalhamos com simplicidade e somos verdadeiros. 
              Agimos com propósito e entregamos resultados com excelência.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
