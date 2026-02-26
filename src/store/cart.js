import { createSlice } from "@reduxjs/toolkit";

// Load from localStorage
const storedCart = localStorage.getItem("cartItems");

const initialState = {
  items: storedCart ? JSON.parse(storedCart) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;

      const existingItem = state.items.find(
        (i) => i.id === item.id
      );

      if (!existingItem) {
        state.items.push(item);
      }

      // Save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromCart(state, action) {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;