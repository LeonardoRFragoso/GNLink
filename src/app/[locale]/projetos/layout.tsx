import { pageMetadata } from '@/lib/metadata';

export const metadata = pageMetadata.projects;

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
