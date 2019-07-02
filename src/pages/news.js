import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import ArticlePreview from '../components/article-preview'
import Base from '../templates/base'

export default props => {
  const posts = get(props, 'data.allContentfulNews.edges')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  const ArticleList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5vmin;
  `

  return (
    <Base {...props} title='News' image='#' siteTitle={siteTitle}>
      <h2 className='section-headline'>Recent articles</h2>
      <ArticleList>
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <ArticlePreview article={node} />
            </li>
          )
        })}
      </ArticleList>
    </Base>
  )
}

export const pageQuery = graphql`
  query NewsIndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulNews(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
