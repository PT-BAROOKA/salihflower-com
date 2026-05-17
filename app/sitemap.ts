import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://salihflower.com";
  const lastModified = new Date();

  return [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/produk`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/corporate`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/cara-order`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/tentang`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/faq`, lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/kontak`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
