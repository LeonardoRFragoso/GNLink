'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Calendar, ExternalLink, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    title: 'GNLink vence chamada da CEGAS para fornecer gás ao interior do Ceará',
    source: 'Eixos',
    date: '2024-12-15',
    url: 'https://eixos.com.br/gas-natural/mercado-de-gas/gnlink-vence-chamada-da-cegas-para-fornecer-gas-ao-interior-do-ceara/',
    category: 'Negócios',
  },
  {
    id: 2,
    title: 'Trevo Drywall firma acordo com GNLink para uso de gás natural',
    source: 'Brasil Energia',
    date: '2024-11-28',
    url: 'https://brasilenergia.com.br/energia/gas/trevo-drywall-firma-acordo-com-gnlink-para-uso-de-gas-natural',
    category: 'Parcerias',
  },
  {
    id: 3,
    title: 'GNLink recebe aval da ANP para iniciar operação de sua 1ª planta de liquefação',
    source: 'Eixos',
    date: '2024-11-15',
    url: 'https://eixos.com.br/gas-natural/mercado-de-gas/gnlink-recebe-aval-da-anp-para-iniciar-operacao-de-sua-1a-planta-de-liquefacao',
    category: 'Operações',
  },
  {
    id: 4,
    title: 'GNLink assina contrato de liquefação e compressão de gás no RN',
    source: 'Canal Energia',
    date: '2024-10-20',
    url: 'https://www.canalenergia.com.br/noticias/53275479/gnlink-assina-contrato-de-liquefacao-e-compressao-de-gas-no-rn',
    category: 'Contratos',
  },
  {
    id: 5,
    title: 'ANP autoriza construção de nova unidade de liquefação da GNLink',
    source: 'Kincaid',
    date: '2024-10-05',
    url: 'https://www.kincaid.com.br/anp-autoriza-construcao-de-nova-unidade-de-liquefacao-da-gnlink/',
    category: 'Regulatório',
  },
  {
    id: 6,
    title: 'A estratégia da GNLink para expandir o GNL em pequena escala',
    source: 'EPBR',
    date: '2024-09-18',
    url: 'https://epbr.com.br/a-estrategia-da-gnlink-para-expandir-o-gnl-em-pequena-escala/',
    category: 'Estratégia',
  },
  {
    id: 7,
    title: 'GNLink assina contrato com a Contatto para transporte de GNL e GNC',
    source: 'Log Web',
    date: '2024-08-25',
    url: 'https://www.logweb.com.br/gnlink-assina-contrato-com-a-contatto-para-transporte-de-gnl-e-gnc/',
    category: 'Logística',
  },
  {
    id: 8,
    title: 'GNLink assina acordo com a Tradener para construir e operar planta de liquefação no campo de Barra Bonita',
    source: 'Brasil Energia',
    date: '2024-08-10',
    url: 'https://brasilenergia.com.br/petroleoegas/gas/gnlink-assina-acordo-com-a-tradener-para-construir-e-operar-planta-de-liquefacao-no-campo-de-barra-bonita',
    category: 'Projetos',
  },
  {
    id: 9,
    title: 'GNLink e Petrobahia formam parceria para investir em GNL em pequena escala na Bahia',
    source: 'EPBR',
    date: '2024-07-22',
    url: 'https://epbr.com.br/gnlink-e-petrobahia-formam-parceria-para-investir-em-gnl-em-pequena-escala-na-bahia/',
    category: 'Parcerias',
  },
  {
    id: 10,
    title: 'GNLink com 14 projetos de liquefação de gás em desenvolvimento',
    source: 'Brasil Energia',
    date: '2024-07-05',
    url: 'https://brasilenergia.com.br/energia/gnlink-com-14-projetos-de-liquefacao-de-gas-em-desenvolvimento/',
    category: 'Expansão',
  },
  {
    id: 11,
    title: 'GNLink fecha acordo com empresa portuguesa para projetos de hidrogênio verde no Brasil',
    source: 'EPBR',
    date: '2024-06-18',
    url: 'https://epbr.com.br/gnlink-fecha-acordo-com-empresa-portuguesa-para-projetos-de-hidrogenio-verde-no-brasil/',
    category: 'Hidrogênio Verde',
  },
  {
    id: 12,
    title: 'GNLink e a PRF Gas Solutions firmam acordo para a produção de H2V',
    source: 'Canal Energia',
    date: '2024-06-01',
    url: 'https://www.canalenergia.com.br/noticias/53250385/gnlink-e-a-prf-gas-solutions-firmam-acordo-para-a-producao-de-h2v',
    category: 'Hidrogênio Verde',
  },
];

function formatDate(dateString: string, locale: string = 'pt-BR') {
  return new Date(dateString).toLocaleDateString(locale, {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
}

export default function NewsPage() {
  const t = useTranslations('news');

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

      {/* News Grid */}
      <section className="py-20 bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col border border-dark-100 dark:border-dark-700">
                    {/* Category Badge */}
                    <div className="p-6 pb-0">
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-400 text-xs font-medium rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col">
                      <h2 className="text-lg font-semibold text-dark-800 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-3">
                        {item.title}
                      </h2>

                      <div className="mt-auto">
                        <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-400 mb-4">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <time>{formatDate(item.date)}</time>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-dark-100 dark:border-dark-700">
                          <span className="text-sm text-dark-500 dark:text-dark-400">
                            {t('source')}: <span className="font-medium text-dark-700 dark:text-dark-300">{item.source}</span>
                          </span>
                          <span className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:text-primary-700 dark:group-hover:text-primary-300">
                            {t('readMore')}
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
