import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { LOCALES, type Lang } from "@i18n/ui";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date, lang: Lang) {
  return Intl.DateTimeFormat(LOCALES[lang], {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function formatMonth(date: Date, lang: Lang) {
  return Intl.DateTimeFormat(LOCALES[lang], {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

export function dateRange(startDate: Date, endDate: Date | string, lang: Lang) {
  const end = typeof endDate === "string" ? endDate : formatMonth(endDate, lang);
  return `${formatMonth(startDate, lang)} – ${end}`;
}

// English is counted in words, Chinese in characters (~400 per minute).
export function readingTime(text: string) {
  const cjk = (text.match(/[㐀-鿿]/g) ?? []).length;
  const words = text.replace(/[㐀-鿿]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200 + cjk / 400));
}
