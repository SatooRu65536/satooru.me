import Thumbnail from '@/components/shares/Thumbnail';
import ToHtml from '@/components/shares/ToHtml';
import dayjs from 'dayjs';
import styles from './index.module.scss';
import { Content } from '@/schemas/articlets';

interface Props {
  post: Content | undefined;
}

export default function PostPage(props: Props) {
  const { post } = props;

  if (post === undefined) {
    return <div>記事が見つかりませんでした</div>;
  }

  return (
    <div className={styles.post_container}>
      <h1 className={styles.title}>{post.data.title}</h1>
      <p className={styles.postedat}>{dayjs(post.data.updated_at).format('YYYY年MM月DD日')}</p>

      <Thumbnail alt="thumbnail" height="300px" src={post.thumbnail} />

      <ToHtml className={styles.content} content={post.content} />
    </div>
  );
}
