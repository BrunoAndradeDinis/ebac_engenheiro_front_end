import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetAdventureGamesQuery,
  useGetRpgGamesQuery,
  useGetSportsGamesQuery,
  useGetFightingGamesQuery,
  useGetSimulationGamesQuery
} from '../../services/api'

// import Game from '../../Models/Game'
import { Game } from '../Home'

const allGames: Game[] = []

// const acao = allGames.filter((game) => game.category === 'Ação')
// const aventura = allGames.filter((game) => game.category === 'Aventura')
// const rpg = allGames.filter((game) => game.category === 'RPG')
// const esporte = allGames.filter((game) => game.category === 'Esportes')
// const luta = allGames.filter((game) => game.category === 'Luta')

const Categories = () => {
  const { data: acao } = useGetActionGamesQuery()
  const { data: aventura } = useGetAdventureGamesQuery()
  const { data: rpg } = useGetRpgGamesQuery()
  const { data: esportes } = useGetSportsGamesQuery()
  const { data: luta } = useGetFightingGamesQuery()
  const { data: simulacao } = useGetSimulationGamesQuery()

  if (acao || aventura || rpg || esportes || luta || simulacao) {
    return (
      <>
        <ProductsList
          title="Ação"
          backgroundColor="gray"
          games={acao || []}
          id="action"
        />
        <ProductsList
          title="Esportes"
          backgroundColor="black"
          games={esportes || []}
          id="sports"
        />
        {/* <ProductsList title="Aventura" backgroundColor="gray" games={aventura} /> */}
        <ProductsList
          title="RPG"
          backgroundColor="gray"
          games={rpg || []}
          id="rpg"
        />
        <ProductsList
          title="Simulação"
          backgroundColor="black"
          games={simulacao || []}
          id="simulation"
        />
        <ProductsList
          title="Luta"
          backgroundColor="gray"
          games={luta || []}
          id="fight"
        />
      </>
    )
  }

  return (
    <>
      <h3>Carregando...</h3>
    </>
  )
}

export default Categories
