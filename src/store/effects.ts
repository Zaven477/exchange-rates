import { getExchangeRates } from "../api/dataExchangeRates";
import { AppDispatch } from "./configureStore";
import {
  setCurrentDate,
  setError,
  setExchangeCurrency,
  setLoading,
} from "./exchangeRatesSlice";

export const fetchDataExchangeRates = () => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(setLoading(true));

      await new Promise((resolve) => setTimeout(resolve, 2000))

      const {Valute, Date} = await getExchangeRates();
      dispatch(setExchangeCurrency(Valute));
      dispatch(setCurrentDate(Date));

      dispatch(setLoading(false));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setLoading(false));
        dispatch(setError(error.message));
      }
    }
  };
};
