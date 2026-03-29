/**
 * File: src/components/ResumePage/DynamicSection/helpers.ts
 * Author: Harshita Gawas
 * Description: Dynamic section component helpers for the Resume page.
 * Created on: 20/03/2026
 * Last Modified: 29/03/2026
 */

const HEADER_TITLE_KEYS = ["title", "degree", "role", "name"] as const;
const META_KEYS = ["timeline", "status", "period"] as const;

export const HEADER_KEYS = new Set([
  ...HEADER_TITLE_KEYS,
  ...META_KEYS,
  "company",
  "institution",
  "location",
  "from",
  "to",
]);

export const MEDIA_KEYS = new Set([
  "images",
  "image",
  "certificates",
  "certificate",
]);
export const LINK_KEYS = new Set(["links"]);
export const HIDDEN_LABEL_KEYS = new Set([
  "bullets",
  "description",
  "details",
  "label",
  "title",
  "name",
  "score",
  "value",
  "skills",
]);

export const DETAIL_PRIORITY_KEYS = [
  "bullets",
  "description",
  "details",
  "techStack",
  "features",
  "website",
  "links",
  "images",
  "image",
  "certificates",
  "certificate",
];

export const getHeaderValues = (item: Record<string, unknown>) => {
  const mainTitle = getFirstString(item, HEADER_TITLE_KEYS);
  const organization = getFirstString(item, ["company", "institution"]);
  const location = getString(item.location);

  const subtitle = [organization, location].filter(Boolean).join(", ") || null;
  const timeline = getFirstString(item, META_KEYS);
  const from = getString(item.from);
  const to = getString(item.to);
  const range = from || to ? [from, to].filter(Boolean).join(" - ") : null;

  return {
    mainTitle,
    subtitle,
    meta: timeline || range,
  };
};

export const formatLabel = (value: string) =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());

export const isLinkLike = (value: string) =>
  /^(https?:\/\/|mailto:|tel:)/i.test(value);

export const isImageFile = (value: string) => {
  const extension = getFileExtension(value);
  return ["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(extension);
};

export const isPdfFile = (value: string) => getFileExtension(value) === "pdf";

export const isMediaLike = (value: string) =>
  isImageFile(value) || isPdfFile(value);

const getFirstString = (
  item: Record<string, unknown>,
  keys: readonly string[],
) => {
  for (const key of keys) {
    const value = getString(item[key]);

    if (value) {
      return value;
    }
  }

  return null;
};

const getString = (value: unknown) =>
  typeof value === "string" && value.trim().length > 0 ? value.trim() : null;

const getFileExtension = (value: string) => {
  const normalized = value.split("#")[0]?.split("?")[0] ?? "";
  const parts = normalized.split(".");
  return parts.length > 1 ? parts.pop()!.toLowerCase() : "";
};
