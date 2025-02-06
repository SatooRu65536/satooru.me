import type { ReactElement } from 'react';
import { PER_PAGE } from '@/const/setting';
import { Link } from 'next-view-transitions';
import styles from './index.module.scss';

interface Props {
  totalArticles: number;
  currentPage: number;
  pageTo: (page: number) => string;
}

const DISPLAY_PAGE_RANGE = 2;

function PageNation(props: Props): ReactElement {
  const { totalArticles, currentPage, pageTo } = props;

  const pages = Array.from({ length: Math.ceil(totalArticles / PER_PAGE) }, (_, i) => i + 1);
  const rangeMin = Math.max(0, currentPage - DISPLAY_PAGE_RANGE - 1);
  const rangeMax = Math.min(pages.length, currentPage + DISPLAY_PAGE_RANGE);
  const displayPages = pages.slice(rangeMin, rangeMax);

  const isFirstPageDisplayed = displayPages.at(0) === pages.at(0);
  const isLastPageDisplayed = displayPages.at(-1) === pages.at(1) || displayPages.length === 1;

  return (
    <div className={styles.pagenation}>
      {!isFirstPageDisplayed && (
        <>
          <Link
            className={styles.page_link}
            data-current={currentPage === pages.at(0)}
            href={pageTo(pages.at(0) ?? 1)}
            key={pages.at(0)}
          >
            {pages.at(0)}
          </Link>

          <div className={styles.leader}>•••</div>
        </>
      )}

      {displayPages.map((page) => (
        <Link className={styles.page_link} data-current={page === currentPage} href={pageTo(page)} key={page}>
          {page}
        </Link>
      ))}

      {!isLastPageDisplayed && (
        <>
          <div className={styles.leader}>•••</div>

          <Link
            className={styles.page_link}
            data-current={currentPage === pages.at(-1)}
            href={pageTo(pages.at(-1) ?? 1)}
            key={pages.at(-1)}
          >
            {pages.at(-1)}
          </Link>
        </>
      )}
    </div>
  );
}

export default PageNation;
