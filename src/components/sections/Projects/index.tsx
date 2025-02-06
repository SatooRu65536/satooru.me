'use client';

import { Suspense, type ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import Loading from '@/components/shares/Loading';
import SectionLayout from '@/layouts/Section';
import { projectsAtom } from '@/stores/projectsAtom';
import { useAtomValue } from 'jotai';
import ProjectCard from './Card';
import styles from './index.module.scss';

function InnerProjectsSection() {
  const projects = useAtomValue(projectsAtom);

  return (
    <FadeInWithStagger className={styles.fade_wrapper}>
      {projects.map((project) => (
        <FadeIn className={styles.fade} key={project.name}>
          <ProjectCard
            description={project.summary}
            repository={project.repository}
            site={project.site}
            techs={project.tags}
            title={project.name}
          />
        </FadeIn>
      ))}
    </FadeInWithStagger>
  );
}

export default function ProjectsSection(): ReactElement {
  return (
    <SectionLayout className={styles.projects} title="Active Projects">
      <Suspense fallback={<Loading />}>
        <InnerProjectsSection />
      </Suspense>
    </SectionLayout>
  );
}
