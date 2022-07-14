import { fetchAuthPost } from 'api/auth'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Form, message } from 'antd'
import { useEffect } from 'react'
import { getStorageToken } from 'utils/storageToken'

interface FormType {
  username: string
  password: string
  subdomain: string
}

export const useAuth = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const token = getStorageToken()

  const { isLoading, mutateAsync } = useMutation(fetchAuthPost)

  useEffect(() => {
    if (token) {
      navigate('/app/products')
    }
  }, [])

  const onFinish = async (values: FormType) => {
    mutateAsync(values)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`${response.status} ${response.statusText}`)
      })
      .then(async (res) => {
        await localStorage.setItem('subdomin', form.getFieldValue('subdomain'))
        await localStorage.setItem('token', JSON.stringify(res))
        await navigate('/app/products')
        await form.resetFields()
        await message.success('Successfully authorized !!!')
      })
      .catch((error) => {
        message.error(error.message)
      })
  }

  return {
    form,
    onFinish,
    isLoading,
  }
}
