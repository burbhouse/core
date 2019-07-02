import React from 'react'
import Header from './header'
import styled from 'styled-components'

export default props => {
  const App = styled.div`
    height: 100vh;
  `
  const Wrapper = styled.div`
    overflow: auto;
    max-width: 1180px;
    margin: 0 auto;
    position: relative;
    top: 8em;
    background: var(--color-white);
    @media (max-width: 1180px) {
      top: 5.5em;
    }
  `

  return (
    <App id='App'>
      <Header pageWrapId={'page-wrap'} outerContainerId={'App'} />
      <Wrapper id={'page-wrap'}>
        {props.children}
      </Wrapper>
    </App>
  )
}
