// import chart from './chart';
// import getArgs from './get_args'

import axios from 'axios';

// export default (args) => {
  
  // const axios = require('axios');
  
  export const pricesApi = ({ apiKey, closeOnly, interval, ticker, range}) => {
  
  // const { apiKey, closeOnly, interval, ticker, range} = args

  debugger 

  return axios.get(`/stocks/${ticker}/chart/${range}`, {params: {
  apiKey: apiKey,
  closeOnly: closeOnly,
  interval: interval 
  }})

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