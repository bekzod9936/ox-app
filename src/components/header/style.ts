import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 0 24px;
  align-items: center;
  background-color: white;
  justify-content: space-between;
`

export const Nav = styled.nav`
  ul {
    margin: 0;
    display: flex;
    align-items: center;
    list-style-type: none;
    li {
      margin-right: 20px;
      a {
        color: var(--blue);
      }
      .active {
        border-bottom: 1px solid var(--blue);
      }
    }
  }
`
