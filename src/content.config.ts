import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sharedFields = z.object({
  tieu_de: z.string().optional(),
  ten_san_pham: z.string().optional(),
  title: z.string().optional(),
  danh_muc: z.union([z.string(), z.array(z.string())]).optional(),
  category: z.string().optional(),
  chuyen_muc: z.string().optional(),
  slug: z.string().optional(),
  tags: z.array(z.string()).optional().default([]),
  cong_nghe: z.array(z.string()).optional().default([]),
  the_loai: z.array(z.string()).optional().default([]),
  mo_ta: z.string().optional(),
  mo_ta_ngan: z.string().optional(),
  excerpt: z.string().optional(),
  description: z.string().optional(),
  ngay: z.coerce.string().optional(),
  date: z.coerce.string().optional(),
  pubDate: z.coerce.string().optional(),
  anh_bia: z.string().optional(),
  anh_dai_dien: z.string().optional(),
  anh_san_pham: z.string().optional(),
  cover: z.string().optional(),
  heroImage: z.string().optional(),
  image: z.string().optional(),
  nhap: z.boolean().optional().default(false),
  draft: z.boolean().optional().default(false),
  tac_gia: z.string().optional(),
  author: z.string().optional(),
  gia: z.union([z.string(), z.number()]).optional(),
  gia_goc: z.union([z.string(), z.number()]).optional(),
  con_hang: z.boolean().optional(),
  dinh_dang: z.array(z.string()).optional(),
  nam_xuat_ban: z.union([z.number(), z.string()]).optional(),
  link_demo: z.string().optional(),
  link_github: z.string().optional(),
  link_mua: z.string().optional(),
  noi_bat: z.boolean().optional(),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  canonical_url: z.string().optional(),
  noindex: z.boolean().optional(),
});

export const collections = {
  bai_viet: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/bai_viet' }),
    schema: sharedFields,
  }),
  du_an: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/du_an' }),
    schema: sharedFields,
  }),
  sach: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/sach' }),
    schema: sharedFields,
  }),
  cua_hang: defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/cua_hang' }),
    schema: sharedFields,
  }),
};
