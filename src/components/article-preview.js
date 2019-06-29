import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

export default ({ article }) => {
  const Preview = styled.div``

  const Title = styled.h3`
    font-size: 1.5em;
  `
  const Tag = styled.p`
    color: #A0A0A0;
    text-decoration: none;
    display: inline-block;
    padding: .33333rem .5rem;
    line-height: 1;
    border-radius: 2px;
    border: 1px solid #A0A0A0;
    margin-right: .5em;
  `

  return (
    <Preview>
      <Link to={`/news/${article.slug}`}>
        <Img alt='' fluid={article.heroImage.fluid} />
      </Link>
      <Title>
        <Link to={`/news/${article.slug}`}>{article.title}</Link>
      </Title>
      <p>{article.publishDate}</p>
      {article.tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Preview>
  )
}
