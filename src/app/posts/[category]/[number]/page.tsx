import type { ReactElement } from 'react';
import { getContent, getContents } from '@/utils/articles';
import PostPage from '@/components/pages/PostPage';

interface StaticSlug {
  category: string;
  number: string;
}

export function generateStaticParams(): StaticSlug[] {
  const contents = getContents({});
  const groups = Object.groupBy(contents, (content) => content.data.category);
  return Object.entries(groups).flatMap(
    ([category, contents]) =>
      contents?.map((content) => ({
        category: encodeURI(category),
        number: content.data.number.toString(),
      })) ?? [],
  );
}

interface Props {
  params: Promise<StaticSlug>;
}

export default async function Page({ params }: Props): Promise<ReactElement> {
  const { number } = await params;
  const content = getContent(Number(number));
  return <PostPage post={content} />;
}
