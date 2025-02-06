export function getKeys<T extends { [key: string]: unknown }>(obj: T): Array<keyof T> {
  return Object.keys(obj);
}

export function toText(md: string | undefined, limit = 150) {
  const text = md
    ?.replace(/#+ .*\n/g, '')
    .replace(/[ |:\\*-]/g, '')
    .replace(/<.+>/g, '')
    .replace(/\*/g, '')
    .replace(/`/g, '')
    .replace(/\\/g, '')
    .replace(/\[.*\]\(.*\)/g, '')
    .slice(0, limit);
  return text ?? '';
}
