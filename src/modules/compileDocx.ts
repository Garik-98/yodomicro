import dotenv from 'dotenv';
dotenv.config();
export interface CompileDocxOptions {
  file: File | Blob;
  data: Record<string, any>;
  endpoint?: string;
  apiKey?: string;
}

export async function compileDocx(options: CompileDocxOptions): Promise<Blob> {
  const formData = new FormData();
  formData.append('template', options.file);
  formData.append('data', JSON.stringify(options.data));
  const endpoint = options.endpoint || process.env.YODOMICRO_API_ENDPOINT;

  if (!endpoint) {
    throw new Error('No endpoint defined for yodomicro request.');
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'x-api-key': options.apiKey || process.env.YODOMICRO_API_KEY || '',
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.blob();
}
