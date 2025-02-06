import type { HTMLProps, ReactElement } from 'react';
import styles from './index.module.scss';

interface Props extends HTMLProps<HTMLDivElement> {}

function Loading(props: Props): ReactElement {
  return (
    <div {...props} className={styles.loading}>
      <div />
    </div>
  );
}

export default Loading;
