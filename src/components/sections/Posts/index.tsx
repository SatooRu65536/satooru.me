import type { GetArticle } from '@/utils/articles';
import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/Fadein';
import SectionLayout from '@/layouts/Section';
import dayjs from 'dayjs';
import PostCard from './Card';
import styles from './index.module.scss';

interface Props {
  articles: GetArticle[] | undefined;
}

function RecentPostsSection(props: Props): ReactElement {
  const { articles } = props;

  return (
    <SectionLayout title="Recent Posts">
      <FadeInWithStagger className={styles.recent_posts}>
        {articles
        && articles.map((article) => (
          <FadeIn className={styles.fadein} key={article.data.number}>
            <PostCard
              content={article.content}
              date={dayjs(article.postedAt)}
              link={`/posts/${article.data.number}`}
              thumbnail={article.thumbnail}
              title={article.data.title}
            />
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </SectionLayout>
  );
}

export default RecentPostsSection;
