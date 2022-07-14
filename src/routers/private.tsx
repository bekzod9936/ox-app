import { useLocation, Navigate } from 'react-router-dom'
import { getStorageToken } from 'utils/storageToken'

interface PropsType {
  children: any
}

export const PrivateRouter = ({ children }: PropsType) => {
  const token = getStorageToken()
  const location = useLocation()

  if (!token) {
    return <Navigate to='/' state={{ from: location }} replace />
  }
  return children
}
