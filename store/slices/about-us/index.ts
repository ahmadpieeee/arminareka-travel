import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Strapi, Token } from '@/store/constants'
import qs from 'qs'

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Strapi,
    prepareHeaders: (headers) => {
      headers.set('Authorization', `Bearer ${Token}`)
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAboutData: builder.query<AboutData, void | string>({
      query: (populate = 'deep') => {
        const query = qs.stringify({
          populate: populate,
        })
        return `/about-arm?${query}`
      },
      keepUnusedDataFor: 10,
    }),
  }),
})

export const { useGetAboutDataQuery } = aboutApi
