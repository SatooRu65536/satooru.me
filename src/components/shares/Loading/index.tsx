import type { HTMLProps, ReactElement } from 'react';
import styles from './index.module.scss';

type Props = HTMLProps<HTMLDivElement>;

export default function Loading(props: Props): ReactElement {
  return (
    <div {...props} className={styles.loading}>
      <div />
    </div>
  );
}
