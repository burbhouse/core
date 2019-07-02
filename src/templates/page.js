import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Base from './base'

export default props => {
  const page = get(props, 'data.contentfulPage')
  const siteTitle = get(props, 'data.site.siteMetadata.title')

  return (
    <Base {...props} {...page} siteTitle={siteTitle}>
      <div
        dangerouslySetInnerHTML={{
          __html: page.body.childMarkdownRemark.html
        }}
      />
      <div>{props.children}</div>
    </Base>
  )
}

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: $slug }) {
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
  }
`
