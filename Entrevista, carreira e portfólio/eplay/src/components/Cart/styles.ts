import styled from 'styled-components'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

import fechar from '../../assets/images/close.png'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 1;
`

export const Sidebar = styled.aside`
  background-color: ${colors.gray};
  z-index: 2;
  padding: 20px 16px 0;
  max-width: 360px;
  width: 100%;

  button {
    width: 100%;
  }
`

export const Prices = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.white};

  span {
    font-size: 12px;
    display: block;
    color: ${colors.grayLight};
  }

  margin-bottom: 24px;
`

export const Quantity = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  position: relative;

  border-bottom: 1px solid ${colors.grayLight};
  padding: 8px 0;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 24px;
  }

  h3 {
    color: ${colors.white};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    display: block;
    color: ${colors.white};
    font-weight: bold;
    font-size: 14px;
  }

  ${TagContainer} {
    margin: 8px 8px 16px 0;
  }

  button {
    background: transparent;
    background-image: url('${fechar}');
    background-repeat: no-repeat;
    background-position: center;
    width: 14px;
    height: 14px;
    border: none;
    position: absolute;
    top: 8px;
    right: 4px;
    cursor: pointer;
`
