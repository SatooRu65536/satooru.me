import type { ReactElement } from 'react';
import { FadeIn } from '@/components/shares/Fadein';
import { ABOUT } from '@/const/about';
import SectionLayout from '@/layouts/Section';
import Title from './Title/index';
import styles from './index.module.scss';

export default function AbountSection(): ReactElement {
  return (
    <SectionLayout fadein={false} title={<Title />} underline>
      <FadeIn direction="left">
        <p>{ABOUT}</p>

        <div className={styles.detail}>
          <a href="/about">詳細</a>
        </div>
      </FadeIn>
    </SectionLayout>
  );
}
