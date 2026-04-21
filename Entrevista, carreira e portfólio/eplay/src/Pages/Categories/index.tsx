import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

// import Game from '../../Models/Game'
import { Game } from '../Home'

const allGames: Game[] = []

// const acao = allGames.filter((game) => game.category === 'Ação')
// const aventura = allGames.filter((game) => game.category === 'Aventura')
// const rpg = allGames.filter((game) => game.category === 'RPG')
// const esporte = allGames.filter((game) => game.category === 'Esportes')
// const luta = allGames.filter((game) => game.category === 'Luta')

const Categories = () => {
  const [acao, setAcao] = useState<Game[]>([])
  const [aventura, setAventura] = useState<Game[]>([])
  const [esportes, setEsportes] = useState<Game[]>([])
  const [simulacao, setSimulacao] = useState<Game[]>([])
  const [luta, setLuta] = useState<Game[]>([])
  const [rpg, setRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao')
      .then((response) => response.json())
      .then((data) => {
        setAcao(data)
      })
    fetch('https://api-ebac.vercel.app/api/eplay/aventura')
      .then((response) => response.json())
      .then((data) => {
        setAventura(data)
      })
    fetch('https://api-ebac.vercel.app/api/eplay/rpg')
      .then((response) => response.json())
      .then((data) => {
        setRpg(data)
      })
    fetch('https://api-ebac.vercel.app/api/eplay/esportes')
      .then((response) => response.json())
      .then((data) => {
        setEsportes(data)
      })
    fetch('https://api-ebac.vercel.app/api/eplay/luta')
      .then((response) => response.json())
      .then((data) => {
        setLuta(data)
      })
    fetch('https://api-ebac.vercel.app/api/eplay/simulacao')
      .then((response) => response.json())
      .then((data) => {
        setSimulacao(data)
      })
  }, [])

  return (
    <>
      <ProductsList title="Ação" backgroundColor="gray" games={acao} />
      <ProductsList title="Esportes" backgroundColor="black" games={esportes} />
      {/* <ProductsList title="Aventura" backgroundColor="gray" games={aventura} /> */}
      <ProductsList title="RPG" backgroundColor="gray" games={rpg} />
      <ProductsList
        title="Simulação"
        backgroundColor="black"
        games={simulacao}
      />
      <ProductsList title="Luta" backgroundColor="gray" games={luta} />
    </>
  )
}

export default Categories
