import { getStorageToken } from 'utils/storageToken'

export const fetchGetProducts = (page = 1, size = 10) => {
  const token = getStorageToken()
  const subdomin = localStorage.getItem('subdomin')

  const response = fetch(`https://${subdomin}.ox-sys.com/variations?size=${size}&page=${page}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => res.json())
  return response
}
