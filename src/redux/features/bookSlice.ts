import type { IBook } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  allBooks: IBook[];
}

const initialState: IInitialState = {
  allBooks: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
});

export default bookSlice.reducer;
