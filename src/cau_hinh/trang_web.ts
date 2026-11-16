export interface SiteLink {
  label: string;
  url: string;
}

export interface SiteIdentityConfig {
  siteTitle: string;
  tagline: string;
  siteIcon: string;
  headerTitle: string;
  headerNavLinks: SiteLink[];
  footerText: string;
  footerLinks: SiteLink[];
  authorName: string;
  authorBio: string;
  themeMode: 'light' | 'dark';
  pagesUrl: string;
  githubOwner: string;
  githubRepo: string;
}

export const SITE_CONFIG: SiteIdentityConfig = {
  "siteTitle": "Nhật ký một gã khờ",
  "tagline": "Nhật ký một gã khờ.",
  "siteIcon": "/favicon.png",
  "headerTitle": "Hạ Vũ",
  "headerNavLinks": [],
  "footerText": "Xuất bản trực tiếp qua GitHub Pages & BlogVN.",
  "footerLinks": [],
  "authorName": "Hạ Vũ",
  "authorBio": "Gã khờ",
  "themeMode": "dark",
  "pagesUrl": "https://agripathlife.github.io",
  "githubOwner": "agripathlife",
  "githubRepo": "agripathlife.github.io"
};
