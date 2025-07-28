declare module 'yodomicro' {
  export function compileDocx(
    file: File | Blob,
    data: Record<string, any>,
    callback: (output: Blob) => void
  ): Promise<void>;
}
