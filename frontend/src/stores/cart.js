import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (item) => item.productId === productId
      );
      if (indexProductId >= 0) {
        state.items[indexProductId].quantity += quantity;
      } else {
        state.items.push({ productId, quantity });
      }
    },
    changeQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const indexProductId = state.items.findIndex(
        (p) => p.productId === productId
      );
      if (quantity > 0) {
        state.items[indexProductId].quantity = quantity;
      } else {
        state.items = state.items.filter((p) => p.productId !== productId);
      }
    },

    deleteProduct: (state, action) => {
      const { productId } = action.payload;

      state.items = state.items.filter((p) => p.productId !== productId);
    },
  },
});
export const { addToCart, changeQuantity, deleteProduct } = cartSlice.actions;
export default cartSlice.reducer;
