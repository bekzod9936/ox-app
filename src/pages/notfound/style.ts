import styled from 'styled-components'
import { device } from 'utils/device'

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: var(--gray);
`

export const Wrapper = styled.div`
  width: 33%;
  height: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  .title {
    font-size: 120px;
    margin-bottom: 0;
  }
  @media (max-width: ${device.mobile}) {
    width: 100%;
    .title {
      font-size: 80px;
    }
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    width: 70%;
    .title {
      font-size: 100px;
    }
  }
`

export const SubTitle = styled.p`
  font-size: 24px;
  color: var(--blue);
  margin-bottom: 0;
  @media (max-width: ${device.mobile}) {
    font-size: 18px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 22px;
  }
`

export const Text = styled.p`
  font-size: 20px;
  color: var(--blue);
  margin-bottom: 20px;
  @media (max-width: ${device.mobile}) {
    font-size: 16px;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    font-size: 18px;
  }
`
