const Promise = require('bluebird')
const path = require('path')
const fs = require('fs')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allContentfulNews {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulPage {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const newsTemplate = fs.existsSync('./site/templates/news.js') ? './site/templates/news.js' : './src/templates/news.js'
        const posts = result.data.allContentfulNews.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/news/${post.node.slug}/`,
            component: path.resolve(newsTemplate),
            context: {
              slug: post.node.slug
            }
          })
        })

        const pageTemplate = './src/templates/page.js'
        const pages = result.data.allContentfulPage.edges
        pages.forEach((page, index) => {
          // check if specific page template exists
          let template = (test = `pages/${page.node.slug}.js`) => {
            if (fs.existsSync(`./site/${test}`)) {
              return `./site/${test}`
            } else if (fs.existsSync(`./src/${test}`)) {
              return `./src/${test}`
            }
            return pageTemplate
          }
          createPage({
            path: `/${page.node.slug}/`,
            component: path.resolve(template()),
            context: {
              slug: page.node.slug
            }
          })
        })
      })
    )
  })
}
