import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

import { IPost } from '../model/IPost';

export const postAPI = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    fetchAllPost: build.query<IPost[], number>({
      query: (limit: number = 10) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: result => ['Post']
    }),
    createPost: build.mutation<IPost, IPost>({
      query: initialPost => ({
        url: '/posts',
        method: 'POST',
        body: initialPost
      }),
      invalidatesTags: ['Post']
    }),
    updatePost: build.mutation<IPost, IPost>({
      query: initialPost => ({
        url: `/posts/${initialPost.id}`,
        method: 'PUT',
        body: initialPost
      }),
      invalidatesTags: ['Post']
    }),
    deletePost: build.mutation<IPost, IPost>({
      query: initialPost => ({
        url: `/posts/${initialPost.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post']
    })
  }),
});
