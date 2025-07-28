declare module 'yodomicro' {
// yodomicro/index.d.ts

export function generateDocx(
  req: Request,
  apiKeyEnv?: string
): Promise<Response>;

}
