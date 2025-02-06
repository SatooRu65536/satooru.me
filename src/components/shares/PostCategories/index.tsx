import type { ReactElement } from 'react';
import { Link } from 'next-view-transitions';
import styles from './index.module.scss';
import { capitalize } from 'remeda';

interface Props {
  categories: Set<string>;
  current?: string;
}

export default function PostCategories(props: Props): ReactElement {
  const { categories, current } = props;

  return (
    <div className={styles.container}>
      <Link className={styles.link} data-selected={current === undefined} href="/posts/">
        {capitalize('All')}
      </Link>

      {Array.from(categories).map((category) => (
        <Link className={styles.link} data-selected={category === current} href={`/posts/${category}`} key={category}>
          {capitalize(category)}
        </Link>
      ))}
    </div>
  );
}
