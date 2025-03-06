'use client';

import { FadeIn, FadeInWithStagger } from '@/components/shares/FadeIn';
import { projectsAtom } from '@/stores/projectsAtom';
import { filterIconKeys } from '@/utils/icon';
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
            techs={filterIconKeys(project.tags)}
            title={project.name}
          />
        </FadeIn>
      ))}
    </FadeInWithStagger>
  );
}
