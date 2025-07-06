import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
  reducerPath: "borrowApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-system-lemon-sigma.vercel.app/api",
  }),
  tagTypes: ["borrow"],
  endpoints: (builder) => ({
    getBorrowSummary: builder.query({
      query: () => "/borrow",
      providesTags: ["borrow"],
    }),
    createBorrow: builder.mutation({
      query: (borrowsData) => ({
        url: "/borrow",
        method: "POST",
        body: borrowsData,
      }),
      invalidatesTags: ["borrow"],
    }),
  }),
});

export const { useGetBorrowSummaryQuery, useCreateBorrowMutation } = borrowApi;
