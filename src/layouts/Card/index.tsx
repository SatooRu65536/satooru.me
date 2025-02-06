import type { DetailedHTMLProps, HTMLAttributes, ReactElement } from 'react';
import { Link } from 'next-view-transitions';
import styles from './index.module.scss';

interface Props extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  link?: string;
}

export default function CardLayout(props: Props): ReactElement {
  const { children, className, link, ...rest } = props;

  return (
    <article className={`${styles.card} ${className}`} {...rest} data-haslink={link !== undefined}>
      {link !== undefined && <Link className={styles.link} href={link} />}
      {children}
    </article>
  );
}
