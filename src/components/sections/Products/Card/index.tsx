import type { ReactElement } from 'react';
import Icon from '@/components/shares/Icon';
import CardLayout from '@/layouts/Card';
import dayjs from 'dayjs';
import styles from './index.module.scss';
import { Product } from '@/schemas/articlets';

interface Props {
  product: Product;
}

function ProductCard(props: Props): ReactElement {
  const { product } = props;

  return (
    <CardLayout className={styles.card} link={product.data.link}>
      <div className={styles.left}>
        <h3 className={styles.title}>{product.data.title}</h3>
        <h4 className={styles.tag}>{product.data.tags?.type}</h4>
        <div className={styles.tech_wrapper}>
          <div>
            {product.techIcons.map((tech) => (
              <Icon iconKey={tech} key={tech} />
            ))}
          </div>
        </div>
        <p className={styles.date}>{dayjs(product.data.updated_at).format('YYYY/MM/DD')}</p>
      </div>

      <div className={styles.right}>
        <img alt="Thumbnail" className={styles.thumbnail} src={product.thumbnail} />
      </div>
    </CardLayout>
  );
}

export default ProductCard;
