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

export default defineConfig({
  site,
  base,
  output: 'static',
});
