export type TExchangeCurrency = {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
};

export type TCurrency = {
  exchangeCurrency: Record<string, TExchangeCurrency>;
};

export type TCurrentDateExchange = {
  currentDate: string;
};
