export interface CompileDocxOptions {
    file: File | Blob;
    data: Record<string, any>;
    endpoint?: string;
    apiKey?: string;
}
export declare function compileDocx(options: CompileDocxOptions): Promise<Blob>;
