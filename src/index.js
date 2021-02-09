// src/index.js
import "./styles/index.scss";
import load_data from './scripts/load_data';

const axios = require('axios');

window.addEventListener("DOMContentLoaded", () => {
  
  // const ticker = 'CVNA'
  // load_data(ticker);

  
  const apiKey = 'Tpk_aacacbb679254fe1af315378cb8b2d4e'

  const closeOnly = true;
  let interval = 21;
  let ticker = 'CVNA';
  let range = '5y';
  // 5y, 2y, 1y, 6m, 3m


  axios.get(`/stocks/${ticker}/chart/${range}`, {params: {
    apiKey: apiKey,
    closeOnly: closeOnly,
    interval: interval 
    }})

  .then((response) => {
      console.log(response); 
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