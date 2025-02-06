import type { ReactElement } from 'react';
import styles from './index.module.scss';

function Title(): ReactElement {
  return (
    <div className={styles.title}>
      <img alt="アイコン" className={styles.icon} src="/icon.webp" />
      <h3 className={styles.title}>佐藤さとる</h3>
    </div>
  );
}

export default Title;
