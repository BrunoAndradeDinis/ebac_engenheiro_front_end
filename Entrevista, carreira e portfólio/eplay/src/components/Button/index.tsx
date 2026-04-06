import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

type ButtonProps = {
  type: 'button' | 'link'
  title?: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
}

const Button = ({ type, title, to, onClick, children }: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  } else {
    return (
      <ButtonLink type="link" title={title} to={to as string}>
        {children}
      </ButtonLink>
    )
  }
}

export default Button
