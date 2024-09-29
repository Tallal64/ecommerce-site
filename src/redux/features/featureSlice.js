import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartId: undefined,
  cartValue: 0,
};

export const featureSlice = createSlice({
  name: "feature",
  initialState,
  reducers: {
    setCartId: (state, actions) => {
      state.cartId = actions.payload;
    },
    setCartValue: (state) => {
      state.cartValue += 1;
    },
  },
});

export const { setCartId, setCartValue } = featureSlice.actions;

export default featureSlice.reducer;
