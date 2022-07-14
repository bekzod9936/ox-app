import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Spin } from 'antd'
import { getStorageToken } from 'utils/storageToken'
import { WrapSpin, Container } from './style'
import { PrivateRouter } from './private'

const Layout = lazy(() => import('layout').then((module) => ({ default: module.Layout })))

const Auth = lazy(() => import('pages/auth').then((module) => ({ default: module.AuthPage })))
const Products = lazy(() =>
  import('pages/products').then((module) => ({ default: module.ProductsPage })),
)
const Search = lazy(() => import('pages/search').then((module) => ({ default: module.SearchPage })))
const NotFound = lazy(() =>
  import('pages/notfound').then((module) => ({ default: module.NotfoundPage })),
)

export const Routers = () => {
  const token = getStorageToken()
  return (
    <Container>
      <Suspense
        fallback={
          <WrapSpin>
            <Spin />
          </WrapSpin>
        }
      >
        <Routes>
          <Route path='/' element={token ? <Navigate to='/app/products' replace /> : <Auth />} />
          <Route
            path='/app'
            element={
              <PrivateRouter>
                <Layout />
              </PrivateRouter>
            }
          >
            <Route path='products' element={<Products />} />
            <Route path='search' element={<Search />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </Container>
  )
}
