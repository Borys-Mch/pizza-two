import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  error: null,
  status: "idle",
};

export const productsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.status = "fulfilled";
      state.products.push(action.payload);
    });
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.status = "pending";
    });
  },
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    const response = await fetch(
      "http://localhost:8080/api/products-by-categories"
    );
    const data = await response.json();
    return data;
  }
);

export const selectAllProducts = (state) => state.products;
