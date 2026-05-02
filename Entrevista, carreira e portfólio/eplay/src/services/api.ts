import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Game } from '../Pages/Home'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-ebac.vercel.app/api/eplay'
  }),
  endpoints: (builder) => ({
    getFeaturedGame: builder.query<Game, void>({
      query: () => 'destaque'
    }),
    getOnSale: builder.query<Game[], void>({
      query: () => 'promocoes'
    }),
    getSoon: builder.query<Game[], void>({
      query: () => 'em-breve'
    }),
    getActionGames: builder.query<Game[], void>({
      query: () => 'acao'
    }),
    getAdventureGames: builder.query<Game[], void>({
      query: () => 'aventura'
    }),
    getRpgGames: builder.query<Game[], void>({
      query: () => 'rpg'
    }),
    getSportsGames: builder.query<Game[], void>({
      query: () => 'esportes'
    }),
    getFightingGames: builder.query<Game[], void>({
      query: () => 'luta'
    }),
    getSimulationGames: builder.query<Game[], void>({
      query: () => 'simulacao'
    }),
    getProductById: builder.query<Game, string>({
      query: (id) => `jogos/${id}`
    })
  })
})

export const {
  useGetFeaturedGameQuery,
  useGetOnSaleQuery,
  useGetSoonQuery,
  useGetActionGamesQuery,
  useGetAdventureGamesQuery,
  useGetRpgGamesQuery,
  useGetSportsGamesQuery,
  useGetFightingGamesQuery,
  useGetSimulationGamesQuery,
  useGetProductByIdQuery
} = api

/*
 useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/eplay/jogos/${id}`)
      .then((response) => response.json())
      .then((data) => setGame(data))
  }, [id])
  */
