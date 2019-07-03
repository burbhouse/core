require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

let config
try {
  config = require(`./src/config.js`)

  try {
    config = require(`./site/config.js`)
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log('Site config not found.')
    }
  }
} catch (e) {
  if (e.code === 'MODULE_NOT_FOUND') {
    console.log('Core config not found.')
  }
}

const contentfulConfig = config.contentful

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  siteMetadata: config.meta,
  pathPrefix: '/',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig
    }
  ]
}
