import type { ReactElement } from 'react';
import styles from './index.module.scss';

export default function Footer(): ReactElement {
  return (
    <footer className={styles.footer}>
      <p>SatooRu © 2024 Copyright.</p>
    </footer>
  );
}
