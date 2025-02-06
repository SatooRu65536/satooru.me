import type { ExperienceProp } from '@/components/sections/Experiences';

import dayjs from 'dayjs';

export const EXPERIENCES: ExperienceProp[] = [
  {
    description: '名電高校 入学',
    organization: 'Meiden H.S.',
    start: dayjs('2020.04.06'),
    end: dayjs('2023.03.01'),
    location: '愛知県名古屋市',
    overview: '情報科学科',
    url: 'https://www.meiden.ed.jp/',
    fill: true,
  },
  {
    description: '情報デザイン部 入部',
    organization: 'AMIDC',
    start: dayjs('2020.06.10'),
    end: dayjs('2021.09.01'),
    location: '名電高校224教室',
    url: 'https://meidenid.com/',
  },
  {
    description: 'メカニカルアーツ部 参加',
    organization: 'メカ部',
    start: dayjs('2020.10.01'),
    end: dayjs('2023.03.01'),
    location: '名電高校淳和記念館',
    overview: '入部ではなく参加(実質掛け持ち)',
    url: 'https://www.meiden.ed.jp/club/detail.html?id=380',
  },
  {
    description: '情報システム部 入部',
    organization: 'MISC',
    start: dayjs('2021.11.01'),
    end: dayjs('2023.03.01'),
    location: '名電高校415教室',
    overview: 'システムコンピューター部(現情報システム部) に転部',
    url: 'https://misc-mdn.dev/',
  },
  {
    description: '愛知工業大学 入学',
    organization: 'AIT',
    start: dayjs('2023.04.06'),
    location: '愛知県豊田市',
    overview: '情報科学部 情報科学科 コンピューターシステム専攻',
    url: 'https://set1.ie.aitech.ac.jp/',
    fill: true,
  },
  {
    description: 'システム工学研究会 入会',
    organization: 'SET',
    start: dayjs('2023.04.06'),
    location: '愛工大4号館別館 310',
    url: 'https://set1.ie.aitech.ac.jp/',
  },
  {
    description: '梶研究室 参加',
    organization: '梶研',
    start: dayjs('2023.04.07'),
    location: '愛工大4号館別館 108',
    url: 'https://kajilab.net/',
    fill: false,
  },
];
