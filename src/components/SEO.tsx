import { useEffect } from "react";
import { absoluteUrl } from "../data/config";
import { assetPath } from "../utils/assets";

type SEOProps = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
};

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const element = document.head.querySelector(selector);
  if (element) {
    element.setAttribute(attr, value);
  }
}

export function SEO({
  title,
  description,
  path = "",
  image,
  type = "website",
}: SEOProps) {
  useEffect(() => {
    const canonical = absoluteUrl(path);
    const previewImage = image
      ? absoluteUrl(image)
      : absoluteUrl(assetPath("assets/brand/og-image-1200x630.png"));
    const twitterImage = image
      ? absoluteUrl(image)
      : absoluteUrl(assetPath("assets/brand/twitter-card-1200x600.png"));

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", canonical);
    setMeta('meta[property="og:type"]', "content", type);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:image"]', "content", previewImage);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('meta[name="twitter:image"]', "content", twitterImage);
  }, [description, image, path, title, type]);

  return null;
}
