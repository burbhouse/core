import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'
import Page from '../templates/page'

export default props => {
  const ProjectList = styled.ul``

  const projects = get(props, 'data.allContentfulProject.edges')

  return (
    <Page location={props.location} {...props}>
      <h2 className='section-headline'>Projects</h2>
      <ProjectList>
        {projects.map(({ node }) => {
          return (
            <li key={node.id}>
              <h4>{node.title}</h4>
              <p>{node.description.content[0].content[0].value}</p>
              <ul>
                {node.status.map(update => {
                  return (
                    <li key={node.id + update.id}>
                      {update.date}: {update.description}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ProjectList>
    </Page>
  )
}

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPage(slug: { eq: "projects" }) {
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
    allContentfulProject {
      edges {
        node {
          id
          title
          description {
            content {
              content {
                value
              }
            }
          }
          status {
            id
            date
            description
          }
        }
      }
    }
  }
`
