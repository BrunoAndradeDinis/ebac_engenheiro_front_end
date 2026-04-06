import React from 'react'
import { TagContainer } from './styles'

export type TagProps = {
  size?: 'small' | 'big'
  children: React.ReactNode
}

const Tag = ({ size = 'small', children }: TagProps) => {
  return <TagContainer size={size}>{children}</TagContainer>
}

export default Tag
