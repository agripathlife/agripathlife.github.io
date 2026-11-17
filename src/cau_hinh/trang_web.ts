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

export type AstroTemplateStyle =
  | 'newyorker-light'
  | 'nytimes-light'
  | 'bbc-dark'
  | 'obsidian-broadsheet'
  | 'espresso-salon';

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
  pagesUrl: string;
  githubOwner: string;
  githubRepo: string;
  liveChat?: LiveChatSettings;
}

export const SITE_CONFIG: SiteIdentityConfig = {
  "siteTitle": "Vạn sự tùy tâm!",
  "tagline": "Nhật ký một gã khờ.",
  "siteIcon": "/favicon.png",
  "headerTitle": "Hạ Vũ",
  "headerNavLinks": [],
  "footerText": "Thuận theo tự nhiên, sống trọn nhân sinh !",
  "footerLinks": [],
  "authorName": "Hạ Vũ",
  "authorBio": "Một thoáng nhân gian há phải bận lòng !",
  "themeMode": "light",
  "templateStyle": "newyorker-light",
  "pagesUrl": "https://agripathlife.github.io",
  "githubOwner": "agripathlife",
  "githubRepo": "agripathlife.github.io",
  "liveChat": {
    "enabled": true,
    "title": "Trò chuyện với tác giả",
    "welcomeText": "Chọn kênh liên hệ trực tiếp bên dưới để nhắn tin nhanh.",
    "channels": [
      {
        "id": "zalo",
        "enabled": true,
        "value": "0969711187",
        "label": "Zalo"
      },
      {
        "id": "messenger",
        "enabled": false,
        "value": "",
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
