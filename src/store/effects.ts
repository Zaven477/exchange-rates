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

      const { currency, Date } = await getExchangeRates();
      dispatch(setExchangeCurrency(currency));
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
