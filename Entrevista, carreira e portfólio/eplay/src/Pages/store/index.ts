import { configureStore } from '@reduxjs/toolkit'

import { api } from '../../services/api'
import cartReducer from './reducers/cart'

export type RootReducer = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})
