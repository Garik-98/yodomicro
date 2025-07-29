export interface CompileDocxOptions {
    file: File | Blob;
    data: Record<string, any>;
    endpoint: string;
    apiKey?: string;
}
export declare function compileDocx({ file, data, endpoint, apiKey, }: CompileDocxOptions): Promise<Blob>;
