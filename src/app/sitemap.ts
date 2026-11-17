import type { MetadataRoute } from "next";
import { featureRoutes, indexable, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!indexable) return [];
  return ["/", ...featureRoutes].map((path) => ({
    url: `${site.origin}${path === "/" ? "" : path}`,
    changeFrequency: "monthly" as const,
  }));
}
