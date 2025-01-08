import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "86 Neurons",
    // pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "86billionneurons.com", // Change to 86neurons.com once the domain is transferred
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Lora",
        body: "Merriweather",
        code: "IBM Plex Mono",
      },
      colors: {
        // Socratica colors
        lightMode: {
          light: "#f7f5eb",
          lightgray: "#e0ddd7",
          gray: "#A09D98",
          darkgray: "#5c534b",
          dark: "#242220",
          secondary: "#635b8f",
          tertiary: "#69a3d6",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fab38788",
        },
        darkMode: {
          light: "#f7f5eb",
          lightgray: "#e0ddd7",
          gray: "#A09D98",
          darkgray: "#5c534b",
          dark: "#242220",
          secondary: "#635b8f",
          tertiary: "#69a3d6",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fab38788",
        },
        // lightMode: {
        //   light: "#1E1E1E", // A deep twilight-like background
        //   lightgray: "#313244", // Subtle darker accents for secondary backgrounds
        //   gray: "#45475a", // Neutral gray with a hint of color
        //   darkgray: "#a6adc8", // Softer midtone for contrasts
        //   dark: "#cdd6f4", // Bright, crisp accents
        //   secondary: "#f5a97f", // Soft peach, vibrant but easy on the eyes
        //   tertiary: "#cba6f7", // Muted lavender, adding a gentle pastel tone
        //   highlight: "rgba(166, 227, 161, 0.15)", // Mint green highlight with transparency
        //   textHighlight: "#fab38788", // Warm orange highlight with transparency
        // },
        // lightMode: {
        //   light: "#faf8f8",
        //   lightgray: "#e5e5e5",
        //   gray: "#b8b8b8",
        //   darkgray: "#4e4e4e",
        //   dark: "#2b2b2b",
        //   secondary: "#284b63",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        //   textHighlight: "#fff23688",
        // },
        // darkMode: {
        //   light: "#1E1E1E", // A deep twilight-like background
        //   lightgray: "#313244", // Subtle darker accents for secondary backgrounds
        //   gray: "#45475a", // Neutral gray with a hint of color
        //   darkgray: "#a6adc8", // Softer midtone for contrasts
        //   dark: "#cdd6f4", // Bright, crisp accents
        //   secondary: "#f5a97f", // Soft peach, vibrant but easy on the eyes
        //   tertiary: "#cba6f7", // Muted lavender, adding a gentle pastel tone
        //   highlight: "rgba(166, 227, 161, 0.15)", // Mint green highlight with transparency
        //   textHighlight: "#fab38788", // Warm orange highlight with transparency
        // },

        // darkMode: {
        //   light: "#161618",
        //   lightgray: "#393639",
        //   gray: "#646464",
        //   darkgray: "#d4d4d4",
        //   dark: "#ebebec",
        //   secondary: "#7b97aa",
        //   tertiary: "#84a59d",
        //   highlight: "rgba(143, 159, 169, 0.15)",
        //   textHighlight: "#b3aa0288",
        // },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
