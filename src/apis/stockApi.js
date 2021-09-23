import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
require("dotenv").config();

const stockApiHeaders = {
  "x-rapidapi-host": process.env.REACT_APP_STOCK_API_HOST,
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
};

const baseUrl = process.env.REACT_APP_STOCK_API_URL;
const createRequest = (url) => ({ url, headers: stockApiHeaders });

export const stockApi = createApi({
  reducerPath: "stockApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: () => createRequest(`/any`),
    }),
    // getCryptoDetails: builder.query({
    //   query: (coinId) => createRequest(`/coin/${coinId}`),
    // }),
    // getCryptoHistory: builder.query({
    //   query: ({ coinId, timeperiod }) =>
    //     createRequest(`coin/${coinId}/history/${timeperiod}`),
    // }),
    // getExchanges: builder.query({
    //   query: () => createRequest("/exchanges"),
    // }),
  }),
});

export const {
  useGetStocksQuery,
  //   useGetCryptosQuery,
  //   useGetCryptoDetailsQuery,
  //   useGetCryptoHistoryQuery,
  //   useGetExchangesQuery,
} = stockApi;
