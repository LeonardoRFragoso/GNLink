'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const tFooter = useTranslations('footer');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: tFooter('address'),
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: tFooter('phone'),
      href: `tel:${tFooter('phone').replace(/\D/g, '')}`,
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: tFooter('email'),
      href: `mailto:${tFooter('email')}`,
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex: 9h às 18h',
    },
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

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
                {t('info.title')}
              </h2>
              <p className="text-dark-600 dark:text-dark-300 mb-8">
                {t('description')}
              </p>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark-800 dark:text-white mb-1">
                        {item.title}
                      </h3>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-dark-600 dark:text-dark-300">{item.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-8 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="aspect-video bg-dark-100 dark:bg-dark-800 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-dark-300 dark:text-dark-600 mx-auto mb-2" />
                    <p className="text-dark-500 dark:text-dark-400">Mapa de localização</p>
                    <p className="text-sm text-dark-400 dark:text-dark-500">Rio de Janeiro, RJ</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-dark-50 dark:bg-dark-800 rounded-2xl p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-accent-100 dark:bg-accent-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-accent-600 dark:text-accent-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-800 dark:text-white mb-4">
                      {t('form.success')}
                    </h3>
                    <p className="text-dark-500 dark:text-dark-400">
                      Retornaremos seu contato em breve.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-dark-800 dark:text-white mb-6">
                      Envie sua mensagem
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            {t('form.name')} *
                          </label>
                          <input
                            type="text"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            {t('form.email')} *
                          </label>
                          <input
                            type="email"
                            required
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            {t('form.phone')}
                          </label>
                          <input
                            type="tel"
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                            {t('form.company')}
                          </label>
                          <input
                            type="text"
                            className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          {t('form.subject')} *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-2">
                          {t('form.message')} *
                        </label>
                        <textarea
                          rows={5}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-dark-200 dark:border-dark-600 bg-white dark:bg-dark-700 text-dark-800 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isLoading ? (
                          <span className="animate-spin">⏳</span>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            {t('form.submit')}
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
