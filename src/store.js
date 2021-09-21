import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "./apis/cryptoApi";
import { cryptoNewsApi } from "./apis/cryptoNewsApi";

const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
  },
});

export default store;
