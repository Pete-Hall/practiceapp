import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// replaces axios
// interact with api

// Define our single API slice object
export const apiSlice = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with '/fakeApi'
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5001' }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // The `getPosts` endpoint is a "query" operation that returns data
    getErrors: builder.query({
      // The URL for the request is '/fakeApi/posts'
      query: () => '/api/getErrors'
    }),
    getSingleError: builder.query({
      query: (errorID) => `/api/getSingleError/${errorID}`
    })
  })
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetErrorsQuery, useGetSingleErrorQuery } = apiSlice;