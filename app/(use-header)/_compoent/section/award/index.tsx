import styles from './index.module.scss';
import { MaterialSymbolsOpenInNewRounded } from '@/component/share/icon/icon';
import { Award } from '@/types';

export default function Awards() {
  const awards: Award[] = [
    {
      award: '優秀賞',
      name: '工科展',
      description: 'Wi-Fiを使った混雑を知れるアプリ',
      date: '2023.10.7',
      link: '/blog/product/68',
    },
    {
      award: '企業賞',
      name: '技育CAMP アドバンス vol.3',
      description: '紙を破いてPCを操作するアプリ',
      date: '2023.09.02',
      link: '/blog/product/63',
    },
    {
      award: '最優秀賞',
      name: 'Open hack U 2023 NAGOYA',
      description:
        'テキストで簡単にアウトプット, 動画で気軽にインプットできるサービス',
      date: '2023.08.26',
      link: '/blog/product/62',
    },
    {
      award: '決勝進出',
      name: '技育展 中部ブロック予選',
      description: '知っている単語から知らない単語を知れるアプリ',
      date: '2023.08.12',
      link: '/blog/product/64',
    },
    {
      award: '企業賞',
      name: '技育CAMP マンスリーハッカソン vol.7',
      description: '知っている単語から知らない単語を知れるアプリ',
      date: '2023.08.06',
      link: '/blog/product/65',
    },
    {
      award: '最優秀賞',
      name: '技育CAMP キャラバンハッカソン vol.2',
      description: '紙を破いてPCを操作するアプリ',
      date: '2023.06.18',
      link: '/blog/product/63',
    },
    {
      award: '一般公開',
      name: '高校生エンジニア体験',
      description: 'aiboの可愛い仕草をみながらすごろくをするアプリ',
      date: '2022.9',
      link: '/blog/product/59',
    },
    {
      award: '入選',
      name: 'SEIKA AWARD 2021',
      description: 'なんの特徴もない平凡な日常を表現した動画',
      date: '2021.02',
      link: 'https://youtu.be/ZVi7Ayouou0',
    },
    {
      award: '佳作',
      name: 'パソコン甲子園2020 いちまいの絵CG部門',
      description: '食の裏に隠れた世界を表現したイラスト',
      date: '2020.10',
      link: 'https://web-ext.u-aizu.ac.jp/pc-concours/2020/final/f_cgaward.html',
    },
  ];

  // awards を日付順に並び替える
  awards.sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    return aDate.getTime() - bDate.getTime();
  });

  return (
    <section className={styles.awards} id="awards">
      <h1 className={styles.title}>Awards</h1>

      <div className={styles.container}>
        {awards.map((award, index) => {
          return (
            <div className={styles.box} key={index}>
              <p className={styles.date}>{award.date}</p>
              <p className={styles.about}>
                <span className={styles.award}>[{award.award}]</span>
                <span>{award.name}</span>
                {award.link && (
                  <a href={award.link} target="_blank" aria-label={award.name}>
                    <MaterialSymbolsOpenInNewRounded className={styles.link} />
                  </a>
                )}
              </p>
              <p className={styles.description}>{award.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
