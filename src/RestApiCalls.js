//Load the Latest Quote of the organization data
export const loadLatestQuote = symbol => {
  return fetch("https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=" + symbol + "&interval=5min&outputsize=full&apikey=TSWQZ2043OGTV4T8").then(res => res.json());
};

//Load the company profile data
export const getCompanyProfile = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/company/profile/" + symbol + "?apikey=5696dbf21c11c436193231d0a30f538f").then(res => res.json());
};

//Load the Company Logo
export const logo = symbol => {
  return fetch("https://cloud.iexapis.com/v1/stock/" + symbol + "/logo?token=pk_409c638849f940088c57402f6c9d49ad ").then(res => res.json());
};

//Load the Sector Performance data
export const sector_perf = () => {
  return fetch("https://financialmodelingprep.com/api/v3/stock/sectors-performance?apikey=5696dbf21c11c436193231d0a30f538f").then(res => res.json());
};

export const trending_now = () => {
  return fetch("https://financialmodelingprep.com/api/v3/actives?apikey=5696dbf21c11c436193231d0a30f538f").then(res => res.json());
};

//Load the symbols and company data
export const symbols_company = () => {
  return fetch("https://api.iextrading.com/1.0/ref-data/symbols").then(res => res.json());
};

//Load full historial data (last 5 years data) of stock price
export const getFullHistoricalData = symbol => {
  return fetch("https://financialmodelingprep.com/api/v3/historical-price-full/" + symbol + "?apikey=5696dbf21c11c436193231d0a30f538f").then(res => res.json());
};

//Load last 5 days data of stock price
export const getFiveDaysPrice = symbol => {
  return fetch("https://cloud.iexapis.com/stable/stock/" + symbol + "/chart/5d?token=pk_409c638849f940088c57402f6c9d49ad ").then(res => res.json());
}

//Load latest news of company
export const getNews = symbol => {
  return fetch("https://cloud.iexapis.com/stable/stock/" + symbol + "/news/last/5?token=pk_409c638849f940088c57402f6c9d49ad ").then(res => res.json());
}