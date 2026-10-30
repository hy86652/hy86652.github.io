export const LANGS = ["en", "zh"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "en";

// Value for <html lang> and Intl formatting
export const LOCALES: Record<Lang, string> = {
  en: "en-US",
  zh: "zh-CN",
};

// Label shown on the language switch, i.e. the name of the *other* language
export const LANG_SWITCH_LABEL: Record<Lang, string> = {
  en: "English",
  zh: "中文",
};

export const UI = {
  en: {
    "nav.blog": "blog",
    "nav.notes": "notes",
    "nav.work": "work",
    "nav.projects": "projects",

    "home.title": "Home",
    "home.description": "Simon Yan — notes on data, quantitative research, machine learning, and the work in between.",
    "home.latestPosts": "Latest posts",
    "home.allPosts": "See all posts",
    "home.latestNotes": "Recent notes",
    "home.allNotes": "See all notes",
    "home.work": "Work experience",
    "home.allWork": "See all work",
    "home.education": "Education",
    "home.projects": "Recent projects",
    "home.allProjects": "See all projects",
    "home.connect": "Let's connect",
    "home.connectText": "If you want to talk about something you read here, or just say hi, reach out on social media or send me an email.",

    "blog.title": "Blog",
    "blog.description": "Longer writing: project retrospectives, work reflections, and things worth thinking through.",
    "notes.title": "Notes",
    "notes.description": "Short notes on things I learned — tools, techniques, and lessons from day-to-day work.",
    "work.title": "Work",
    "work.description": "Where I have worked and studied, and what I have earned along the way.",
    "work.experience": "Experience",
    "work.education": "Education",
    "work.certifications": "Certifications",
    "work.awards": "Awards",
    "projects.title": "Projects",
    "projects.description": "Things I have built, with links to code and demos.",

    "post.backTo.blog": "Back to blog",
    "post.backTo.notes": "Back to notes",
    "post.backTo.projects": "Back to projects",
    "post.minRead": "min read",
    "post.untranslated": "This entry is not available in Chinese yet.",

    "footer.backToTop": "Back to top",
    "footer.light": "Light theme",
    "footer.dark": "Dark theme",
    "footer.system": "System theme",

    "empty": "Nothing here yet.",
    "notFound.title": "Page not found",
    "notFound.text": "The page you are looking for does not exist or has moved.",
    "notFound.home": "Go home",
  },
  zh: {
    "nav.blog": "博客",
    "nav.notes": "笔记",
    "nav.work": "经历",
    "nav.projects": "项目",

    "home.title": "首页",
    "home.description": "Simon Yan —— 关于数据、量化研究、机器学习，以及工作中点滴的记录。",
    "home.latestPosts": "最新文章",
    "home.allPosts": "全部文章",
    "home.latestNotes": "最近笔记",
    "home.allNotes": "全部笔记",
    "home.work": "工作经历",
    "home.allWork": "全部经历",
    "home.education": "教育背景",
    "home.projects": "近期项目",
    "home.allProjects": "全部项目",
    "home.connect": "联系我",
    "home.connectText": "如果你想聊聊这里的某篇文章，或者只是打个招呼，欢迎通过社交媒体或邮件联系我。",

    "blog.title": "博客",
    "blog.description": "较长的文章：项目复盘、工作思考，以及值得认真想清楚的事。",
    "notes.title": "笔记",
    "notes.description": "学到新东西时的简短记录 —— 工具、技术，以及日常工作中的经验。",
    "work.title": "经历",
    "work.description": "我在哪里工作和求学，以及一路上获得的证书与奖项。",
    "work.experience": "工作经历",
    "work.education": "教育背景",
    "work.certifications": "证书",
    "work.awards": "奖项",
    "projects.title": "项目",
    "projects.description": "我做过的东西，附代码和演示链接。",

    "post.backTo.blog": "返回博客",
    "post.backTo.notes": "返回笔记",
    "post.backTo.projects": "返回项目",
    "post.minRead": "分钟阅读",
    "post.untranslated": "这篇内容暂时还没有英文版。",

    "footer.backToTop": "回到顶部",
    "footer.light": "浅色主题",
    "footer.dark": "深色主题",
    "footer.system": "跟随系统",

    "empty": "这里还没有内容。",
    "notFound.title": "页面不存在",
    "notFound.text": "你要找的页面不存在，或者已经被移动了。",
    "notFound.home": "回到首页",
  },
} as const;

export type UIKey = keyof (typeof UI)["en"];

export function t(lang: Lang, key: UIKey): string {
  return UI[lang][key];
}

export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "zh" : "en";
}
