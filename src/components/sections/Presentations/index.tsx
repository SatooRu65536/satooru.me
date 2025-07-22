import type { ReactElement } from 'react';
import { FadeIn } from '@/components/shares/Fadein';
import ListItem from '@/components/shares/ListItem';
import { PRESENTATIONS } from '@/const/presentations';
import SectionLayout from '@/layouts/Section';
import styles from './index.module.scss';

export default function PresentationsSection(): ReactElement {
  return (
    <SectionLayout center title="Presentations">
      <ul className={styles.presentations}>
        {PRESENTATIONS.map((presentation) => (
          <FadeIn direction="left" key={presentation.title}>
            <ListItem {...presentation} />
          </FadeIn>
        ))}
      </ul>
    </SectionLayout>
  );
}
