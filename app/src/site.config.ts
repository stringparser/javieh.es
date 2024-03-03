import type { SiteConfig } from "@/types";
import type { AstroExpressiveCodeOptions } from "astro-expressive-code";

export const siteConfig: SiteConfig = {
	// Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)	
	author: 'Javier Carrillo Milla',
	// Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
	title: "Web personal de Javier Carrillo",
	// Meta property used as the default description meta property
	description: "Música, programación y otros projectos en los que trabajo",
	// HTML lang property, found in src/layouts/Base.astro L:18
	lang: "es-ES",
	// Meta property, found in src/components/BaseHead.astro L:42
	ogLocale: "es_ES",
	// Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
	date: {
		locale: "es-ES",
		options: {
			day: "numeric",
			month: "short",
			year: "numeric",
		},
	},
	webmentions: {
		link: "https://webmention.io/javieh.es/webmention",
	},
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{ icon: string; title: string; path: string }> = [
	{
		icon: '⚡︎',
		title: "música",
		path: "/musica/",
	},
	{
		icon: '☕︎',
		title: "blog",
		path: "/posts/",
	},
	// por ahora comentado hasta que no haya algo
	// {
	// 	icon: '⏚',
	// 	title: "escritura",
	// 	path: "/escritura/",
	// },
];

// https://expressive-code.com/reference/configuration/
export const expressiveCodeOptions: AstroExpressiveCodeOptions = {
	// One dark, one light theme => https://expressive-code.com/guides/themes/#available-themes
	themes: ["dracula", "github-light"],
	themeCssSelector(theme, { styleVariants }) {
		// If one dark and one light theme are available
		// generate theme CSS selectors compatible with cactus-theme dark mode switch
		if (styleVariants.length >= 2) {
			const baseTheme = styleVariants[0]?.theme;
			const altTheme = styleVariants.find((v) => v.theme.type !== baseTheme?.type)?.theme;
			if (theme === baseTheme || theme === altTheme) return `[data-theme='${theme.type}']`;
		}
		// return default selector
		return `[data-theme="${theme.name}"]`;
	},
	useThemedScrollbars: false,
	styleOverrides: {
		frames: {
			frameBoxShadowCssValue: "none",
		},
		uiLineHeight: "inherit",
		codeFontSize: "0.875rem",
		codeLineHeight: "1.7142857rem",
		borderRadius: "4px",
		codePaddingInline: "1rem",
		codeFontFamily:
			'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;',
	},
};

export const SOCIAL_LINKS = {
	email: "stringparser@example.com",
	github: "https://github.com/stringparser",
	instagram: "https://github.com/javiehcarrillo",
};

