import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  sassOptions: {
    additionalData: '@use "@/styles/modules" as *;',
  },
};

export default nextConfig;
