import type { ReactElement } from 'react';
import SectionLayout from '@/layouts/Section';
import PostCard from './Card';
import styles from './index.module.scss';
import { getContents } from '@/utils/articles';

export default function RecentPostsSection(): ReactElement {
  const posts = getContents({ limit: 3 });

  return (
    <SectionLayout title="Recent Posts" fadein={false}>
      <div className={styles.recent_posts}>
        {posts.map((post) => (
          <PostCard post={post} key={post.data.number} />
        ))}
      </div>
    </SectionLayout>
  );
}
