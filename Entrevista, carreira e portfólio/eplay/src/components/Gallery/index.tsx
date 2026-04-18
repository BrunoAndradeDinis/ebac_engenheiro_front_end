import Section from '../Section'
import hogwarts from '../../assets/images/Hogwarts_Legacy.jpg'
import zoom from '../../assets/images/mais-zoom.png'
import play from '../../assets/images/botao-play.png'
import zelda from '../../assets/images/zelda.png'
import fechar from '../../assets/images/close.png'
import { Action, Item, List, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

type GalleryProps = {
  defaultCover: string
  name: string
}

const mock: GalleryItem[] = [
  { type: 'image', url: zelda },
  {
    type: 'image',
    url: hogwarts
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/sP6TfjupEJg?si=ZACF1CQ1mOgEjKsB'
  }
]

const Gallery = ({ defaultCover, name }: GalleryProps) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title={`Galeria`} backgroundColor="black">
        <List>
          {mock.map((item, index) => (
            <Item key={index}>
              <img
                src={getMediaCover(item)}
                alt={`Media ${index + 1} de ${name}`}
                title={`Media ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(item)}
                  alt={item.type === 'image' ? 'Zoom' : 'Play'}
                  title={`Media ${index + 1} de ${name}`}
                />
              </Action>
            </Item>
          ))}
        </List>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Fechar- Ícone de fechar" />
          </header>
          <img src={hogwarts} alt="hogwarts" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
