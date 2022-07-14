import styled from 'styled-components'
import { device } from 'utils/device'

export const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 24px;
  align-items: center;
  justify-content: center;
  background-color: var(--gray);
`

export const Wrap = styled.div`
  width: 33%;
  padding: 24px;
  background-color: white;
  #title {
    color: var(--blue);
    text-align: center;
  }
  .lastItem {
    margin-bottom: 0;
  }
  @media (max-width: ${device.mobile}) {
    width: 100%;
  }
  @media (min-width: ${device.mobile}) and (max-width: ${device.planshet}) {
    width: 70%;
  }
`
