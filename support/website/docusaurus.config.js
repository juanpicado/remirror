const path = require('path');
const pkg = require('./package.json');

module.exports = {
  title: 'Remirror',
  tagline: pkg.description,
  url: 'https://remirror.io',
  baseUrl: '/',
  favicon: 'img/favicon.png',
  organizationName: 'remirror', // Usually your GitHub org/user name.
  projectName: 'remirror', // Usually your repo name.
  themeConfig: {
    image:
      'https://repository-images.githubusercontent.com/166780923/eb30b500-a97f-11ea-8508-32089c11e24c',
    colorMode: { disableSwitch: true },
    navbar: {
      logo: {
        alt: 'Remirror Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        { to: 'playground', label: 'Playground', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/remirror/remirror',
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
              label: 'Introduction',
              to: 'docs/introduction',
            },
            {
              label: 'Installation',
              to: 'docs/guide/installation',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/C4cfrMK',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ifiokjr',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/remirror/remirror',
            },
            {
              html: `
                <a href="https://www.netlify.com" target="_blank" rel="noreferrer noopener" aria-label="Hosted with Netlify">
                  <img src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg" alt="Hosted with Netlify" />
                </a>
              `,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} KickJump Ltd. Built with Docusaurus`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/remirror/remirror/edit/next/support/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/remirror/remirror/edit/next/support/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    path.join(__dirname, 'plugins/monaco-editor'),
    require.resolve('@docusaurus/plugin-ideal-image'),
  ],
  themes: ['@docusaurus/theme-live-codeblock'],
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap',
  ],
};
