import { Button, Form, Input } from 'antd'
import { Wrap, Main } from './style'
import { useAuth } from './useAuth'

export const AuthPage = () => {
  const { form, onFinish, isLoading } = useAuth()

  return (
    <Main>
      <Wrap>
        <h3 id='title'>Ox System</h3>
        <Form
          layout='vertical'
          form={form}
          name='basic'
          initialValues={{
            remember: true,
          }}
          autoComplete='off'
          onFinish={onFinish}
        >
          <Form.Item
            label='Username'
            name='username'
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='Password'
            name='password'
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password autoComplete='on' />
          </Form.Item>
          <Form.Item
            label='Subdomain'
            name='subdomain'
            rules={[
              {
                required: true,
                message: 'Please input your subdomain!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item className='lastItem'>
            <Button loading={isLoading} type='primary' htmlType='submit'>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Wrap>
    </Main>
  )
}
