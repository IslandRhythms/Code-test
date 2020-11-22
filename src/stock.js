import axios from 'axios';

export const getStock = () => {
  return axios.get("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=MSFT&apikey=demo")
    .then(response => {
        console.log(response.data["Global Quote"]["05. price"]);
        return response.data["Global Quote"]["05. price"];
       
    })
    .catch(error => {
        console.log(error);
    });
};

