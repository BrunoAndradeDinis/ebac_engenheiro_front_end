import Section from '../Section'
import zoom from '../../assets/images/mais-zoom.png'
import play from '../../assets/images/botao-play.png'
import fechar from '../../assets/images/close.png'
import { Action, Item, List, Modal, ModalContent } from './styles'
import { useState } from 'react'
import { IGalleryItem } from '../../Pages/Home'

type GalleryProps = {
  defaultCover: string
  name: string
  items?: IGalleryItem[]
}

interface IModalState extends IGalleryItem {
  isVisible: boolean
}

// const mock: IGalleryItem[] = [
//   { type: 'image', url: zelda },
//   {
//     type: 'image',
//     url: hogwarts
//   },
//   {
//     type: 'video',
//     url: 'https://www.youtube.com/embed/sP6TfjupEJg?si=ZACF1CQ1mOgEjKsB'
//   }
// ]

const Gallery = ({ defaultCover, name, items }: GalleryProps) => {
  const [modalState, setModalState] = useState<IModalState>({
    type: 'image',
    url: '',
    isVisible: false
  })

  const getMediaCover = (item: IGalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: IGalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  const closeModal = () => {
    setModalState((prevState) => ({
      ...prevState,
      isVisible: false
    }))
  }

  return (
    <>
      <Section title={`Galeria`} backgroundColor="black">
        <List>
          {items?.map((item, index) => (
            <Item
              key={index}
              onClick={() => {
                setModalState({
                  type: item.type,
                  url: item.url,
                  isVisible: true
                })
              }}
            >
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
      <Modal className={modalState.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img
              src={fechar}
              alt="Fechar- Ícone de fechar"
              onClick={closeModal}
            />
          </header>
          {modalState.type === 'image' ? (
            <img src={modalState.url} alt="Media" />
          ) : (
            <iframe
              src={modalState.url}
              title="Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              frameBorder={0}
              allowFullScreen
            />
          )}
        </ModalContent>
        <div className="overlay" onClick={closeModal}></div>
      </Modal>
    </>
  )
}

export default Gallery
