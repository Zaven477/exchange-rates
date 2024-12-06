import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchDataExchangeRates } from "../store/effects";
import { convertDate } from "../utils";

export const useExchangeCurrency = () => {
  const loading = useAppSelector((state) => state.valute.loading);
  const error = useAppSelector((state) => state.valute.error);
  const date = useAppSelector((state) => state.valute.currentDate);
  const currencies = useAppSelector((state) => state.valute.exchangeCurrency);
  const currenciesByName = Object.values(currencies)
  const currentDate = convertDate(date)

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchDataExchangeRates());
  }, [dispatch]);

  return { loading, error, currentDate, currenciesByName };
};
