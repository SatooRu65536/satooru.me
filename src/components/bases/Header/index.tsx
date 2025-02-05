import type { ReactElement } from 'react';
import { Link } from 'next-view-transitions';
import styles from './index.module.scss';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'Posts', href: '/posts' },
  { title: 'Map', href: '/map' },
];

interface Props {
  fixed?: boolean;
}

function Header({ fixed }: Props): ReactElement {
  return (
    <header className={styles.header} data-fixed={fixed}>
      <img alt="アイコン" className={styles.icon} src="/icon.webp" />
      <h3 className={styles.title}>佐藤さとる</h3>

      <nav className={styles.nav}>
        {LINKS.map((l) => (
          <Link className={styles.ink} href={l.href} key={l.href}>
            {l.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
