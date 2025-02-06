import { Suspense, type ReactElement } from 'react';
import Loading from '@/components/shares/Loading';
import SectionLayout from '@/layouts/Section';
import { InnerProjectsSection } from './Inner';

export default function ProjectsSection(): ReactElement {
  return (
    <SectionLayout title="Active Projects">
      <Suspense fallback={<Loading />}>
        <InnerProjectsSection />
      </Suspense>
    </SectionLayout>
  );
}
