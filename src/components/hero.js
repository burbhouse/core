import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default props => {
  const Hero = styled.section`
    position: relative;
    background: var(--color-gray-light);
    color: var(--color-white);
  `

  const Image = styled(Img)`
    height: 31.8vh;
    max-height: 400px;
  `
  const Placeholder = styled.div`
    display: block;
    height: calc(var(--font-size-xl) * 2.8);
    background-color: var(--color-black)
  `

  const Details = styled.div`
    position: absolute;
    background: rgba(0, 0, 0, 0.8);
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    padding: 0 0.5em;
    width: 100%;
  `

  const Headline = styled.h1`
    width: calc(100% - 10vmin);
    margin: 0 auto;
    padding: 2vmin 0;
    font-size: var(--font-size-xl);
  `
  const image = props.image ? <Image alt={props.title ? props.title : ''} fluid={props.image.fluid} /> : <Placeholder />

  return (
    <Hero>
      {image}
      {props.title &&
        <Details>
          <Headline>{props.title}</Headline>
        </Details>
      }
    </Hero>
  )
}
