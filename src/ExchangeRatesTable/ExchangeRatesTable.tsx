import { useExchangeCurrency } from "./hook";
import "./styles.css";
import { ClipLoader } from "react-spinners";

export const ExchangeRatesTable = () => {
  const { currentDate, currenciesByName, loading, error } = useExchangeCurrency();

  if (loading) {
    return (
      <div className="loader-container">
        <ClipLoader color="#123abc" />
      </div>
    );
  }

  if(!!error) {
    return <div className="error-container">{error}</div>
  }

  return (
    <div className="container">
      <h2>Курсы валют на {currentDate}</h2>
      <table className="structure">
        <thead>
          <tr>
            <th className="header">Код</th>
            <th className="header">Название</th>
            <th className="header">Номинал</th>
            <th className="header">Текущий курс</th>
            <th className="header">Предыдущий курс</th>
            <th className="header">Разница</th>
          </tr>
        </thead>
        <tbody>
          {currenciesByName.map((currency) => (
            <tr key={currency.ID}>
              <td className="cell">{currency.CharCode}</td>
              <td className="cell">{currency.Name}</td>
              <td className="cell">{currency.Nominal}</td>
              <td className="cell">{currency.Value.toFixed(2)}</td>
              <td className="cell">{currency.Previous.toFixed(2)}</td>
              <td
                className={`cell ${
                  currency.Value > currency.Previous ? "green" : "red"
                }`}
              >
                {currency.Value > currency.Previous ? "+" : ""}
                {(currency.Value - currency.Previous).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
