import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["book"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
      providesTags: ["book"],
    }),
    getBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    createBooks: builder.mutation({
      query: (booksData) => ({
        url: "/books",
        method: "POST",
        body: booksData,
      }),
      invalidatesTags: ["book"],
    }),
    updateBook: builder.mutation({
      query: ({ id, booksData }) => ({
        url: `/books/${id}`,
        method: "PUT",
        body: booksData,
      }),
      invalidatesTags: ["book"],
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useCreateBooksMutation,
  useGetBookQuery,
  useUpdateBookMutation,
  useDeleteBookMutation
} = bookApi;
