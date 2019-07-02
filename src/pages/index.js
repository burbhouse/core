import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import ArticlePreview from '../components/article-preview'
import Base from '../templates/base'

export default props => {
  const ArticleList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 5vmin;
  `

  const Intro = styled.div`
    margin-bottom: 3em;
  `

  const posts = get(props, 'data.allContentfulNews.edges')
  const home = get(props, 'data.contentfulPage')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Base {...props} title={home.title} heroImage={home.heroImage} siteTitle={siteTitle}>
      <Intro
        dangerouslySetInnerHTML={{
          __html: home.body.childMarkdownRemark.html
        }}
      />
      <h2 className='section-headline'>Recent News</h2>
      <ArticleList>
        {posts.slice(0, 3).map(({ node }) => {
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
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "home" }) {
      title
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMarkdownRemark {
          html
        }
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
