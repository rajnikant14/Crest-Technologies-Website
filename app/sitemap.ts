import type { MetadataRoute } from "next";
import { services } from "@/content/services";
import { industrySlugs } from "@/content/industries";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/services",
    "/products",
    "/products/digital-product-passport",
    "/industries",
    "/private-equity",
    "/delivery-model",
    "/about",
    "/team",
    "/careers",
    "/contact",
  ];

  const servicePaths = services
    .filter((s) => s.slug !== "digital-product-passport")
    .map((s) => `/services/${s.slug}`);

  const industryPaths = industrySlugs.map((slug) => `/industries/${slug}`);

  return [...staticPaths, ...servicePaths, ...industryPaths].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").length > 2 ? 0.7 : 0.8,
  }));
}
