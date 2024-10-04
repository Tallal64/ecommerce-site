import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: undefined,
  cartValue: 0,
  cartItems: [],
};

export const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setCartId: (state, actions) => {
      state.cartId = actions.payload;
    },

    addToCart: (state, actions) => {
      const existingProduct = state.cartItems.find(
        (item) => item.id === actions.payload.id
      );
      if (!existingProduct) {
        state.cartItems.push(actions.payload);
        state.cartValue += 1;
      } else {
        existingProduct.quantity += 1;
      }
    },

    deleteFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      state.cartValue -= 1;
    },
  },
});

export const { setCartId, addToCart, deleteFromCart } = featureSlice.actions;

export default featureSlice.reducer;
