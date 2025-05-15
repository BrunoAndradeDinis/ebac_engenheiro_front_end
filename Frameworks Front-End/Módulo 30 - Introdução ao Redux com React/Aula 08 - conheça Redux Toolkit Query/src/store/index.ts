import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

import { api } from '../services/api'

const rootReducer = {
  carrinho: carrinhoReducer,
  [api.reducerPath]: api.reducer
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type RootReducer = ReturnType<typeof store.getState>
