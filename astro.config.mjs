import { defineConfig } from 'astro/config';

const repoOwner = process.env.GITHUB_REPOSITORY_OWNER || 'agripathlife';
const repoFull = process.env.GITHUB_REPOSITORY || 'agripathlife/agripathlife.github.io';
const repoName = repoFull.split('/')[1] || 'agripathlife.github.io';
const isUserSite =
  Boolean(repoName && repoOwner) &&
  repoName.toLowerCase() === `${repoOwner.toLowerCase()}.github.io`;

const site =
  process.env.SITE_URL ||
  (repoOwner ? `https://${repoOwner}.github.io` : 'https://agripathlife.github.io');
const base =
  process.env.BASE_PATH ||
  (repoName && !isUserSite ? `/${repoName}` : '/');

function remarkPrefixLocalAssets() {
  const cleanBase = base === '/' ? '' : base.replace(/\/+$/, '');
  if (!cleanBase) return () => {};
  const rewriteSrc = (val) => {
    if (typeof val !== 'string') return val;
    if (
      (val.startsWith('/tainguyen/') || val.startsWith('/images/')) &&
      !val.startsWith(cleanBase + '/')
    ) {
      return cleanBase + val;
    }
    return val;
  };
  const walk = (node) => {
    if (!node || typeof node !== 'object') return;
    if (node.type === 'image' && typeof node.url === 'string') {
      node.url = rewriteSrc(node.url);
    }
    if (node.type === 'html' && typeof node.value === 'string') {
      node.value = node.value.replace(
        /(src=["'])(\/(?:tainguyen|images)\/[^"']+)(["'])/gi,
        (_m, p, rel, s) => p + rewriteSrc(rel) + s
      );
    }
    if (Array.isArray(node.children)) {
      for (const child of node.children) walk(child);
    }
  };
  return (tree) => walk(tree);
}

export default defineConfig({
  site,
  base,
  output: 'static',
  markdown: {
    remarkPlugins: [remarkPrefixLocalAssets],
  },
});
