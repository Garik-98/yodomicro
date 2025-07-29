export interface CompileDocxOptions {
  file: File | Blob;
  data: Record<string, any>;
  endpoint: string;
  apiKey?: string;
}

export async function compileDocx({
  file,
  data,
  endpoint,
  apiKey,
}: CompileDocxOptions): Promise<Blob> {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('data', JSON.stringify(data));

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      ...(apiKey ? { 'x-api-key': apiKey } : {}),
    },
    body: formData,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`DOCX generation failed: ${errorText}`);
  }

  return await response.blob();
}
