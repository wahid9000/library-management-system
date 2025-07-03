import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";
import borrowReducer from "./features/borrowSlice";
import { bookApi } from "./api/bookApi";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    borrows: borrowReducer,

    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
