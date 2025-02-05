import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import ListItem from '@/components/shares/ListItem';
import { WORKS } from '@/Const/works';
import SectionLayout from '@/layouts/Section';
import { hash } from 'ohash';
import styles from './index.module.scss';

function WorksSection(): ReactElement {
  return (
    <SectionLayout center title="Works">
      <FadeInWithStagger>
        <ul className={styles.works}>
          {WORKS.map((work) => (
            <FadeIn direction="left" key={hash(work)}>
              <ListItem {...work} />
            </FadeIn>
          ))}
        </ul>
      </FadeInWithStagger>
    </SectionLayout>
  );
}

export default WorksSection;
