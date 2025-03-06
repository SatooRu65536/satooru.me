import type { ReactElement } from 'react';
import { FadeIn, FadeInWithStagger } from '@/components/shares/FadeIn';
import Icon from '@/components/shares/Icon';
import { LINKS } from '@/const/links';
import styles from './index.module.scss';

export default function LinksSection(): ReactElement {
  return (
    <section className={styles.links}>
      <FadeInWithStagger>
        {LINKS.map((link) => (
          <FadeIn direction="left" key={link.link}>
            <p>
              <a href={link.link} target="_blank">
                <Icon className={styles.icon} color="black" iconKey={link.iconKey} />
                <span>{link.name}</span>
              </a>
            </p>
          </FadeIn>
        ))}
      </FadeInWithStagger>
    </section>
  );
}
