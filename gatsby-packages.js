const gatsbyPackages = new Set([
  `babel-plugin-remove-graphql-queries`,
  `gatsby-plugin-canonical-urls`,
  `gatsby-plugin-jss`,
  `gatsby-plugin-remove-trailing-slashes`,
  `gatsby-remark-code-repls`,
  `gatsby-source-lever`,
  `gatsby-transformer-excel`,

  `babel-preset-gatsby`,
  `gatsby-plugin-catch-links`,
  `gatsby-plugin-layout`,
  `gatsby-plugin-sass`,
  `gatsby-remark-copy-linked-files`,
  `gatsby-source-medium`,
  `gatsby-transformer-hjson`,

  `babel-preset-gatsby-package`,
  `gatsby-plugin-coffeescript`,
  `gatsby-plugin-less`,
  `gatsby-plugin-schema-snapshot`,
  `gatsby-remark-custom-blocks`,
  `gatsby-source-mongodb`,
  `gatsby-transformer-javascript-frontmatter`,

  `gatsby`,
  `gatsby-plugin-create-client-paths`,
  `gatsby-plugin-lodash`,
  `gatsby-plugin-sharp`,
  `gatsby-remark-embed-snippet`,
  `gatsby-source-npm-package-search`,
  `gatsby-transformer-javascript-static-exports`,

  `gatsby-admin`,
  `gatsby-plugin-cxs`,
  `gatsby-plugin-manifest`,
  `gatsby-plugin-sitemap`,
  `gatsby-remark-graphviz`,
  `gatsby-source-shopify`,
  `gatsby-transformer-json`,

  `gatsby-cli`,
  `gatsby-plugin-emotion`,
  `gatsby-plugin-mdx`,
  `gatsby-plugin-styled-components`,
  `gatsby-remark-images`,
  `gatsby-source-wikipedia`,
  `gatsby-transformer-pdf`,

  `gatsby-codemods`,
  `gatsby-plugin-facebook-analytics`,
  `gatsby-plugin-netlify`,
  `gatsby-plugin-styled-jsx`,
  `gatsby-remark-images-contentful`,
  `gatsby-source-wordpress`,
  `gatsby-transformer-react-docgen`,

  `gatsby-core-utils`,
  `gatsby-plugin-feed`,
  `gatsby-plugin-netlify-cms`,
  `gatsby-plugin-styletron`,
  `gatsby-remark-katex`,
  `gatsby-source-wordpress-experimental`,
  `gatsby-transformer-remark`,

  `gatsby-cypress`,
  `gatsby-plugin-flow`,
  `gatsby-plugin-no-sourcemaps`,
  `gatsby-plugin-stylus`,
  `gatsby-remark-prismjs`,
  `gatsby-telemetry`,
  `gatsby-transformer-screenshot`,

  `gatsby-design-tokens`,
  `gatsby-plugin-fullstory`,
  `gatsby-plugin-nprogress`,
  `gatsby-plugin-subfont`,
  `gatsby-remark-responsive-iframe`,
  `gatsby-theme`,
  `gatsby-transformer-sharp`,

  `gatsby-dev-cli`,
  `gatsby-plugin-glamor`,
  `gatsby-plugin-offline`,
  `gatsby-plugin-twitter`,
  `gatsby-remark-smartypants`,
  `gatsby-theme-blog`,
  `gatsby-transformer-sqip`,

  `gatsby-graphiql-explorer`,
  `gatsby-plugin-google-analytics`,
  `gatsby-plugin-page-creator`,
  `gatsby-plugin-typescript`,
  `gatsby-source-contentful`,
  `gatsby-theme-blog-core`,
  `gatsby-transformer-toml`,

  `gatsby-image`,
  `gatsby-plugin-google-gtag`,
  `gatsby-plugin-postcss`,
  `gatsby-plugin-typography`,
  `gatsby-source-drupal`,
  `gatsby-theme-notes`,
  `gatsby-transformer-xml`,

  `gatsby-legacy-polyfills`,
  `gatsby-plugin-google-tagmanager`,
  `gatsby-plugin-preact`,
  `gatsby-plugin-utils`,
  `gatsby-source-faker`,
  `gatsby-theme-ui-preset`,
  `gatsby-transformer-yaml`,

  `gatsby-link`,
  `gatsby-plugin-graphql-config`,
  `gatsby-plugin-preload-fonts`,
  `gatsby-react-router-scroll`,
  `gatsby-source-filesystem`,
  `gatsby-transformer-asciidoc`,
  `graphql-skip-limit`,

  `gatsby-page-utils`,
  `gatsby-plugin-guess-js`,
  `gatsby-plugin-react-css-modules`,
  `gatsby-recipes`,
  `gatsby-source-graphql`,
  `gatsby-transformer-csv`,

  `gatsby-plugin-benchmark-reporting`,
  `gatsby-plugin-image`,
  `gatsby-plugin-react-helmet`,
  `gatsby-remark-autolink-headers`,
  `gatsby-source-hacker-news`,
  `gatsby-transformer-documentationjs`,
])

const isGatsbyPackage = packageName => gatsbyPackages.has(packageName)

exports.getGatsbyPackages = function getGatsbyPackages(repoAbsPath) {
  const json = require(`${repoAbsPath}/package.json`)

  const dependencies = Object.keys(json.dependencies || {})
    .filter(isGatsbyPackage)

  const devDependencies = Object.keys(json.devDependencies || {})
    .filter(isGatsbyPackage)

  return { dependencies, devDependencies }
}
