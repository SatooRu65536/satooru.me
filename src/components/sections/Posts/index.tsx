import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import SectionLayout from '@/layouts/Section';
import PostCard from './Card';
import styles from './index.module.scss';
import { getContents } from '@/utils/articles';

function RecentPostsSection(): ReactElement {
  const posts = getContents({ limit: 3 });

  return (
    <SectionLayout title="Recent Posts">
      <FadeInWithStagger className={styles.recent_posts}>
        {posts.map((post) => (
          <FadeIn className={styles.fadein} key={post.data.number}>
            <PostCard post={post} />
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
}

export default RecentPostsSection;
