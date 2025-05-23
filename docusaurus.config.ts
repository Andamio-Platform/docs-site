import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Andamio Developers - Documentation",
  tagline: "Enabling Trust for Decentralized Work",
  favicon: "img/andamio.png",

  // Set the production url of your site here
  url: "https://docs.andamio.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs-site/",
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Andamio", // Usually your GitHub org/user name.
  projectName: "andamio-documentation", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: "https://github.com/Andamio-Platform/docs-site",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-typedoc",
      {
        // Create a mock directory for TypeDoc to use as a placeholder
        // until the actual SDK code is available
        entryPointStrategy: "packages",
        entryPoints: ["./"],

        // Output directory for generated docs
        out: "docs/sdk",

        // Sidebar configuration using valid options
        sidebar: {
          autoConfiguration: true,
          pretty: true,
          typescript: true,
        },

        readme: "none",
        indexFormat: "table",
        disableSources: true,
        groupOrder: ["Classes", "Interfaces", "Enums"],
        textContentMappings: {
          "title.indexPage": "SDK",
          "title.memberPage": "{name}",
        },
        parametersFormat: "table",
        enumMembersFormat: "table",
        useCodeBlocks: true,

        // Remove the unsupported option
        // includeDeclarations: true,

        // Other valid options
        excludeExternals: false,
        excludePrivate: false,
        excludeProtected: false,
      },
    ],
  ],

  themeConfig: {
    // Set default theme to dark mode
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Andamio Documentation",
      logo: {
        alt: "Andamio Logo",
        src: "img/andamio.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "andamioSidebar",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/andamio-platform",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Andamio",
          items: [
            {
              label: "Andamio Platform",
              href: "https://app.andamio.io",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              href: "https://andamio.io/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/andamio-platform",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Andamio. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
