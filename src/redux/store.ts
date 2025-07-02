import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./features/bookSlice";
import borrowReducer from "./features/borrowSlice";

export const store = configureStore({
  reducer: {
    books: bookReducer,
    borrows: borrowReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
