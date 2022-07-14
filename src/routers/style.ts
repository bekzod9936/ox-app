import styled from 'styled-components'
import { device } from 'utils/device'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  @media (max-width: ${device.mobile}) {
    overflow-y: auto;
    ::-webkit-scrollbar-track {
      background-image: linear-gradient(to bottom, white, var(--gray) 80px);
    }

    ::-webkit-scrollbar {
      background-image: linear-gradient(to bottom, white, var(--gray) 80px);
    }
  }
`

export const WrapSpin = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`
