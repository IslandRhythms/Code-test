import logo from './logo.svg';
import './App.css';
import {getStock} from './stock';
import React, {useState,useEffect} from 'react';

function App() {

  const [stock, setStock] = useState({
    price: 0
  });
  
useEffect(() => {
  loadStock();
  const interval = setInterval(() => {
    loadStock()
  },10000)
  return () => clearInterval(interval);
  },[]);

 

const loadStock = () => {
   getStock().then(data => {
     data = parseFloat(data).toFixed(2);
     setStock({price: data});
  }).catch(error => {
    console.log(error);
  });
};

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         The current price of the Microsoft stock is <br /> ${stock.price}
        </p>
   
      </header>
    </div>
  );
};

export default App;
