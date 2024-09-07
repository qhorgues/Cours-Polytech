// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// /** @type {import('@docusaurus/types').Config} */
// const config = {
export default {
  title: 'Cours de Polytech',
  tagline: '',
  favicon: 'img/logo.svg',

  // Set the production url of your site here
  url: 'https://qhorgues.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Cours-Polytech/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qhorgues', // Usually your GitHub org/user name.
  projectName: 'Cours-Polytech', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/qhorgues/Cours-Polytech/blob/master/',

        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],
  
  // plugins:
  //   [
  //     ['@docusaurus/plugin-content-docs', {
  //       id: 'maths',
  //       path: 'maths',
  //       routeBasePath: './maths/',
  //       sidebarPath: './sidebars.js',
  //       remarkPlugins: [remarkMath],
  //       rehypePlugins: [rehypeKatex],
  //       // ... other options
  //     }],
  //   ],

  stylesheets: [
    {
      href: '/katex/katex.min.css',
      type: 'text/css',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'Cours de Polytech',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mathsSidebar',
            position: 'left',
            label: 'Mathématiques',
          },
          {
            type: 'docSidebar',
            sidebarId: 'infoSidebar',
            position: 'left',
            label: 'Informatiques',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};


// export default config;
