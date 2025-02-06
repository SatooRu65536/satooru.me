import { Suspense } from 'react';
import { Content } from '@/schemas/articlets';
import Inner from './Inner';
import Loading from '@/components/shares/Loading';

interface Props {
  posts: Content[];
  category?: string;
  categories: Set<string>;
}

export default function ListPostPage(props: Props) {
  return (
    <Suspense fallback={<Loading />}>
      <Inner {...props} />
    </Suspense>
  );
}
