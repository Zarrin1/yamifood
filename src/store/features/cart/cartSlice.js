import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      state.cartItems = [...state.cartItems, newItem];
      state.totalAmount += newItem.price * newItem.quantity;
    },

    deleteItem: (state, action) => {
      const itemIdDelete = action.payload;
      const itemToDelete = state.cartItems.find(
        (item) => item.id === itemIdDelete
      );

      if (itemToDelete) {
        state.totalAmount -= itemToDelete.price * itemToDelete.quantity; // уменьшаем общую сумму
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== itemIdDelete
        );
      }
    },

    deleteItemsAll: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },

    increaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item) {
        item.quantity += 1;
        state.totalAmount += item.price; // увеличиваем общую сумму
      }
    },

    decreaseQuantity: (state, action) => {
      const itemId = action.payload;
      const item = state.cartItems.find((item) => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalAmount -= item.price; // уменьшаем общую сумму
      }
    },
  },
});

export const {
  addItem,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  deleteItemsAll,
} = cartSlice.actions;
export default cartSlice.reducer;
