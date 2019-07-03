import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

export default props => {
  const Footer = styled.footer`
    display: flex;
    z-index: 1;
    width: calc(100% - 8vmin);
    background: var(--color-footer);
    padding: 0 4vmin;
    margin: 0;
  `

  const NavList = styled.ul`
    display: inline-flex;
    justify-content: left;
    flex-grow: 1;
    list-style: none;
    padding: 0;
    margin: 0;
    height: 15vh;
    max-height: 120px;
    font-size: var(--font-size-sm);
    @media (max-width: 768px) {
      visibility: hidden;
    }
  `

  const NavListItem = styled.li`
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
  `

  const NavLink = styled(Link)`
    color: var(--color-menu-link-primary);
    text-decoration: none;
    &:hover {
      color: var(--color-menu-link-primary-hover);
      border-bottom: solid 2px var(--color-menu-link-primary-hover);
      margin-bottom: -2px;
    }
  `

  const Legal = styled.p`
    display: inline-flex;
    align-items: center;
    margin: 0 1em;
    font-size: var(--font-size-sm);
    text-align: right;
  `

  let menu = require(`../menu.json`)
  try {
    menu = require(`../../site/menu.json`)
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log('Site menu not found.')
    }
  }

  const legal = ``
  return (
    <Footer>
      <NavList>
        {Object.keys(menu.tertiary).map(key => {
          return (
            <NavListItem key={`primary_${key}`}>
              <NavLink to={key}>{menu.tertiary[key]}</NavLink>
            </NavListItem>
          )
        })}
      </NavList>
      <Legal>
        Copyright {(new Date()).getFullYear()} {props.siteTitle}
        &nbsp;|&nbsp;
        <a href='https://www.davidcabrera.me'>Site by David Cabrera</a>
      </Legal>
    </Footer>
  )
}
