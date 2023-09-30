import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  productsApi,
  categoryApi,
  customersApi,
  companyApi,
} from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [customersApi.reducerPath]: customersApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoryApi.middleware,
      customersApi.middleware,
      companyApi.middleware
    ),
});
