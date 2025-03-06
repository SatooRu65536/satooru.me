import type { ReactElement } from 'react';
import SectionLayout from '@/layouts/Section';
import ProductCard from './Card';
import styles from './index.module.scss';
import { getContents } from '@/utils/articles';
import { zProductSchema } from '@/schemas/articles';

export default function ProductsSection(): ReactElement {
  const products = getContents({ category: 'product' }, zProductSchema);

  return (
    <SectionLayout title="Products" fadein={false}>
      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard product={product} key={product.data.number} />
        ))}
      </div>
    </SectionLayout>
  );
}
