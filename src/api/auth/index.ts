interface FormType {
  username: string
  password: string
  subdomain: string
}

export const fetchAuthPost = (data: FormType) =>
  fetch(`https://${data.subdomain}.ox-sys.com/security/auth_check`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
    body: Object.entries(data)
      .map((v) => `_${v[0]}=${v[1]}`)
      .join('&'),
  })
