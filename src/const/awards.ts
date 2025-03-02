import type { ListItemProps } from '@/components/shares/ListItem';
import dayjs from 'dayjs';

export const AWARD: ListItemProps[] = [
  {
    date: dayjs('2020-10'),
    title: 'パソコン甲子園2020 いちまいの絵CG部門',
    type: '佳作',
    description: '食の裏に隠れた世界を表現したイラスト',
    link: 'https://web-ext.u-aizu.ac.jp/pc-concours/2020/final/f_cgaward.html',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2021-01'),
    title: 'SEIKA AWARD 2021',
    type: '入選',
    description: 'なんの特徴もない平凡な日常を表現した動画',
    link: 'https://youtu.be/ZVi7Ayouou0',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2021-09'),
    title: '高校生エンジニア体験',
    type: '一般公開',
    description: 'aiboの可愛い仕草をみながらすごろくをするアプリ',
    link: '/posts/product/59',
    dateFormat: 'YYYY.MM',
  },
  {
    date: dayjs('2023-06-18'),
    title: '技育CAMP キャラバンハッカソン vol.2',
    type: '最優秀賞',
    description: '紙を破いてPCを操作するアプリ',
    link: '/posts/product/63',
  },
  {
    date: dayjs('2023-08-06'),
    title: '技育CAMP マンスリーハッカソン vol.7',
    type: '企業賞',
    description: '知っている単語から知らない単語を知れるアプリ',
    link: '/posts/product/65',
  },
  {
    date: dayjs('2023-08-12'),
    title: '技育展 中部ブロック予選',
    type: '決勝進出',
    description: '技育展 中部ブロック予選',
    link: '/posts/product/64',
  },
  {
    date: dayjs('2023-08-12'),
    title: 'Open hack U 2023 NAGOYA',
    type: '最優秀賞',
    description: 'テキストで簡単にアウトプット, 動画で気軽にインプットできるサービス',
    link: '/posts/product/62',
  },
  {
    date: dayjs('2023-09-02'),
    title: '技育CAMP アドバンス vol.3',
    type: '企業賞',
    description: '紙を破いてPCを操作するアプリ',
    link: '/posts/63',
  },
  {
    date: dayjs('2023-10-02'),
    title: '工科展',
    type: '優秀賞',
    description: 'Wi-Fiを使った混雑を知れるアプリ',
    link: '/posts/product/68',
  },
  {
    date: dayjs('2024-09-24'),
    title: 'Open hack U 2024 KANAZAWA',
    type: 'Happy Hacking賞',
    description: '初心者が音楽制作の第一歩を踏み出せるアプリ',
    link: '/posts/product/139',
  },
];
