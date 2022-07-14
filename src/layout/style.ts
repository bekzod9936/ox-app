import { device } from 'utils/device'
import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  flex-grow: 1;
  overflow: hidden;
  padding: 24px 24px;
  height: calc(100% - 80px);
  background-color: var(--gray);
  @media (max-width: ${device.mobile}) {
    height: 100%;
  }
`
