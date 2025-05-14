import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './reducers/carrinho'

const rootReducer = {
  carrinho: carrinhoReducer
}

export const store = configureStore({
  reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type RootReducer = ReturnType<typeof store.getState>
