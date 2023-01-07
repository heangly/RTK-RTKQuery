import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { productsApi } from '../features/api/productApi'
import counterReducer from '../features/counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
    [productsApi.reducerPath]: productsApi.reducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([productsApi.middleware])
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
