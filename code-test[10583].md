Alpha Vantage exposes an API endpoint that lets you get the current price
of a stock. For example, if you make the below request, you get the current
price of Microsoft stock (MSFT).

```
GET https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo
```

Or you can go to `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo`
in your browser. The output looks like what you see below. The "05. Price" key contains the current
stock price.

```
const sampleResult = {
    "Global Quote": {
        "01. symbol": "MSFT",
        "02. open": "139.3900",
        "03. high": "140.4200",
        "04. low": "138.6700",
        "05. price": "139.7850",
        "06. volume": "28338704",
        "07. latest trading day": "2019-10-24",
        "08. previous close": "137.2400",
        "09. change": "2.5450",
        "10. change percent": "1.8544%"
    }
};
```

Build a browser app using React, Vue, Svelte, vanilla JavaScript, or whichever JavaScript
framework you prefer that displays the current stock price of Microsoft. The stock price
should update automatically every 10 seconds while the window is open.
