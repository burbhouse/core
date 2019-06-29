import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Page from '../../../src/templates/page'

export default props => {
  const documents = get(props, 'data.allContentfulDocument.edges').reduce((acc, doc) => {
    doc.node.category.forEach(category => {
      if (!acc.hasOwnProperty(category)) {
        acc[category] = []
      }
      acc[category].push(doc.node)
    })
    return acc
  }, {})

  return (
    <Page location={props.location} {...props}>
      <h2 className='section-headline'>Documents</h2>
      <ul className='document-list'>
        {Object.keys(documents).map(category => {
          return (
            <li key={category}>
              <h4>{category} Documents</h4>
              <ul>
                {documents[category].map(node => {
                  return (
                    <li key={category + node.title}>
                      <a target='_blank' href={`https://${node.file.file.url}`}>{node.title}</a>
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </Page>
  )
}

export const pageQuery = graphql`
  query AssociationQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "association" }) {
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
    allContentfulDocument {
      edges {
        node {
          title
          category
          file {
            file {
              url
            }
          }
        }
      }
    }
  }
`
