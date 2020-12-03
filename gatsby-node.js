// gatsby-node.js
const standardBasePath = `/`

exports.createPages = async ({ actions }, themeOptions) => {
  const { createPage } = actions

  const basePath = themeOptions.basePath || standardBasePath

  createPage({
    path: basePath,
    component: require.resolve(`./src/templates/khleomix.tsx`),
  })
}

process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0

