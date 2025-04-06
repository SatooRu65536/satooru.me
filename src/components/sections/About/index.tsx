import type { ReactElement } from 'react';
import { FadeIn } from '@/components/shares/Fadein';
import { ABOUT } from '@/const/about';
import SectionLayout from '@/layouts/Section';
import Title from './Title/index';
import styles from './index.module.scss';
import { Link } from 'next-view-transitions';

export default function AbountSection(): ReactElement {
  return (
    <SectionLayout fadein={false} title={<Title />} underline>
      <FadeIn direction="left">
        <p>{ABOUT}</p>

        <div className={styles.detail}>
          <Link href="/about">詳細</Link>
        </div>
      </FadeIn>
    </SectionLayout>
  );
}
