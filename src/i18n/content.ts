import { getCollection, type CollectionEntry } from "astro:content";
import { LANGS, type Lang } from "@i18n/ui";

export type PostCollection = "blog" | "notes" | "projects";

// Content ids look like "en/my-post"; split them into language and slug.
export function splitId(id: string): { lang: Lang; slug: string } {
  const [lang, ...rest] = id.split("/");
  return { lang: lang as Lang, slug: rest.join("/") };
}

export function entryPath(entry: CollectionEntry<PostCollection>) {
  const { lang, slug } = splitId(entry.id);
  return `/${lang}/${entry.collection}/${slug}/`;
}

export async function getPosts<C extends PostCollection>(collection: C, lang: Lang) {
  const entries = (await getCollection(collection)) as CollectionEntry<PostCollection>[];
  return entries
    .filter((entry) => splitId(entry.id).lang === lang && !entry.data.draft)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf()) as CollectionEntry<C>[];
}

// getStaticPaths for /[lang]/<collection>/[...slug]
export async function getEntryPaths(collection: PostCollection) {
  const entries = (await getCollection(collection)) as CollectionEntry<PostCollection>[];
  return entries
    .filter((entry) => !entry.data.draft)
    .map((entry) => ({
      params: splitId(entry.id),
      props: { entry },
    }));
}

export async function getWork(lang: Lang) {
  return (await getCollection("work"))
    .filter((entry) => splitId(entry.id).lang === lang)
    .sort((a, b) => b.data.dateStart.valueOf() - a.data.dateStart.valueOf());
}

// Path of the same page in another language, e.g. /en/blog/ -> /zh/blog/
export function swapLangPath(pathname: string, to: Lang) {
  const parts = pathname.split("/");
  if (LANGS.includes(parts[1] as Lang)) parts[1] = to;
  return parts.join("/");
}
