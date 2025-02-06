import type { ReactElement } from 'react';
import styles from './index.module.scss';

interface Props {
  src: string;
  alt: string;
  height: string;
  hovered?: boolean;
}

function Thumbnail(props: Props): ReactElement {
  const { src, alt, height, hovered = false } = props;

  return (
    <div className={styles.thumbnail} style={{ height }}>
      <img alt={alt} className={styles.image} data-hovered={hovered} src={src} />
    </div>
  );
}

export default Thumbnail;
