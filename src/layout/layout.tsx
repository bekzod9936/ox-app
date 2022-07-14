import { Header } from 'components/header'
import { Outlet } from 'react-router-dom'
import { Main } from './style'

export const Layout = () => (
  <>
    <Header />
    <Main>
      <Outlet />
    </Main>
  </>
)
