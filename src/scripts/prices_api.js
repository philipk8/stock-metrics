// import chart from './chart';
// import getArgs from './get_args'

import axios from 'axios';

// export default (args) => {
  
  // const axios = require('axios');
  
  export const pricesApi = ({ apiKey, closeOnly, interval, ticker, range}) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
// debugger 
  return axios.get(`/stocks/${ticker}/chart/${range}`, {params: {
    apiKey: apiKey,
  closeOnly: closeOnly,
  interval: interval 
  }
  })
  }

  export const benchmarkApi = ({ apiKey, closeOnly, interval, benchmark, range}) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
// debugger 
  return axios.get(`/stocks/${benchmark}/chart/${range}`, {params: {
    apiKey: apiKey,
  closeOnly: closeOnly,
  interval: interval 
  }
  })
  }
  
  export const stockApi = ({ apiKey, ticker }) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
  // debugger
  return axios.get(`/stock/${ticker}/company`, {params: {
  apiKey: apiKey,
  }
  })
  }

  export const metricApi = ({ apiKey, ticker }) => {
  // const { apiKey, closeOnly, interval, ticker, range} = args
  // debugger
  return axios.get(`/stock/${ticker}/advanced-stats`, {params: {
  apiKey: apiKey,
  }
  })
  }


// .then((response) => {
  //   // load_data(response)
  //   console.log(response);
  //   // debugger 
  //   // res.send(response.data)
  //   return (response.data)
  //     // chart(response.data);

  // })
  // .catch(function (error) {
  //     console.log(error);
  // });

// }