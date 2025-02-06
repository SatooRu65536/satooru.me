import type { ReactElement } from 'react';
import { FadeIn } from '@/components/shares/Fadein';
import ListItem from '@/components/shares/ListItem';
import { AWARD } from '@/const/awards';
import SectionLayout from '@/layouts/Section';
import styles from './index.module.scss';

export default function AwardsSection(): ReactElement {
  return (
    <SectionLayout center title="Awards">
      <ul className={styles.award}>
        {AWARD.map((award) => (
          <FadeIn direction="left" key={award.title}>
            <ListItem {...award} />
          </FadeIn>
        ))}
      </ul>
    </SectionLayout>
  );
}
