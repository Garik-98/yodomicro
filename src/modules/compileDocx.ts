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

  const response = await fetch(options.endpoint || 'http://localhost:3001/api/generate-doc', {
    method: 'POST',
    headers: {
      'x-api-key': options.apiKey || '',
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`Error: ${response.statusText}`);
  }

  return await response.blob();
}
