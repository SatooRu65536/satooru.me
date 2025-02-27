import type { IconKey } from '@/components/shares/Icon';
import type { ReactElement } from 'react';
import Icon, { ICON_MAP } from '@/components/shares/Icon';
import styles from './index.module.scss';

interface Props {
  iconKey: IconKey;
  size: 'sm' | 'lg';
}

export default function IconCard(props: Props): ReactElement {
  const { iconKey, size } = props;

  return (
    <div className={styles.icon} data-size={size}>
      <Icon iconKey={iconKey} size={size === 'lg' ? 48 : 32} />
      <p>{ICON_MAP[iconKey].name}</p>
    </div>
  );
}
