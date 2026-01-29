'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Zap } from 'lucide-react';

const projects = [
  {
    id: 'barra-bonita',
    name: 'Barra Bonita',
    location: 'São Paulo, SP',
    capacity: '50 MW',
    status: 'Em operação',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'itabuna',
    name: 'Itabuna',
    location: 'Bahia, BA',
    capacity: '75 MW',
    status: 'Em construção',
    color: 'from-green-500 to-green-600',
  },
  {
    id: 'carnauba',
    name: 'Carnaúba',
    location: 'Piauí, PI',
    capacity: '100 MW',
    status: 'Em desenvolvimento',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function ProjectsPreview() {
  const t = useTranslations('home.projectsSection');

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
          <h2 className="section-title dark:text-white">{t('title')}</h2>
          <p className="section-subtitle mx-auto dark:text-dark-300">{t('description')}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/projetos#${project.id}` as any}>
                <div className="card dark:bg-dark-700 group cursor-pointer h-full">
                  <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                    <Zap className="w-16 h-16 text-white/30 absolute -right-4 -bottom-4 transform rotate-12" />
                    <div className="text-center text-white z-10">
                      <Zap className="w-12 h-12 mx-auto mb-2" />
                      <p className="font-bold text-xl">{project.name}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-dark-400 dark:text-dark-500">Capacidade</p>
                        <p className="font-semibold text-dark-800 dark:text-white">{project.capacity}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Em operação' 
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                          : project.status === 'Em construção'
                          ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
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
            href="/projetos"
            className="btn-primary group"
          >
            {t('viewAll')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
