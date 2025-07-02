import type { IBorrow } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  borrowSummary: IBorrow[];
}

const initialState: IInitialState = {
  borrowSummary: [],
};

export const borrowSlice = createSlice({
  name: "borrow",
  initialState,
  reducers: {},
});

export default borrowSlice.reducer;
