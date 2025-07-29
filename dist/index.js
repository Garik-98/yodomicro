export async function compileDocx({ file, data, endpoint, apiKey, }) {
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
