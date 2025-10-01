import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://techkingishere.github.io/youralgowebsite";
  return [
    {
      url: `${siteUrl}/`,
    },
    {
      url: `${siteUrl}/privacy/`,
    },
    {
      url: `${siteUrl}/terms/`,
    },
    {
      url: `${siteUrl}/data-deletion/`,
    },
    {
      url: `${siteUrl}/contact/`,
    },
  ];
}


