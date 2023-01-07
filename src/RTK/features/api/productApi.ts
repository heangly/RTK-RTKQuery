import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: (build) => ({
    getProducts: build.query<Product[], void>({
      query: () => 'products'
    })
  })
})

export const { useGetProductsQuery } = productsApi
