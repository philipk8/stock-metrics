// src/index.js
import "./styles/index.scss";
import load_data from './scripts/load_data';
import chart from './scripts/chart';


const axios = require('axios');

window.addEventListener("DOMContentLoaded", () => {
  
  // const ticker = 'CVNA'
  // load_data(ticker);

  
  const apiKey = 'Tpk_aacacbb679254fe1af315378cb8b2d4e'

  // load the default first stock symbol AAPL, at 3m time range
  const closeOnly = true;
  let interval = null;
  let ticker = 'AAPL';
  let range = '3m';
  // 2y, 1y, 6m, 3m, 1m


  axios.get(`/stocks/${ticker}/chart/${range}`, {params: {
    apiKey: apiKey,
    closeOnly: closeOnly,
    interval: interval 
    }})
  .then((response) => {
      console.log(response);
      // load_data(response)
      chart(response.data);

  })
  .catch(function (error) {
      console.log(error);
  });

  // let isbn = '0201558025';
  // axios.get(`/books/${isbn}`)
  // .then((response) => {
  //     console.log(response); 
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });

  // let query = "grace hopper";
  // axios.get(`/search?string=${query}`)
  // .then((response) => {
  //     console.log(response);
  // })
  // .catch(function (error) {
  //     console.log(error);
  // });

}); // closing of addEventListener