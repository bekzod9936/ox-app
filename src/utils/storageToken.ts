interface TokenType {
  expires_at: string
  lifetime: number
  token: string
}

export const getStorageToken = () => {
  const token: TokenType | null = JSON.parse(localStorage.getItem('token') as string)
  if (token === null) {
    return null
  }
  const date = new Date(token.expires_at)
  const expire = date.getTime() - Date.now()

  if (expire < 0) {
    localStorage.removeItem('token')
    localStorage.removeItem('subdomin')
    return null
  }

  return token.token
}
