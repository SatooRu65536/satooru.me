import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import IconCard from '@/components/shares/IconCard';
import { SKILLS } from '@/const/skills';
import SectionLayout from '@/layouts/Section';
import styles from './index.module.scss';

function SkillsSection(): ReactElement {
  return (
    <SectionLayout title="Skills">
      <FadeInWithStagger className={styles.grid} speed={0.01}>
        {SKILLS.map((name) => (
          <FadeIn key={name}>
            <IconCard iconKey={name} size="lg" />
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
}

export default SkillsSection;
