'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const quickLinks = [
    { label: tNav('about'), href: '/quem-somos' },
    { label: tNav('projects'), href: '/projetos' },
    { label: tNav('team'), href: '/nosso-time' },
    { label: tNav('news'), href: '/noticias' },
    { label: tNav('careers'), href: '/trabalhe-conosco' },
    { label: tNav('contact'), href: '/contato' },
  ];

  const ethicsLinks = [
    { label: tNav('codeOfConduct'), href: '/nossa-etica#codigo-de-conduta' },
    { label: tNav('ethicsChannel'), href: '/nossa-etica#canal-de-etica' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-dark-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="text-2xl font-bold font-heading">
                GN<span className="text-primary-400">Link</span>
              </div>
            </Link>
            <p className="text-dark-300 mb-6 leading-relaxed">{t('description')}</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-dark-800 flex items-center justify-center text-dark-300 hover:bg-primary-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href as any}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ethics */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{tNav('ethics')}</h3>
            <ul className="space-y-3">
              {ethicsLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href as any}
                    className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contactInfo')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <span className="text-dark-300">{t('address')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`mailto:${t('email')}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('email')}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a
                  href={`tel:${t('phone').replace(/\D/g, '')}`}
                  className="text-dark-300 hover:text-primary-400 transition-colors duration-200"
                >
                  {t('phone')}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-400 text-sm">
              © {new Date().getFullYear()} GNLink. {t('rights')}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/nossa-etica"
                className="text-dark-400 text-sm hover:text-primary-400 transition-colors duration-200"
              >
                {tNav('ethics')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
