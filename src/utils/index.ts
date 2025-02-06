export function getKeys<T extends { [key: string]: unknown }>(obj: T): Array<keyof T> {
  return Object.keys(obj);
}
