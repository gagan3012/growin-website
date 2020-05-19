# Growin Website 

We want to create a platform that gives recommendations based on interests and values to finance novices wanting to get into trading and stock.

### NPM Packages Used:
- **react-chartjs-2** for Bar Chart
- **react-bootstrap**
- **react-card-flip** to create Flip Card in React

## Stock API Used:
- https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=CompanySymbol&interval=5min&outputsize=full&apikey=xx for Latest Quote 
- https://financialmodelingprep.com/api/v3/company/profile/CompanySymbol for Company Profile
- https://cloud.iexapis.com/v1/stock/Companysymbol/logo?token=xx for Company Logo
- https://financialmodelingprep.com/api/v3/stock/sectors-performance for Daily Sector Performance
- https://api.iextrading.com/1.0/ref-data/symbols to get symbols matching the company names.


### To install all the dependancies: `npm install`
### To run the project: `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
Pushing code to this repo will also update the setup netlify website. 





