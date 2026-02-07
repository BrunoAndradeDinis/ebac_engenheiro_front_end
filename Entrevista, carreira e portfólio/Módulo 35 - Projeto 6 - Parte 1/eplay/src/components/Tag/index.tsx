import { TagContainer } from './styles'

export type TagProps = {
  size: 'small' | 'big'
  children: React.ReactNode
}
const Tag = ({ size = 'small', children }: TagProps) => {
  return (
    <TagContainer size={size}>
      <h2>{children}</h2>
    </TagContainer>
  )
}

export default Tag
