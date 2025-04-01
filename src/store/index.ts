import { configureStore } from '@reduxjs/toolkit';
import websiteReducer from './slices/websiteSlice';
import adminReducer from './slices/adminSlice';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    website: websiteReducer,
    admin: adminReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    products: productsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 