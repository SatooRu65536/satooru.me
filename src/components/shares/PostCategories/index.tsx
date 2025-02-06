import type { ReactElement } from 'react';
import { Link } from 'next-view-transitions';
import styles from './index.module.scss';

interface Props {
  categories: Set<string>;
  currentCategory?: string;
}

function PostCategories(props: Props): ReactElement {
  const { categories, currentCategory } = props;

  return (
    <div className={styles.container}>
      {Array.from(categories).map((category) => (
        <Link
          className={styles.link}
          data-selected={category === currentCategory}
          href={`/posts/${category}`}
          key={category}
        >
          {category}
        </Link>
      ))}
    </div>
  );
}

export default PostCategories;
