export interface SiteLink {
  label: string;
  url: string;
}

export interface LiveChatChannel {
  id: 'messenger' | 'zalo' | 'telegram' | 'whatsapp' | 'tawkto' | 'crisp' | 'email';
  enabled: boolean;
  value: string;
  label?: string;
}

export interface LiveChatSettings {
  enabled: boolean;
  title?: string;
  welcomeText?: string;
  channels: LiveChatChannel[];
}

export interface GiscusSettings {
  enabled: boolean;
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
}

export type AstroTemplateStyle =
  | 'newyorker-light'
  | 'nytimes-light'
  | 'bbc-dark'
  | 'obsidian-broadsheet'
  | 'espresso-salon'
  | 'monocle-magazine'
  | 'guardian-portal'
  | 'kyoto-folio'
  | 'economist-digest'
  | 'nordic-atlas';

export interface ThemeModeColorOverrides {
  canvas?: string;
  surface?: string;
  textPrimary?: string;
  accent?: string;
  link?: string;
}

export interface ThemeCustomColors {
  light?: ThemeModeColorOverrides;
  dark?: ThemeModeColorOverrides;
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
  templateStyle: AstroTemplateStyle;
  themeColors?: ThemeCustomColors;
  isMultiPage: boolean;
  pagesUrl: string;
  customDomain?: string;
  analyticsProvider?: 'none' | 'ga4' | 'cloudflare' | 'plausible' | 'umami';
  analyticsId?: string;
  giscus?: GiscusSettings;
  liveChat?: LiveChatSettings;
}

export const SITE_CONFIG: SiteIdentityConfig = {
  "siteTitle": "Blog của agripathlife",
  "tagline": "Nhật ký một gã khờ.",
  "siteIcon": "/favicon.png",
  "headerTitle": "Đạo Ký",
  "headerNavLinks": [],
  "footerText": "Thuận tự nhiên sống đời an yên !",
  "footerLinks": [],
  "authorName": "Hạ Vũ",
  "authorBio": "Một thoáng nhân gian đẹp biết bao !",
  "themeMode": "light",
  "templateStyle": "guardian-portal",
  "themeColors": {
    "light": {
      "canvas": "#F2F6F7",
      "surface": "#E4ECEE",
      "textPrimary": "#0F1C21",
      "accent": "#0F766E",
      "link": "#0D9488"
    },
    "dark": {
      "canvas": "#0D1317",
      "surface": "#141E24",
      "textPrimary": "#EDF2F4",
      "accent": "#2DD4BF",
      "link": "#5EEAD4"
    }
  },
  "isMultiPage": true,
  "pagesUrl": "https://agripathlife.github.io",
  "customDomain": "",
  "analyticsProvider": "none",
  "analyticsId": "",
  "giscus": {
    "enabled": false,
    "repo": "",
    "repoId": "",
    "category": "Announcements",
    "categoryId": ""
  },
  "liveChat": {
    "enabled": false,
    "title": "Trò chuyện với tác giả",
    "welcomeText": "Chọn kênh liên hệ trực tiếp bên dưới để nhắn tin nhanh.",
    "channels": [
      {
        "id": "zalo",
        "enabled": false,
        "value": "0969711187",
        "label": "Zalo"
      },
      {
        "id": "messenger",
        "enabled": false,
        "value": "m.me/huyenkhongthuquan",
        "label": "Messenger"
      },
      {
        "id": "telegram",
        "enabled": false,
        "value": "",
        "label": "Telegram"
      },
      {
        "id": "whatsapp",
        "enabled": false,
        "value": "",
        "label": "WhatsApp"
      },
      {
        "id": "email",
        "enabled": false,
        "value": "",
        "label": "Email"
      },
      {
        "id": "tawkto",
        "enabled": false,
        "value": "",
        "label": "Tawk.to Widget"
      },
      {
        "id": "crisp",
        "enabled": false,
        "value": "",
        "label": "Crisp Chat"
      }
    ]
  }
};
