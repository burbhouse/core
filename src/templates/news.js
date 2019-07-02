import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Base from './base'

export default props => {
  const Date = styled.p`
    display: 'block';
  `

  const post = get(props, 'data.contentfulNews')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Base {...props} {...post} siteTitle={siteTitle}>
      <Date>{post.publishDate}</Date>
      <div
        dangerouslySetInnerHTML={{
          __html: post.body.childMarkdownRemark.html
        }}
      />
    </Base>
  )
}

export const pageQuery = graphql`
  query NewsBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulNews(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
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
  }
`
