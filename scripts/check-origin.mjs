import nextEnv from '@next/env';
nextEnv.loadEnvConfig(process.cwd());
const origin = process.env.NEXT_PUBLIC_SITE_URL;
if (origin) {
  const parsed = new URL(origin);
  if (parsed.protocol !== 'https:' || /^(localhost|127\.|example\.)/.test(parsed.hostname) || parsed.pathname !== '/' || parsed.search || parsed.hash) throw new Error('NEXT_PUBLIC_SITE_URL must be your authorized HTTPS origin without a path, query or hash.');
} else if (process.argv.includes('--required')) throw new Error('Set NEXT_PUBLIC_SITE_URL to your authorized public HTTPS origin before making a share-ready build.');
else console.log('Local build: no public origin configured. Absolute social URLs are intentionally omitted; use build:share for deployment.');
