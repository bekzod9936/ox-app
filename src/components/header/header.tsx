import { useNavigate, NavLink } from 'react-router-dom'
import { Button } from 'antd'
import { memo, useCallback } from 'react'
import { Nav, Container } from './style'

export const Header = memo(() => {
  const navigate = useNavigate()
  const handleLogOut = useCallback(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('subdomin')
    navigate('/')
  }, [])

  return (
    <Container>
      <Nav>
        <ul>
          <li>
            <NavLink
              end
              to='products'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              end
              to='search'
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              Search
            </NavLink>
          </li>
        </ul>
      </Nav>
      <Button type='primary' onClick={handleLogOut}>
        Log out
      </Button>
    </Container>
  )
})
