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
  tagline: 'Notes de cours de Quentin Horgues',
  favicon: '/img/polytech-ico.svg',

  // Set the production url of your site here
  url: 'https://qhorgues.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Cours-Polytech/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'qhorgues', // Usually your GitHub org/user name.
  projectName: 'Cours-Polytech', // Usually your repo name.
  trailingSlash: false,
  
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  
  
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  
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
        pages: {
          
          path: "src/pages",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          editUrl: 'https://github.com/qhorgues/Cours-Polytech/blob/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }),
    ],
  ],
  
  stylesheets: [
    {
      href: '/Cours-Polytech/katex/katex.min.css',
      type: 'text/css',
    },
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


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      colorMode: {
        //defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: 'Cours de Polytech',
        logo: {
          alt: 'Logo',
          src: 'img/polytech-ico.svg',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mathsSidebar',
            position: 'left',
            label: 'Mathématiques',
          },
          {
            type: 'docSidebar',
            sidebarId: 'progSidebar',
            position: 'left',
            label: 'Programmation',
          },
          {
            type: 'docSidebar',
            sidebarId: 'algoSidebar',
            position: 'left',
            label: 'Algorithmique',
          },
          {
            type: 'docSidebar',
            sidebarId: 'archiSidebar',
            position: 'left',
            label: 'Architechture',
          },
          {
            type: 'docSidebar',
            sidebarId: 'anglSidebar',
            position: 'left',
            label: 'Anglais',
          },
          {
            href: 'https://cas.univ-tours.fr/cas/login?service=https://ent.univ-tours.fr/uPortal/Login',
            label: 'ENT',
            position: 'right',
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
