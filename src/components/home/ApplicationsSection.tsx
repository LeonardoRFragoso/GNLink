'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Leaf, Zap, Globe, Atom } from 'lucide-react';

export default function ApplicationsSection() {
  const t = useTranslations('about.gases');

  const applications = [
    {
      icon: Globe,
      title: 'Interiorização do Gás',
      description: 'Levamos o gás natural para regiões não atendidas por gasodutos, promovendo o desenvolvimento regional.',
      color: 'bg-blue-500',
    },
    {
      icon: Leaf,
      title: 'Transição Energética',
      description: 'O gás natural é peça-chave na descarbonização, com menor impacto ambiental que combustíveis tradicionais.',
      color: 'bg-green-500',
    },
    {
      icon: Zap,
      title: 'ESG',
      description: 'Compromisso com práticas sustentáveis, responsabilidade social e governança corporativa.',
      color: 'bg-purple-500',
    },
    {
      icon: Atom,
      title: 'Hidrogênio Verde (H2V)',
      description: 'Investimos no futuro com projetos de hidrogênio verde para uma matriz energética limpa.',
      color: 'bg-teal-500',
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
          <h2 className="section-title">Aplicações do GNL</h2>
          <p className="section-subtitle mx-auto">
            A transição energética é uma das principais necessidades mundiais, e o gás natural tem papel fundamental nesse processo
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={app.title}
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
                <h3 className="text-xl font-bold text-dark-800 dark:text-white mb-3">{app.title}</h3>
                <p className="text-dark-600 dark:text-dark-300 leading-relaxed">{app.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
