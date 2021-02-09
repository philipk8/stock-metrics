// src/index.js
import "./styles/index.scss";
import load_data from './scripts/load_data';

const axios = require('axios');

window.addEventListener("DOMContentLoaded", () => {
  
  // const ticker = 'CVNA'
  // load_data(ticker);

  let ticker = 'CVNA';
  axios.get(`/stocks/${ticker}`)
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