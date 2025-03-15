import type { Dayjs } from 'dayjs';
import type { ReactElement } from 'react';
import Fontawesome from '@/components/shares/Fontawesome';
import dayjs from 'dayjs';
import styles from './index.module.scss';

export interface ListItemProps {
  date: Dayjs | [Dayjs] | [Dayjs, Dayjs];
  type: string;
  title: string;
  link?: string;
  description?: string;
  dateFormat?: string;
}

type Props = ListItemProps;

export default function ListItem(props: Props): ReactElement {
  const { date, type, title, link, description, dateFormat } = props;
  const dateFormatSnap = dateFormat ?? 'YYYY.MM.DD';

  return (
    <li className={styles.lit_item}>
      <p className={styles.date}>
        {Array.isArray(date)
          ? `${dayjs(date[0]).format(dateFormatSnap)} ~ ${date[1] === undefined ? '現在' : dayjs(date[1]).format(dateFormatSnap)}`
          : dayjs(date).format(dateFormatSnap)}
      </p>

      <p className={styles.main}>
        <span>[{type}]</span>
        <span className={styles.title}>{title}</span>
        {link !== undefined && (
          <a className={styles.link} href={link}>
            <Fontawesome className={styles.link_icon} iconKey="faUpRightFromSquare" />
          </a>
        )}
      </p>

      {description !== undefined && <p className={styles.description}>{description}</p>}
    </li>
  );
}
