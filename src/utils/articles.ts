import { zContentSchema } from '@/schemas/articlets';
import { join } from 'path';
import fs from 'fs';
import matter, { type GrayMatterFile } from 'gray-matter';
import { z } from 'zod';

const CONTENTS_PATH = '/contents';
type RawContent = GrayMatterFile<string>;

const _contents: RawContent[] = _getContents();

function _getFilePaths(articlesDir: string): string[] {
  const files = fs.readdirSync(articlesDir);
  const filteredFiles = files.filter((f) => !f.startsWith('.'));
  return filteredFiles.map((f) => join(articlesDir, f));
}

function _readFile(filePath: string): RawContent {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  return matter(fileContent);
}

function _getContents(): RawContent[] {
  const contentsDir = join(process.cwd(), CONTENTS_PATH);
  return _getFilePaths(contentsDir).map((filePath) => _readFile(filePath));
}

interface GetContentOptions {
  category?: string;
  limit?: number;
}

export function getCategories(): Set<string> {
  return new Set(
    _contents.map((content) => parseContent(content, zContentSchema)?.data.category).filter((c) => c !== undefined),
  );
}

export function getContents<T extends z.Schema = typeof zContentSchema>(
  { category, limit }: GetContentOptions,
  zSchema?: T,
): z.infer<T>[] {
  const contents: z.infer<T>[] = _contents
    .map((content) => parseContent(content, zSchema ?? zContentSchema))
    .filter((c) => c !== undefined)
    .sort((a, b) => (a?.data.updated_at > b?.data.updated_at ? -1 : 1));

  if (category === undefined) return contents.slice(0, limit);
  return contents.filter((content) => content.data.category === category).slice(0, limit);
}

export function getContent<T extends z.Schema>(number: number, zSchema?: T): z.infer<T> | undefined {
  const content = _contents.find((content) => content.data.number === number);

  if (content === undefined) return undefined;
  return parseContent(content, zSchema ?? zContentSchema);
}

export function parseContent<T extends z.Schema>(content: RawContent, schema: T): z.infer<T> | undefined {
  const res = schema.safeParse(content);
  if (res.success) return res.data;

  console.error(res.error.errors);
  throw new Error('Failed to parse content');
}
