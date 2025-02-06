import type { ReactElement } from 'react';
import { getCategories, getContents } from '@/utils/articles';
import ListPostPage from '@/components/pages/ListPostPage';

interface StaticSlug {
  category: string;
}

export function generateStaticParams(): StaticSlug[] {
  const contents = getContents({});
  const categories = new Set(contents.map((content) => content.data.category));
  return Array.from(categories).map((category) => ({ category: encodeURI(category) }));
}

interface Props {
  params: Promise<StaticSlug>;
}

export default async function Page({ params }: Props): Promise<ReactElement> {
  const { category } = await params;
  const contents = getContents({ category });
  const categories = getCategories();
  return <ListPostPage posts={contents} category={category} categories={categories} />;
}
