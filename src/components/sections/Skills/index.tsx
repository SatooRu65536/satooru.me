import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import IconCard from '@/components/shares/IconCard';
import { SKILLS } from '@/const/skills';
import SectionLayout from '@/layouts/Section';
import styles from './index.module.scss';

export default function SkillsSection(): ReactElement {
  return (
    <SectionLayout title="Skills">
      <FadeInWithStagger speed={0.01}>
        {Object.entries(SKILLS).map(([category, skills]) => (
          <div key={category} className={styles.grid}>
            <FadeIn key={category} className={styles.heading}>
              <h1>{category}</h1>
            </FadeIn>

            {skills.map((iconKey) => (
              <FadeIn key={iconKey}>
                <IconCard iconKey={iconKey} size="lg" />
              </FadeIn>
            ))}
          </div>
        ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
}
