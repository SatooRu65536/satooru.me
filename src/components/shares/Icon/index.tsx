import type { ReactElement } from 'react';
import {
  SiAstro,
  SiBiome,
  SiC,
  SiCloudflare,
  SiCloudflarepages,
  SiCloudflareworkers,
  SiCss3,
  SiDocker,
  SiDrizzle,
  SiElectron,
  SiEslint,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiHono,
  SiHtml5,
  SiInstagram,
  SiJavascript,
  SiJest,
  SiJupyter,
  SiMantine,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiPython,
  SiRaspberrypi,
  SiReact,
  SiRecoil,
  SiRemix,
  SiRubyonrails,
  SiSass,
  SiStorybook,
  SiStyledcomponents,
  SiSupabase,
  SiSvelte,
  SiTauri,
  SiThreedotjs,
  SiTrpc,
  SiTypescript,
  SiUnjs,
  SiVite,
  SiVitest,
  SiVuedotjs,
  SiX,
} from '@icons-pack/react-simple-icons';

export const IconMap = {
  'astro': { name: 'Astro', icon: SiAstro },
  'biome': { name: 'Biome', icon: SiBiome },
  'c': { name: 'C言語', icon: SiC },
  'cloudflare': { name: 'Cloudflare', icon: SiCloudflare },
  'cloudflare-pages': { name: 'Cloudflare Pages', icon: SiCloudflarepages },
  'cloudflare-workers': { name: 'Cloudflare Workers', icon: SiCloudflareworkers },
  'css': { name: 'CSS', icon: SiCss3 },
  'docker': { name: 'Docker', icon: SiDocker },
  'drizzle-orm': { name: 'Drizzle ORM', icon: SiDrizzle },
  'electron': { name: 'Electron', icon: SiElectron },
  'eslint': { name: 'ESLint', icon: SiEslint },
  'fastapi': { name: 'FastAPI', icon: SiFastapi },
  'firebase': { name: 'Firebase', icon: SiFirebase },
  'git': { name: 'Git', icon: SiGit },
  'github': { name: 'GitHub', icon: SiGithub },
  'github-actions': { name: 'GitHub Actions', icon: SiGithubactions },
  'hono': { name: 'Hono', icon: SiHono },
  'html': { name: 'HTML', icon: SiHtml5 },
  'instagram': { name: 'Instagram', icon: SiInstagram },
  'javascript': { name: 'JavaScript', icon: SiJavascript },
  'jupyter': { name: 'Jupyter', icon: SiJupyter },
  'jest': { name: 'Jest', icon: SiJest },
  'mantine': { name: 'Mantine', icon: SiMantine },
  'mysql': { name: 'MySQL', icon: SiMysql },
  'numpy': { name: 'NumPy', icon: SiNumpy },
  'postgresql': { name: 'PostgreSQL', icon: SiPostgresql },
  'nestjs': { name: 'Nestjs', icon: SiNestjs },
  'nextjs': { name: 'Next.js', icon: SiNextdotjs },
  'node': { name: 'Node.js', icon: SiNodedotjs },
  'pandas': { name: 'Pandas', icon: SiPandas },
  'prisma': { name: 'Prisma', icon: SiPrisma },
  'python': { name: 'Python', icon: SiPython },
  'python3': { name: 'Python', icon: SiPython },
  'prettier': { name: 'Prettier', icon: SiPrettier },
  'raspberrypi': { name: 'Raspberry Pi', icon: SiRaspberrypi },
  'react': { name: 'React', icon: SiReact },
  'remix': { name: 'Remix', icon: SiRemix },
  'rails': { name: 'Ruby on Rails', icon: SiRubyonrails },
  'recoil': { name: 'Recoil', icon: SiRecoil },
  'scss': { name: 'SCSS', icon: SiSass },
  'styled-components': { name: 'styled-components', icon: SiStyledcomponents },
  'storybook': { name: 'Storybook', icon: SiStorybook },
  'svelte': { name: 'Svelte', icon: SiSvelte },
  'supabase': { name: 'Supabase', icon: SiSupabase },
  'tauri': { name: 'Tauri', icon: SiTauri },
  'threejs': { name: 'Three.js', icon: SiThreedotjs },
  'typescript': { name: 'TypeScript', icon: SiTypescript },
  'trpc': { name: 'trpc', icon: SiTrpc },
  'unjs': { name: 'Un.js', icon: SiUnjs },
  'vite': { name: 'Vite', icon: SiVite },
  'vitest': { name: 'Vitest', icon: SiVitest },
  'vue': { name: 'Vue.js', icon: SiVuedotjs },
  'x': { name: 'X', icon: SiX },
} as const;

export type IconKey = keyof typeof IconMap;

/**
 * IconKey に含まれるキーかどうかを判定
 */
function isIconKeys(keys: string[]): keys is IconKey[] {
  return keys.every((key) => key in IconMap);
};

/**
 * IconKey に含まれるキーのみを返す
 */
export function filterIconKeys(keys: string[]): IconKey[] {
  const iconKeys = keys.filter((key) => key in IconMap);
  if (isIconKeys(iconKeys)) return iconKeys;
  return [];
}

interface Props {
  iconKey: IconKey;
  color?: string;
  className?: string;
  size?: number;
}

function Icon(props: Props): ReactElement {
  const { iconKey, color, ...rest } = props;
  const SelectedIcon = IconMap[iconKey].icon;
  const SelectedColot = color ?? 'default';

  return <SelectedIcon {...rest} color={SelectedColot} />;
}

export default Icon;
