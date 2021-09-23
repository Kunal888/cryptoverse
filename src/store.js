import { configureStore } from "@reduxjs/toolkit";
import { stockApi } from "./apis/stockApi";
import { cryptoApi } from "./apis/cryptoApi";
import { cryptoNewsApi } from "./apis/cryptoNewsApi";

const store = configureStore({
  reducer: {
    [stockApi.reducerPath]: stockApi.reducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});

export default store;
