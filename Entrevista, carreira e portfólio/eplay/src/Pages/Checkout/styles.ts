import styled from 'styled-components'
import { colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};
  align-items: flex-end;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    display: block;
    margin-bottom: 8px;
  }

  input,
  select {
    background-color: ${colors.white};
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    width: 100%;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  font-size: 14px;
  font-weight: bold;
  height: 32px;
  background-color: ${(props) =>
    props.isActive ? colors.green : colors.black};
  color: ${colors.white};
  border-radius: 8px;
  border: 1px solid ${(props) => (props.isActive ? colors.green : colors.black)};
  margin: 24px 16px 24px 0;
  padding: 0 8px;

  img {
    margin-right: 8px;
  }

  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  cursor: pointer;

  &:hover {
    border-color: ${colors.green};
  }
`
