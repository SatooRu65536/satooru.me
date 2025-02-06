'use client';

import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import { projectsAtom } from '@/stores/projectsAtom';
import { useAtomValue } from 'jotai';
import ProjectCard from './Card';
import styles from './index.module.scss';

export function InnerProjectsSection() {
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
