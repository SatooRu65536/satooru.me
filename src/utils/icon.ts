import { ICON_KEYS, type IconKey } from '@/components/shares/Icon';

export function includesIconKey(icon: string): icon is IconKey {
  return ICON_KEYS.includes(icon);
}

export function filterIconKeys(icons: string[]): IconKey[] {
  return icons.filter(includesIconKey);
}
