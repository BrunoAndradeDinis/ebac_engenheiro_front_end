import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'
import { useEffect, useState } from 'react'

// import Game from '../../Models/Game'
// import resident from '../../assets/images/resident.png'
// import zelda from '../../assets/images/zelda.png'
// import diablo from '../../assets/images/diablo.png'
// import starWars from '../../assets/images/star_wars.png'
// import hogwarts from '../../assets/images/Hogwarts_Legacy.jpg'
// import spiderman from '../../assets/images/Spider-Man_Miles_Morales.png'
// import streetfighter from '../../assets/images/Street_Fighter_6.jpg'
// import fifa from '../../assets/images/fifa.jpg'

// const promocoes: Game[] = [
//   {
//     id: 1,
//     category: 'RPG',
//     description:
//       'Hogwarts Legacy é um jogo eletrônico de RPG de ação desenvolvido pela Avalanche.',
//     title: 'Hogwarts Legacy',
//     system: 'PC',
//     infos: ['10%', 'R$ 152,10'],
//     image: hogwarts
//   },
//   {
//     id: 2,
//     category: 'Ação',
//     description:
//       'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror.',
//     title: 'Resident Evil 4',
//     system: 'PC',
//     infos: ['10%', 'R$ 134,91'],
//     image: resident
//   },
//   {
//     id: 3,
//     category: 'Ação',
//     description:
//       'Spider Man: Miles Morales é um jogo eletrônico de ação desenvolvido pela Insomniac.',
//     title: 'Spider Man: Miles Morales',
//     system: 'PC',
//     infos: ['10%', 'R$ 190,12'],
//     image: spiderman
//   },
//   {
//     id: 4,
//     category: 'Esportes',
//     description:
//       'Fifa 23 é um jogo eletrônico de futebol desenvolvido pela EA Vancouver.',
//     title: 'Fifa 23',
//     system: 'PC',
//     infos: ['10%', 'R$ 134,91'],
//     image: fifa
//   }
// ]

// const emBreve: Game[] = [
//   {
//     id: 5,
//     category: 'Aventura',
//     description:
//       'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura.',
//     title: 'The Legend of Zelda',
//     system: 'Switch',
//     infos: ['17/08'],
//     image: zelda
//   },
//   {
//     id: 6,
//     category: 'Luta',
//     description:
//       'Street Fighter 6 é um jogo de luta desenvolvido pela Capcom e publicado pela Capcom.',
//     title: 'Street Fighter 6',
//     system: 'PS4/PS5',
//     infos: ['29/09'],
//     image: streetfighter
//   },
//   {
//     id: 7,
//     category: 'RPG',
//     description:
//       'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard.',
//     title: 'Diablo 4',
//     system: 'PC',
//     infos: ['24/11'],
//     image: diablo
//   },
//   {
//     id: 8,
//     category: 'Aventura',
//     description:
//       'Star Wars é uma franquia de mídia americana criada por George Lucas.',
//     title: 'Star Wars',
//     system: 'Switch',
//     infos: ['17/08'],
//     image: starWars
//   }
// ]

export interface IGalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    language: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: IGalleryItem[]
  }
}

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([])
  const [emBreve, setEmBreve] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/promocoes')
      .then((response) => response.json())
      .then((data) => {
        setPromocoes(data)
      })

    fetch('https://api-ebac.vercel.app/api/eplay/em-breve')
      .then((response) => response.json())
      .then((data) => {
        setEmBreve(data)
      })
  }, [])
  return (
    <>
      <Banner />
      <ProductsList
        title="Promoções"
        backgroundColor="gray"
        games={promocoes}
      />
      <ProductsList title="Em breve" backgroundColor="black" games={emBreve} />
    </>
  )
}

export default Home
