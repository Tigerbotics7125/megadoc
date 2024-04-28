const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  latex: true,
  pageExtensions: ['mdx', 'md']
})

module.exports = withNextra()
