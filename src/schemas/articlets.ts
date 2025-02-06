import { z } from 'zod';

const POST_DEFAULT_THUMBNAIL = '/images/penguin.webp';
const FIRST_IMAGE_REGEX = /\s*(<img.*?src=['"](.*)['"].*>|!\[.*\]\((.*)\))/;

export const zContentDataSchema = esaSchema({});
export type ContentData = z.infer<typeof zContentDataSchema>;

export const zProductDataSchema = esaSchema({ type: z.string().default('その他') });
export type ProductData = z.infer<typeof zProductDataSchema>;

export const zContentSchema = contentSchem(zContentDataSchema);
export type Content = z.infer<typeof zContentSchema>;

export const zProductSchema = contentSchem(zProductDataSchema);
export type Product = z.infer<typeof zProductSchema>;

function esaSchema<T extends Record<string, z.Schema>>(tagsSchema: T) {
  return z
    .object({
      title: z.string(),
      category: z.preprocess(
        (category) => {
          if (typeof category !== 'string') throw new Error('category must be a string');

          const [categoryName, ...path] = category.split('/');
          return { category: categoryName, path: path.join('/') };
        },
        z.object({ category: z.string(), path: z.string() }),
      ),
      tags: z.preprocess((tags) => {
        if (tags == null) return {};
        if (typeof tags !== 'string') throw new Error('tags must be a string');

        const entries = tags.split(',').map((pair) => {
          const pairs = pair.split(':');
          const key = pairs.at(0)?.trim();
          const value = pairs.at(1)?.trim();
          if (!key || !value) return null;
          return [key, value];
        });

        const noneNullEntries = entries.filter((entry): entry is [string, string] => entry !== null);
        return z
          .object<T>({
            date: z.coerce.date().optional(),
            ...tagsSchema,
          })
          .parse(Object.fromEntries(noneNullEntries));
      }, z.object(tagsSchema)),
      created_at: z.coerce.date(),
      updated_at: z.coerce.date(),
      published: z.boolean(),
      number: z.number(),
    })
    .transform(({ category, tags, ...esa }) => {
      const date: Date = tags?.date ?? esa.updated_at;
      const link = `/posts/${category.category}/${esa.number}`;
      return { ...esa, ...category, updated_at: date, ...tags, link };
    });
}

function contentSchem<T extends z.Schema>(dataSchema: T) {
  return z
    .object({
      data: dataSchema,
      content: z.string(),
      excerpt: z.string().optional(),
      matter: z.string(),
      language: z.string(),
    })
    .transform(({ content, ...d }) => {
      const thumbnail = getThumbnail(content);
      return { ...d, thumbnail, content };
    });
}

function getThumbnail(content: string): string {
  const match = content.match(FIRST_IMAGE_REGEX);
  return (match && (match[2] || match[3])) ?? POST_DEFAULT_THUMBNAIL;
}
