import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';

const CONTENTS_DIR = 'contents';
const IGNORE_EXTENSIONS = ['.webp', '.svg', '.gif'];
const IMAGE_REGEX = /<img.*?src=['"](\S*?)['"].*>|!\[.*\]\(([^)]+\.\w{1,5})/g;
const IMAGE_SRC_REGEX = /src=['"](\S*?)['"]/;
const IMAGE_MARKDOWN_REGEX = /!\[.*\]\(([^)]+\.\w{1,5})/;

/**
 * 画像のパスを取得する
 * @param imagePath 画像のパス
 * @returns Webpのパス
 */
function toWebpPath(imagePath: string) {
  const ext = path.extname(imagePath);
  const extRegex = new RegExp(`${ext}$`);
  const webpPath = imagePath.replace(extRegex, '.webp');
  return webpPath;
}

/**
 * 相対パスを絶対パスに変換する
 * @param relativePath 相対パス
 * @returns 絶対パス
 */
function toAbsolutePath(relativePath: string) {
  return path.join(process.cwd(), relativePath);
}

/**
 * パスからファイル名を取得する
 * @param imagePath パス
 */
async function toWebp(imagePath: string) {
  const absolutePath = toAbsolutePath(imagePath);
  const absoluteWebpPath = toAbsolutePath(toWebpPath(imagePath));
  if (absolutePath.endsWith('.webp') || absolutePath.endsWith('.svg')) return;
  exec(`cwebp -resize 810 0 ${absolutePath} -o ${absoluteWebpPath}`, (error) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    exec(`rm ${absolutePath}`);
  });
}

/*
 * 画像のパスを取得する
 * @param content ファイルの中身
 *
 * @return 画像のパスの配列
 */
function getImagePathes(content: string): string[] {
  // imgタグを取得
  const imgMatch = content.match(IMAGE_REGEX);

  // imgタグから画像のURLを取得
  const imgSrcMatch = imgMatch?.map((img) => {
    // imgタグから画像のURLを取得
    let src = img.match(IMAGE_SRC_REGEX);
    if (src) return src[1];

    // マークダウンの画像挿入を取得
    src = img.match(IMAGE_MARKDOWN_REGEX);
    if (src) return src[1];

    // 画像のURLが見つからない場合はエラーを返す
    throw new Error(`No image match.\n${img}`);
  });

  return imgSrcMatch?.filter((p) => p.startsWith('/img')) || [];
}

/*
 * 画像を保存して、画像のURLを置換したファイルの中身を返す
 * @param content ファイルの中身
 * @param fileId ファイルのID
 *
 * @return 画像のURLを置換したファイルの中身
 */
function saveAndReplaceImages(content: string): string {
  // 画像のURLを取得
  const imagePathes = getImagePathes(content);
  imagePathes.forEach((imagePath) => {
    // 画像を保存して、画像のパスを取得
    void toWebp(path.join('public', imagePath));

    const imageSrc = toWebpPath(imagePath);

    if (IGNORE_EXTENSIONS.some((ext) => imagePath.endsWith(ext))) return;
    if (!imageSrc) return;

    content = content.replace(imagePath, imageSrc);
  });

  return content;
}

function main() {
  // mdファイルを取得
  const files = fs.readdirSync(CONTENTS_DIR);

  files
    .filter((file) => file.endsWith('.md'))
    .forEach((fileName) => {
      // ファイルパスを取得
      const filePath = path.join(CONTENTS_DIR, fileName);
      // ファイルの中身を取得
      const fileContents = fs.readFileSync(filePath, 'utf8');
      // 画像を保存して、画像のURLを置換したファイルの中身を取得
      const replacedContent = saveAndReplaceImages(fileContents);
      // ファイルの中身を置換
      fs.writeFileSync(filePath, replacedContent, 'utf8');
    });
}

main();
