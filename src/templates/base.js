import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import Layout from '../components/layout'
import Hero from '../components/hero'
import Footer from '../components/footer'

export default props => {
  const Wrapper = styled.div`
    width: calc(100% - 10vmin);
    margin: 0 auto;
    padding: 5vmin 0;
  `

  return (
    <Layout location={props.location} >
      <Helmet title={`${props.title} | ${props.siteTitle}`} />
      <Hero title={props.title} image={props.heroImage} />
      <Wrapper>
        {props.children}
      </Wrapper>
      <Footer siteTitle={props.siteTitle} />
    </Layout>
  )
}
