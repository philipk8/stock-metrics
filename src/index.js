// src/index.js
import "./styles/index.scss";
import load_data from './scripts/load_data';
import chart from './scripts/chart';
import prices_api from "./scripts/prices_api";
import loadChart from "./scripts/load_chart"

const axios = require('axios');

window.addEventListener("DOMContentLoaded", () => {

  loadChart()
  
  // const ticker = 'CVNA'
  // load_data(ticker);

  // 2y, 1y, 6m, 3m, 1m
  
  // const args = {
  //   apiKey: 'Tpk_aacacbb679254fe1af315378cb8b2d4e',
  //   closeOnly: true,
  //   interval: null,
  //   ticker: 'AAPL',
  //   range: '3m'
  // }

  // prices_api(args)


  // axios.get(`/stocks/${ticker}/chart/${range}`, {params: {
  //   apiKey: apiKey,
  //   closeOnly: closeOnly,
  //   interval: interval 
  //   }})
  // .then((response) => {
  //     console.log(response);
  //     // load_data(response)
  //     chart(response.data);

  // })
  // .catch(function (error) {
  //     console.log(error);
  // });

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