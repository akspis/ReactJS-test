import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
  open: false,
};

export const cartSlice = createSlice({
  name: "cartData",
  initialState,
  reducers: {
    incrementCart: (state) => {
      state.cart += 1;
    },
    decrementCart: (state) => {
      state.cart -= 1;
    },
    openCart: (state) => {
      state.open = true;
    },
    closeCart: (state) => {
      state.open = false;
    },
  },
});

export const { incrementCart, decrementCart, openCart, closeCart } =
  cartSlice.actions;

export default cartSlice.reducer;
