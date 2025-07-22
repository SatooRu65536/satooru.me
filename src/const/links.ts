import type { IconKey } from '@/components/shares/Icon';

interface Link {
  link: string;
  iconKey: IconKey;
  name: string;
}

export const LINKS: Link[] = [
  {
    link: 'https://x.com/SatooRu65536',
    iconKey: 'x',
    name: '@SatooRu65536',
  },
  {
    link: 'https://github.com/SatooRu65536',
    iconKey: 'github',
    name: '@SatooRu65536',
  },
  {
    link: 'https://www.instagram.com/satooru65536',
    iconKey: 'instagram',
    name: '@SatooRu65536',
  },
];
