import React from 'react'
import { Link } from 'gatsby'
import { slide as Menu } from 'react-burger-menu'
import styled from 'styled-components'
import Brand from './brand'

export default props => {
  const Header = styled.header`
    display: flex;
    position: fixed;
    z-index: 1;
    width: 90vw;
    background: var(--color-header);
    padding-right: 10vw;
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

  let menu = require(`../menu.json`)
  try {
    menu = require(`../../site/menu.json`)
  } catch (e) {
    if (e.code === 'MODULE_NOT_FOUND') {
      console.log('Site menu not found.')
    }
  }

  return (
    <div>
      <Header>
        <Brand />
        <NavList>
          {Object.keys(menu.primary).map(key => {
            return (
              <NavListItem key={`primary_${key}`}><NavLink to={key}>{menu.primary[key]}</NavLink></NavListItem>
            )
          })}
        </NavList>
      </Header>
      <Menu right {...props}>
        {Object.keys(menu.secondary).map(key => {
          return (
            <Link key={`secondary_${key}`} to={key}>{menu.secondary[key]}</Link>
          )
        })}
      </Menu>
    </div>
  )
}
