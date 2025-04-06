import type { ReactElement } from 'react';
import { Link } from 'next-view-transitions';
import styles from './index.module.scss';

const LINKS = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Posts', href: '/posts' },
];

interface Props {
  fixed?: boolean;
}

export default function Header({ fixed }: Props): ReactElement {
  return (
    <header className={styles.header} data-fixed={fixed}>
      <Link href="/" className={styles.title_container}>
        <img alt="アイコン" className={styles.icon} src="/icon.webp" />
        <h3 className={styles.title}>佐藤さとる</h3>
      </Link>

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
