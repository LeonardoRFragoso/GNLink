import { setRequestLocale } from 'next-intl/server';
import { pageMetadata } from '@/lib/metadata';
import HeroSection from '@/components/home/HeroSection';
import WhatWeDoSection from '@/components/home/WhatWeDoSection';
import CTASection from '@/components/home/CTASection';

export const metadata = pageMetadata.home;

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
      <WhatWeDoSection />
      <CTASection />
    </>
  );
}
