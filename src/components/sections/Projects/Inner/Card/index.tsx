import type { IconKey } from '@/components/shares/Icon';
import type { ReactElement } from 'react';
import Fontawesome from '@/components/shares/Fontawesome';
import Icon from '@/components/shares/Icon';
import CardLayout from '@/layouts/Card';
import styles from './index.module.scss';

interface Props {
  title: string;
  description: string;
  techs: IconKey[];
  repository: string;
  site?: string;
}

export default function ProjectCard(props: Props): ReactElement {
  const { title, description, techs, repository, site } = props;

  return (
    <CardLayout className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <h4 className={styles.description}>{description}</h4>
      <div className={styles.tech_wrapper}>
        <div>
          {techs.map((tech) => (
            <Icon iconKey={tech} key={tech} />
          ))}
        </div>
      </div>

      <div className={styles.buttons}>
        <a href={repository} target="_blank">
          <Icon iconKey="github" />
        </a>

        {site != null && (
          <a href={site} target="_blank">
            <Fontawesome iconKey="faWindowMaximize" />
          </a>
        )}
      </div>
    </CardLayout>
  );
}
