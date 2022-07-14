import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'
import { Text, Main, SubTitle, Wrapper } from './style'

export const NotfoundPage = () => {
  const navigate = useNavigate()
  return (
    <Main>
      <Wrapper>
        <h1 className='title'>404</h1>
        <SubTitle>Ooops</SubTitle>
        <Text>The page not found</Text>
        <Button type='primary' onClick={() => navigate(-1)}>
          Go Back
        </Button>
      </Wrapper>
    </Main>
  )
}
