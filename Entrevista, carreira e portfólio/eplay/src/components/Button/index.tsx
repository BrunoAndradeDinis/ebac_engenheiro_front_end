import React from 'react'
import { ButtonContainer, ButtonLink } from './styles'

export type ButtonProps = {
  type: 'button' | 'link'
  buttonType?: 'button' | 'submit'
  title?: string
  to?: string
  onClick?: () => void
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
}

const Button = ({
  type,
  buttonType = 'button',
  title,
  to,
  onClick,
  children,
  variant = 'primary'
}: ButtonProps) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        type={buttonType}
        title={title}
        onClick={onClick}
        $variant={variant}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink type="link" title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
