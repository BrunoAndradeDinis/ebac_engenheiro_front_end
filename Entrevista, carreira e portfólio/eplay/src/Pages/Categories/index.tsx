import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import zelda from '../../assets/images/zelda.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import hogwarts from '../../assets/images/Hogwarts_Legacy.jpg'
import spiderman from '../../assets/images/Spider-Man_Miles_Morales.png'
import streetfighter from '../../assets/images/Street_Fighter_6.jpg'
import fifa from '../../assets/images/fifa.jpg'

import Game from '../../Models/Game'

const allGames: Game[] = [
  {
    id: 1,
    category: 'RPG',
    description:
      'Hogwarts Legacy é um jogo eletrônico de RPG de ação desenvolvido pela Avalanche.',
    title: 'Hogwarts Legacy',
    system: 'PC',
    infos: ['10%', 'R$ 152,10'],
    image: hogwarts
  },
  {
    id: 2,
    category: 'Ação',
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo de survival horror.',
    title: 'Resident Evil 4',
    system: 'PC',
    infos: ['10%', 'R$ 134,91'],
    image: resident
  },
  {
    id: 3,
    category: 'Ação',
    description:
      'Spider Man: Miles Morales é um jogo eletrônico de ação desenvolvido pela Insomniac.',
    title: 'Spider Man: Miles Morales',
    system: 'PC',
    infos: ['10%', 'R$ 190,12'],
    image: spiderman
  },
  {
    id: 4,
    category: 'Esportes',
    description:
      'Fifa 23 é um jogo eletrônico de futebol desenvolvido pela EA Vancouver.',
    title: 'Fifa 23',
    system: 'PC',
    infos: ['10%', 'R$ 134,91'],
    image: fifa
  },
  {
    id: 5,
    category: 'Aventura',
    description:
      'The Legend of Zelda: Tears of the Kingdom é um jogo eletrônico de ação e aventura.',
    title: 'The Legend of Zelda',
    system: 'Switch',
    infos: ['17/08'],
    image: zelda
  },
  {
    id: 6,
    category: 'Luta',
    description:
      'Street Fighter 6 é um jogo de luta desenvolvido pela Capcom e publicado pela Capcom.',
    title: 'Street Fighter 6',
    system: 'PS4/PS5',
    infos: ['29/09'],
    image: streetfighter
  },
  {
    id: 7,
    category: 'RPG',
    description:
      'Diablo IV é um jogo eletrônico de RPG de ação desenvolvido e publicado pela Blizzard.',
    title: 'Diablo 4',
    system: 'PC',
    infos: ['24/11'],
    image: diablo
  },
  {
    id: 8,
    category: 'Aventura',
    description:
      'Star Wars é uma franquia de mídia americana criada por George Lucas.',
    title: 'Star Wars',
    system: 'Switch',
    infos: ['17/08'],
    image: starWars
  }
]

const acao = allGames.filter((game) => game.category === 'Ação')
const aventura = allGames.filter((game) => game.category === 'Aventura')
const rpg = allGames.filter((game) => game.category === 'RPG')
const esporte = allGames.filter((game) => game.category === 'Esportes')
const luta = allGames.filter((game) => game.category === 'Luta')

const Categories = () => {
  return (
    <>
      <ProductsList title="Ação" backgroundColor="gray" games={acao} />
      <ProductsList title="Aventura" backgroundColor="black" games={aventura} />
      <ProductsList title="RPG" backgroundColor="gray" games={rpg} />
      <ProductsList title="Esporte" backgroundColor="black" games={esporte} />
      <ProductsList title="Luta" backgroundColor="gray" games={luta} />
    </>
  )
}

export default Categories
