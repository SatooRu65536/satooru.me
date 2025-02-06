import type { ReactElement } from 'react';
import ListPostPage from '@/components/pages/ListPostPage';
import { getCategories, getContents } from '@/utils/articles';

export default function Page(): ReactElement {
  const contents = getContents({});
  const categories = getCategories();
  return <ListPostPage posts={contents} categories={categories} />;
}
