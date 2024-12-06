import { createSlice } from "@reduxjs/toolkit";
import { TCurrency, TCurrentDateExchange } from "./types";

const initialState: TCurrency &
  TCurrentDateExchange & { loading: boolean; error: null | string } = {
  exchangeCurrency: {},
  currentDate: "",
  loading: false,
  error: null,
};

const exchangeRatesSlice = createSlice({
  name: "rates",
  initialState,
  reducers: {
    setExchangeCurrency: (state, { payload }) => {
      state.exchangeCurrency = payload;
    },
    setCurrentDate: (state, { payload }) => {
      state.currentDate = payload;
    },
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setExchangeCurrency, setCurrentDate, setLoading, setError } =
  exchangeRatesSlice.actions;

export default exchangeRatesSlice.reducer;
