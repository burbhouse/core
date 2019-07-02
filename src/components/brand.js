import React from 'react'
import Img from 'gatsby-image'
import { StaticQuery, graphql, Link } from 'gatsby'
import styled from 'styled-components'

export default props => {
  const Brand = styled(Link)`
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    font-size: var(--font-size-xl);
    margin-left: 1em;
    text-decoration: none;
  `

  const Logo = styled.img`
    height: 70px;
    width: auto;
    @media (max-width: 768px) {
      margin-left: -10px;
      height: 60px;
    }
  `

  return (
    <StaticQuery
      query={graphql`query BrandQuery {
        site {
          siteMetadata {
            title
            logo
          }
        }
      }`}
      render={data => (
        <Brand to='/'>
          <Logo alt={data.site.siteMetadata.title} src={data.site.siteMetadata.logo} />
        </Brand>
      )}
    />
  )
}
