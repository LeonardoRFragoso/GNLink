'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Zap, X, ChevronRight } from 'lucide-react';

const projects = [
  {
    id: 'barra-bonita',
    name: 'Barra Bonita',
    location: 'São Paulo, SP',
    coordinates: { lat: -22.4944, lng: -48.5583 },
    capacity: '50.000 m³/dia',
    status: 'operating',
    description: 'Planta de liquefação de gás natural localizada no campo de Barra Bonita, em parceria com a Tradener.',
    color: 'from-blue-500 to-blue-600',
    mapPosition: { top: '55%', left: '70%' },
  },
  {
    id: 'itabuna',
    name: 'Itabuna',
    location: 'Bahia, BA',
    coordinates: { lat: -14.7876, lng: -39.2781 },
    capacity: '75.000 m³/dia',
    status: 'construction',
    description: 'Projeto em parceria com a Petrobahia para fornecimento de GNL em pequena escala na região da Bahia.',
    color: 'from-green-500 to-green-600',
    mapPosition: { top: '35%', left: '78%' },
  },
  {
    id: 'carnauba',
    name: 'Carnaúba',
    location: 'Piauí / Ceará',
    coordinates: { lat: -5.0892, lng: -39.4505 },
    capacity: '100.000 m³/dia',
    status: 'development',
    description: 'Projeto vencedor da chamada da CEGAS para fornecer gás ao interior do Ceará, em desenvolvimento.',
    color: 'from-orange-500 to-orange-600',
    mapPosition: { top: '22%', left: '75%' },
  },
];

export default function ProjectsPage() {
  const t = useTranslations('projectsPage');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operating':
        return 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400';
      case 'construction':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400';
      case 'development':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400';
      default:
        return 'bg-gray-100 dark:bg-gray-900/30 text-gray-700 dark:text-gray-400';
    }
  };

  const selected = projects.find((p) => p.id === selectedProject);

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

      {/* Interactive Map Section */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-12 dark:text-white"
          >
            {t('mapTitle')}
          </motion.h2>

          {/* Brazil Map Container */}
          <div className="relative max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative bg-dark-50 dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
            >
              {/* SVG Map of Brazil */}
              <div className="relative aspect-[4/5] max-h-[500px] mx-auto">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Simplified Brazil shape */}
                  <path
                    d="M280,50 Q350,80 360,150 Q380,220 350,300 Q330,380 280,420 Q220,470 150,450 Q80,420 60,350 Q40,280 50,200 Q60,120 100,80 Q150,40 200,35 Q240,30 280,50 Z"
                    className="fill-primary-100 dark:fill-primary-900/30 stroke-primary-300 dark:stroke-primary-700"
                    strokeWidth="2"
                  />
                </svg>

                {/* Project Markers */}
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(project.id)}
                    style={{
                      position: 'absolute',
                      top: project.mapPosition.top,
                      left: project.mapPosition.left,
                    }}
                    className={`group transform -translate-x-1/2 -translate-y-1/2 z-10 ${
                      selectedProject === project.id ? 'scale-125' : ''
                    }`}
                  >
                    <div className={`relative`}>
                      <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${project.color} shadow-lg flex items-center justify-center transition-transform group-hover:scale-110`}>
                        <Zap className="w-4 h-4 text-white" />
                      </div>
                      {selectedProject === project.id && (
                        <div className="absolute -inset-2 rounded-full border-2 border-primary-500 animate-ping" />
                      )}
                      <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-xs font-medium text-dark-700 dark:text-dark-300 whitespace-nowrap bg-white dark:bg-dark-700 px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                        {project.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-4 mt-6 pt-6 border-t border-dark-200 dark:border-dark-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-sm text-dark-600 dark:text-dark-300">{t('statuses.operating')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <span className="text-sm text-dark-600 dark:text-dark-300">{t('statuses.construction')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500" />
                  <span className="text-sm text-dark-600 dark:text-dark-300">{t('statuses.development')}</span>
                </div>
              </div>
            </motion.div>

            {/* Selected Project Card */}
            <AnimatePresence>
              {selected && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  className="mt-8 bg-white dark:bg-dark-800 rounded-2xl shadow-xl border border-dark-100 dark:border-dark-700 overflow-hidden"
                >
                  <div className={`h-2 bg-gradient-to-r ${selected.color}`} />
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-dark-800 dark:text-white">{selected.name}</h3>
                        <div className="flex items-center gap-2 mt-1 text-dark-500 dark:text-dark-400">
                          <MapPin className="w-4 h-4" />
                          <span>{selected.location}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 hover:bg-dark-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
                      >
                        <X className="w-5 h-5 text-dark-500" />
                      </button>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-dark-50 dark:bg-dark-700 rounded-lg p-4">
                        <p className="text-sm text-dark-500 dark:text-dark-400">{t('details.capacity')}</p>
                        <p className="font-semibold text-dark-800 dark:text-white">{selected.capacity}</p>
                      </div>
                      <div className="bg-dark-50 dark:bg-dark-700 rounded-lg p-4">
                        <p className="text-sm text-dark-500 dark:text-dark-400">{t('details.status')}</p>
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(selected.status)}`}>
                          {t(`statuses.${selected.status}`)}
                        </span>
                      </div>
                      <div className="bg-dark-50 dark:bg-dark-700 rounded-lg p-4">
                        <p className="text-sm text-dark-500 dark:text-dark-400">{t('details.location')}</p>
                        <p className="font-semibold text-dark-800 dark:text-white">{selected.location}</p>
                      </div>
                    </div>

                    <p className="text-dark-600 dark:text-dark-300">{selected.description}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="cursor-pointer group"
              >
                <div className="bg-white dark:bg-dark-700 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className={`h-40 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
                    <Zap className="w-16 h-16 text-white/30 absolute -right-4 -bottom-4 transform rotate-12" />
                    <div className="text-center text-white z-10">
                      <Zap className="w-10 h-10 mx-auto mb-2" />
                      <p className="font-bold text-xl">{project.name}</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-dark-500 dark:text-dark-400 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <p className="text-sm text-dark-400 dark:text-dark-500">{t('details.capacity')}</p>
                        <p className="font-semibold text-dark-800 dark:text-white">{project.capacity}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {t(`statuses.${project.status}`)}
                      </span>
                    </div>
                    <p className="text-dark-600 dark:text-dark-300 text-sm line-clamp-2">{project.description}</p>
                    <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:text-primary-700 dark:group-hover:text-primary-300">
                      Ver detalhes
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
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
