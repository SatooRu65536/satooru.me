import { Content, zContentSchema } from '@/schemas/articlets';
import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { err, ok, Result } from 'neverthrow';
import { ZodIssue } from 'zod';

const CONTENTS_PATH = '/contents';

function getFilePaths(articlesDir: string): string[] {
  const files = fs.readdirSync(articlesDir);
  const filteredFiles = files.filter((f) => !f.startsWith('.'));
  return filteredFiles.map((f) => join(articlesDir, f));
}

function readFile(filePath: string): Result<Content, ZodIssue[]> {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const md = matter(fileContent);

  const post = zContentSchema.safeParse(md);
  if (post.success) return ok(post.data);
  return err(post.error.errors);
}

function _getContents(): Content[] {
  const contentsDir = join(process.cwd(), CONTENTS_PATH);
  const contents = getFilePaths(contentsDir)
    .map((filePath) => readFile(filePath))
    .filter((content) => content.isOk())
    .map((content) => content.value)
    .sort((a, b) => (a.data.updated_at > b.data.updated_at ? -1 : 1));
  return contents;
}

const contents = _getContents();

interface GetContentOptions {
  category?: string;
  limit?: number;
}

export function getContents({ category, limit }: GetContentOptions): Content[] {
  if (category === undefined) return contents.slice(0, limit);
  return contents.filter((content) => content.data.category === category).slice(0, limit);
}

export function getContent(number: number): Content | undefined {
  return contents.find((content) => content.data.number === number);
}
