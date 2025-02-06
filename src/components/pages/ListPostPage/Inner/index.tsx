'use client';

import PageNation from '@/components/shares/Pagenation';
import PostCategories from '@/components/shares/PostCategories';
import { PER_PAGE } from '@/const/setting';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import ListPostCard from './Card';
import styles from './index.module.scss';
import { Content } from '@/schemas/articlets';

interface Props {
  posts: Content[];
  category?: string;
  categories: Set<string>;
}

export default function ListPostPage(props: Props) {
  const { posts, category, categories } = props;

  const decodedCategory = category !== undefined ? decodeURI(category) : category;
  const groupedArticles = Object.groupBy(posts, (post) => post.data.category);

  const searchParams = useSearchParams();
  const page = Number.parseInt(searchParams.get('p') ?? '1');

  const allPosts = decodedCategory !== undefined ? (groupedArticles[decodedCategory] ?? []) : posts;
  const displayedPosts = allPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const pageTo = useCallback(
    (n: number) => {
      const path = decodedCategory !== undefined ? `/posts/${decodedCategory}` : '/posts';
      return `${path}?p=${n}`;
    },
    [decodedCategory],
  );

  const hasArticles = displayedPosts.length > 0;

  return (
    <div className={styles.container}>
      <section className={styles.categories_wrapper}>
        <PostCategories categories={categories} current={decodedCategory} />
      </section>

      <section className={styles.articles_wrapper}>
        <div className={styles.articles}>
          {!hasArticles ? (
            <p>記事はありません</p>
          ) : (
            displayedPosts.map((post) => <ListPostCard post={post} key={post.data.number} />)
          )}
        </div>
      </section>

      <section className={styles.pagenation}>
        <PageNation page={page} pageTo={pageTo} totalArticles={allPosts.length} />
      </section>
    </div>
  );
}
