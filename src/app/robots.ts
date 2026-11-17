import type { MetadataRoute } from "next";
import { indexable, site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  if (!indexable) return { rules: [{ userAgent: "*", disallow: "/" }] };
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/", "/login", "/place", "/subscriptions", "/setup",
          "/reception", "/dashboard", "/customers", "/personnel", "/reports",
        ],
      },
    ],
    sitemap: `${site.origin}/sitemap.xml`,
    host: site.origin,
  };
}
