import { fetchAuthPost } from 'api/auth'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Form, message } from 'antd'

interface FormType {
  _username: string
  _password: string
  _subdomain: string
}

export const useAuth = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { isLoading, mutateAsync } = useMutation(fetchAuthPost)
  const onFinish = async (values: FormType) =>
    mutateAsync(values)
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(`${response.status} ${response.statusText}`)
      })
      .then(async (res) => {
        await localStorage.setItem('subdomin', form.getFieldValue('_subdomain'))
        await localStorage.setItem('token', JSON.stringify(res))
        await navigate('/app')
        await form.resetFields()
        await message.success('Successfully authorized !!!')
      })
      .catch((error) => {
        message.error(error.message)
      })

  return {
    form,
    onFinish,
    isLoading,
  }
}
