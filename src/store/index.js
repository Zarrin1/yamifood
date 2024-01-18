import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import typeReducer from "./features/type/TypeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    tabs: typeReducer,
  },
});
