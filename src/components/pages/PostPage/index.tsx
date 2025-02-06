import Thumbnail from '@/components/shares/Thumbnail';
import ToHtml from '@/components/shares/ToHtml';
import dayjs from 'dayjs';
import styles from './index.module.scss';
import { Content } from '@/schemas/articlets';

interface Props {
  contents: Content[];
  number: number;
}

function PostPage(props: Props) {
  const { contents, number } = props;

  const content = contents.find((content) => content.data.number === number);

  if (content === undefined) {
    return <div>記事が見つかりませんでした</div>;
  }

  return (
    <div className={styles.post_container}>
      <h1 className={styles.title}>{content.data.title}</h1>
      <p className={styles.postedat}>{dayjs(content.data.updated_at).format('YYYY年MM月DD日')}</p>

      <Thumbnail alt="thumbnail" height="300px" src={content.thumbnail} />

      <ToHtml className={styles.content} content={content.content} />
    </div>
  );
}

export default PostPage;
