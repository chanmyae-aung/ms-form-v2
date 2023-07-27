// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://159.89.194.156" }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (user) => ({
        url: "/api/user",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"],
    }),

    getUser: builder.query({
      query: () => ({
        url: "/api/user",
      }),
      providesTags: ["user"],
    }),
    updateUser: builder.mutation({
      query: (user) => ({
        url: "/api/user/update",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["user"]
    })
  }),
});

export const { useCreateUserMutation,useGetUserQuery, useUpdateUserMutation } = userApi;
