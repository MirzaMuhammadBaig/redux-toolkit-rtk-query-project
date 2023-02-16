import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.github.com' }),
    tagTypes: ['Post', 'User'],
    endpoints: builder => ({})
})
//http://localhost:3500