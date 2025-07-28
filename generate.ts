// yodomicro/generate.ts

import { TemplateHandler } from 'easy-template-x';
import { readFile, writeFile, unlink } from 'fs/promises';
import path from 'path';
import os from 'os';
import { File } from 'formdata-node';

interface GenerateOptions {
  file: File;
  rawData: string;
}

export async function generateDocx({ file, rawData }: GenerateOptions): Promise<Buffer> {
  if (!file || !rawData) {
    throw new Error('Missing file or data');
  }

  let data: Record<string, any>;
  try {
    data = JSON.parse(rawData);
  } catch (err) {
    throw new Error('Invalid JSON data');
  }

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const uniqueName = `${Date.now()}-${file.name}`;
  const tempFilePath = path.join(os.tmpdir(), uniqueName);
  await writeFile(tempFilePath, buffer);

  try {
    const handler = new TemplateHandler();
    const fileBuffer = await readFile(tempFilePath);
    const filled = await handler.process(fileBuffer, data);
    return filled;
  } finally {
    await unlink(tempFilePath).catch(() => {});
  }
}
