interface FormType {
  _username: string
  _password: string
  _subdomain: string
}

export const fetchAuthPost = (data: FormType) =>
  fetch(`https://${data._subdomain}.ox-sys.com/security/auth_check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: `_username=${data._username}&_password=${data._password}&_subdomain=${data._subdomain}`,
  })
