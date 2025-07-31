import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
};

//! createAsyncThunk redux-toolkit ka function hai jo asynchronous operation ko handle karne ke liye use karte hai.
export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products"); //! yaha par fetch ke jagah par axios bhi use kar sakte hai
    const data = await res.json();
    return data;
  }
);

export const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {},
  //?extraReducers Redux Toolkit ka ek property hai jo createAsyncThunk se aaye asynchronous actions (jaise pending, fulfilled, rejected) ko handle karta hai.
  extraReducers: (builder) => {
    //Todo: builder ek object hota hai jisme .addCase() method hota hai. Ye allow karta hai har createAsyncThunk ke action ke teen stages ko handle karna:
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.contents = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default contentSlice.reducer;