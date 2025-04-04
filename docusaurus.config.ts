import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Andamio Developers - Documentation',
  tagline: 'Learn To Work',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.andamio.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docs-site/',
  trailingSlash: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Andamio-Platform', // Usually your GitHub org/user name.
  projectName: 'docs-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Andamio-Platform/docs-site',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Andamio-Platform/docs-site',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: [
          'node-sdk/src/index.ts',

          'node-sdk/src/provider/*',
          // 'node-sdk/src/provider/core/course/*',
          // 'node-sdk/src/provider/core/course/assignment-state.ts',
          // 'node-sdk/src/provider/core/course/course-state.ts',
          // 'node-sdk/src/provider/core/course/module-ref.ts',
          // 'node-sdk/src/provider/core/network/*',
          // 'node-sdk/src/provider/core/network/alias-index.ts',
          // 'node-sdk/src/provider/core/network/global-state.ts',
          // 'node-sdk/src/provider/core/network/governance.ts',
          // 'node-sdk/src/provider/core/network/instance.ts',
          // 'node-sdk/src/provider/core/project/*',
          // 'node-sdk/src/provider/core/project/contributor-state.ts',
          // 'node-sdk/src/provider/core/project/escrow.ts',
          // 'node-sdk/src/provider/core/project/treasury.ts',

        ],
        tsconfig: 'node-sdk/tsconfig.json',
        out: 'docs/sdk',
        sidebar: {
          category: 'API Reference',
          position: 2,
          pretty: true
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

        // Add this option:
        includeDeclarations: true,

        // You might also want these:
        excludeExternals: false,
        excludePrivate: false,
        excludeProtected: false,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        { to: '/blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
