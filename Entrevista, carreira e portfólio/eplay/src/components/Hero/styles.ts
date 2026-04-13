import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Banner = styled.div`
  height: 480px;
  display: block;
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  position: relative;

  padding-top: 16px;

  &::after {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.56);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  ${TagContainer} {
    margin-right: 8px;
  }

  .container {
    z-index: 1;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`
export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: ${colors.black};
  max-width: 290px;
  font-weight: bold;
  color: ${colors.white};
  padding: 16px;

  h2 {
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }
  span {
    text-decoration: line-through;
    display: block;
  }
`
