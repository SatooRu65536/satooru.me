import type { Dayjs } from 'dayjs';
import type { ReactElement } from 'react';
import CardLayout from '@/layouts/Card';

import dayjs from 'dayjs';

import styles from './index.module.scss';

interface Props {
  title: string;
  content: string;
  thumbnail?: string;
  date: Dayjs;
  link: string;
}

const defaultThumbnail = '/default/penguin.webp';

function PostCard(props: Props): ReactElement {
  const { title, content, thumbnail, date, link } = props;

  return (
    <CardLayout className={styles.card} link={link}>
      <h3 className={styles.title}>{title}</h3>

      <div className={styles.left}>
        <div className={styles.content}>
          <p>{content.slice(0, 150)}</p>
        </div>
        <p className={styles.date}>{dayjs(date).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img alt="" className={styles.thumbnail} src={thumbnail ?? defaultThumbnail} />
      </div>
    </CardLayout>
  );
}

export default PostCard;
