import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { SITE } from "@consts";
import { LANGS, LOCALES, t, type Lang } from "@i18n/ui";
import { entryPath, getPosts } from "@i18n/content";

export function getStaticPaths() {
  return LANGS.map((lang) => ({ params: { lang } }));
}

export async function GET(context: APIContext) {
  const lang = context.params.lang as Lang;
  const items = [
    ...(await getPosts("blog", lang)),
    ...(await getPosts("notes", lang)),
    ...(await getPosts("projects", lang)),
  ].sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());

  return rss({
    title: SITE.NAME,
    description: t(lang, "home.description"),
    site: context.site!,
    customData: `<language>${LOCALES[lang]}</language>`,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: entryPath(item),
    })),
  });
}
