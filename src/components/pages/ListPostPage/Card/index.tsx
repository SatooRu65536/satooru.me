import type { ReactElement } from 'react';
import CardLayout from '@/layouts/Card';
import dayjs from 'dayjs';
import styles from './index.module.scss';
import { Content } from '@/schemas/articlets';

interface Props {
  post: Content;
}

export default function ListPostCard(props: Props): ReactElement {
  const { post } = props;

  return (
    <CardLayout className={styles.card} link={post.data.link}>
      <h3 className={styles.title}>{post.data.title}</h3>

      <div className={styles.left}>
        <div className={styles.content}>
          <p>{post.content.slice(0, 150)}</p>
        </div>
        <p className={styles.date}>{dayjs(post.data.updated_at).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img alt="Thumbnail" className={styles.thumbnail} src={post.thumbnail} />
      </div>
    </CardLayout>
  );
}
