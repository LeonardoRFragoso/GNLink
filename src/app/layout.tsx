import { defaultMetadata } from '@/lib/metadata';

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
