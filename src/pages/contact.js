import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Page from '../templates/page'

export default props => {
  const email = get(props, 'data.site.siteMetadata.email')
  return (
    <Page location={props.location} {...props}>
      <h2 className='section-headline'>Get in Touch</h2>
      <form action={`https://formspree.io/${email}`} method='POST'>
        <fieldset className='name'>
          <legend>Name</legend>
          <p>
            <input type='text' name='nameFirst' />
            <label htmlFor='nameFirst'>First</label>
          </p>
          <p>
            <input type='text' name='nameLast' />
            <label htmlFor='nameLast'>Last</label>
          </p>
        </fieldset>
        <p>
          <label htmlFor='email'>Email</label>
          <input type='email' name='_replyto' />
        </p>
        <p>
          <label htmlFor='phone'>Phone</label>
          <input type='tel' name='phone' pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}' placeholder='561-555-1234' />
        </p>
        <p>
          <label htmlFor='message'>Message</label>
          <textarea name='message' rows='4' />
        </p>
        <input type='submit' value='Send Message' />
      </form>
    </Page>
  )
}

export const pageQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        email
      }
    }
    contentfulPage(slug: { eq: "contact" }) {
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
