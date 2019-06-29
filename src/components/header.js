import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'

export default props => {
  const Header = styled.header`
    display: flex;
    position: fixed;
    z-index: 1;
    width: 90vw;
    background: var(--color-white);
    padding-right: 10vw;
  `

  const Brand = styled.aside`
    display: inline-flex;
    flex-grow: 1;
    align-items: center;
    font-size: var(--font-size-xl);
    margin-left: 1em;
  `

  const NavList = styled.ul`
    display: inline-flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 15vh;
    max-height: 90px;
    font-size: var(--font-size-lg);
  `

  const NavListItem = styled.li`
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
  `

  return (
    <div>
      <Header>
        <StaticQuery
          query={graphql`query HeadingQuery { site { siteMetadata { title } } }`}
          render={data => (<Brand>{data.site.siteMetadata.title}</Brand>)}
        />
        <NavList>
          <NavListItem><Link to='/'>Home</Link></NavListItem>
          <NavListItem><Link to='/events/'>Events</Link></NavListItem>
          <NavListItem><Link to='/news/'>News</Link></NavListItem>
          <NavListItem><Link to='/contact/'>Contact</Link></NavListItem>
        </NavList>
      </Header>
      <Menu right {...props}>
        <Link to='/'>Home</Link>
        <Link to='/association/'>Association</Link>
        <Link to='/board/'>Board</Link>
        <Link to='/dock/'>Dock</Link>
        <Link to='/projects/'>Projects</Link>
        <Link to='/events/'>Events</Link>
        <Link to='/news/'>News</Link>
        <Link to='/contact/'>Contact</Link>
      </Menu>
    </div>
  )
}
