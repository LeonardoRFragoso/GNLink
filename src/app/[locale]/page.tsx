import { setRequestLocale } from 'next-intl/server';
import HeroSection from '@/components/home/HeroSection';
import AboutPreview from '@/components/home/AboutPreview';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import ApplicationsSection from '@/components/home/ApplicationsSection';
import TeamPreview from '@/components/home/TeamPreview';
import ProjectsPreview from '@/components/home/ProjectsPreview';
import NewsPreview from '@/components/home/NewsPreview';
import CTASection from '@/components/home/CTASection';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <WhatWeDoSection />
      <ApplicationsSection />
      <TeamPreview />
      <ProjectsPreview />
      <NewsPreview />
      <CTASection />
    </>
  );
}
