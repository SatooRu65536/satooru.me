import type { NextConfig } from 'next';
import createMDX from '@next/mdx';

const nextConfig: NextConfig = {
  output: 'export',
  pageExtensions: ['tsx', 'mdx'],
  sassOptions: {
    additionalData: '@use "@/styles/modules" as *;',
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
