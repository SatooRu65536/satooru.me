import type { ReactElement } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

export default function NotFoundPage(): ReactElement {
  return (
    <Link className={styles.notfound} href="/">
      <div className={styles.img_wrapper}>
        <img alt="404" className={styles.penguin} src="/404.svg" />
      </div>
      <div className={styles.line_container} />
    </Link>
  );
}
