import type { ReactElement, ReactNode } from 'react';
import Footer from '@/components/bases/Footer';
import Header from '@/components/bases/Header';
import styles from './index.module.scss';

interface Props {
  children: ReactNode;
}

function PageLayout(props: Props): ReactElement {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
}

export default PageLayout;
