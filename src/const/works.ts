import type { ListItemProps } from '@/components/shares/ListItem';

import dayjs from 'dayjs';

export const WORKS: ListItemProps[] = [
  {
    date: [dayjs('2023.02.01'), dayjs('2023.11.01')],
    type: 'バイト',
    title: 'コメダ珈琲',
    description: 'ホールスタッフ',
    dateFormat: 'YYYY.MM',
  },
  {
    date: [dayjs('2023.09.01'), dayjs('2024.02.01')],
    type: '業務委託',
    title: '個人',
    description: 'ウェブメディアを管理するwebシステム開発',
    dateFormat: 'YYYY.MM',
  },
  {
    date: [dayjs('2023.09.01'), dayjs('2024.02.01')],
    type: '業務委託',
    title: '個人',
    description: '印刷会社のwebシステム開発',
    dateFormat: 'YYYY.MM',
  },
  {
    date: [dayjs('2024.02.01')],
    type: '長期インターン',
    title: 'pluszero',
    description: 'webシステム開発',
    dateFormat: 'YYYY.MM',
  },
];
