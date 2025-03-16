import type { ReactElement, ReactNode } from 'react';
import { FadeIn } from '@/components/shares/Fadein';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
  title?: string | ReactElement;
  leftSpace?: boolean;
  center?: boolean;
  underline?: boolean;
  fadein?: boolean;
  className?: string;
}

export default function SectionLayout(props: Props): ReactElement {
  const { children, center, title, leftSpace, underline, fadein, className } = props;

  return (
    <section className={styles.section}>
      <FadeWrapper fadein={fadein} underline={underline}>
        {typeof title === 'string' ? <h1>{title}</h1> : title}
      </FadeWrapper>

      <div className={`${styles.content} ${className}`} data-center={center} data-leftspace={leftSpace}>
        {children}
      </div>
    </section>
  );
}

interface FadeProps {
  fadein?: boolean;
  underline?: boolean;
  children: ReactNode;
}

function FadeWrapper({ fadein, underline, children }: FadeProps) {
  if (fadein === false) {
    return (
      <div className={styles.title} data-underline={underline}>
        {children}
      </div>
    );
  }
  return (
    <FadeIn className={styles.title} data-underline={underline} direction="left">
      {children}
    </FadeIn>
  );
}
