import type { ReactElement } from 'react';
import { EXPERIENCES } from '@/const/experience';
import SectionLayout from '@/layouts/Section';
import { hash } from 'ohash';
import styles from './index.module.scss';
import ExperienceItem from './Item';

function ExperiencesSection(): ReactElement {
  const sortedExperiences = EXPERIENCES.sort((a, b) => a.start.diff(b.start));

  return (
    <SectionLayout className={styles.experiences} leftSpace title="Experiences">
      {sortedExperiences.map((experience) => (
        <ExperienceItem experience={experience} key={hash(experience)} />
      ))}
    </SectionLayout>
  );
}

export default ExperiencesSection;
