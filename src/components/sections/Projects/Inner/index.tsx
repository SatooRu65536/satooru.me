'use client';

import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import { projectsAtom } from '@/stores/projectsAtom';
import { filterIconKeys } from '@/utils/icon';
import { useAtomValue } from 'jotai';
import ProjectCard from './Card';
import styles from './index.module.scss';

export function InnerProjectsSection() {
  const projects = useAtomValue(projectsAtom);

  return (
    <FadeInWithStagger className={styles.fade_wrapper}>
      <p>GitHub API から取得しています</p>

      <div className={styles.projects}>
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
      </div>

      {projects.length === 0 && (
        <FadeIn className={styles.none}>
          <p>なし</p>
        </FadeIn>
      )}
    </FadeInWithStagger>
  );
}
