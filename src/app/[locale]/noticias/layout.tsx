import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.news;

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
