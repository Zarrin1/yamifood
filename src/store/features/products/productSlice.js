import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
   
    
  },
});

export const { actions } = productSlice;
export default productSlice.reducer;
