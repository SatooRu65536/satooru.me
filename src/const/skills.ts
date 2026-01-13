import type { IconKey } from '@/components/shares/Icon';

interface Skills {
  [key: string]: IconKey[];
}

export const SKILLS: Skills = {
  'Core Expertise': [
    'html',
    'css',
    'scss',
    'javascript',
    'typescript',
    'react',
    'nextjs',
    'remix',
    'astro',
    'recoil',
    'vitest',
    'jest',
    'eslint',
    'prettier',
    'tauri',
    'storybook',
    'nestjs',
    'trpc',
    'mysql',
    'prisma',
    'python',
    'aws',
    'cloudflare-pages',
    'cloudflare-workers',
    'docker',
    'git',
    'github',
  ],
  // 扱える
  'Comfortable With': [
    'vue',
    'svelte',
    'biome',
    'electron',
    'threejs',
    'hono',
    'postgresql',
    'github-actions',
    'fastapi',
    'numpy',
    'pandas',
  ],
  // 経験あり
  'Familiar With': ['rails', 'raspberrypi', 'c', 'firebase'],
};
