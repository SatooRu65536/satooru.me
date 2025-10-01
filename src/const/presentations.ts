import type { ListItemProps } from '@/components/shares/ListItem';
import dayjs from 'dayjs';

export const PRESENTATIONS: ListItemProps[] = [
  {
    date: dayjs('2025-03-13'),
    title: '情報処理学会 第87回全国大会',
    description: 'モーションキャプチャで得られる3次元の骨格情報を用いた調理行動の分類に関する基礎検討',
    type: '発表',
    link: 'https://www.ipsj.or.jp/event/taikai/87/index.html',
    dateFormat: 'YYYY.MM.DD',
  },
  {
    date: dayjs('2025-06-25'),
    title: 'DICOMO 2025 シンポジウム',
    description: '位置情報と手順書を用いた調理行動の分類精度向上手法',
    type: '発表',
    link: 'https://dicomo.org/',
    dateFormat: 'YYYY.MM.DD',
  },
  {
    date: dayjs('2025-09-8'),
    title: 'xDR Challenge2025',
    type: 'コンペティション',
    link: 'https://unit.aist.go.jp/rihsa/xDR-Challenge-2025/index.html',
    dateFormat: 'YYYY.MM.DD',
  },
  {
    date: dayjs('2025-09-10'),
    title: 'ICMU 2025',
    description:
      'Method for Improving Cooking Activity Classification Accuracy Using Location Information and Procedure Documents',
    type: 'ポスター発表',
    link: 'https://www.icmu.org/icmu2025/',
    dateFormat: 'YYYY.MM.DD',
  },
];
