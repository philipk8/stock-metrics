// import chart from './chart';
// import getArgs from './get_args'

import axios from 'axios';

// export default (args) => {
  
  // const axios = require('axios');
  
  export const pricesApi = ({ closeOnly, interval, ticker, range}) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
// debugger 
  return axios.get(`/stocks/${ticker}/chart/${range}`, {params: {
  closeOnly: closeOnly,
  interval: interval 
  }
  })
  }

  export const benchmarkApi = ({ closeOnly, interval, benchmark, range}) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
// debugger 
  return axios.get(`/stocks/${benchmark}/chart/${range}`, {params: {
  closeOnly: closeOnly,
  interval: interval 
  }
  })
  }
  
  export const stockApi = ({ apiKey, ticker }) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
  // debugger
  return axios.get(`/stock/${ticker}/company`, {params: {
  }
  })
  }

