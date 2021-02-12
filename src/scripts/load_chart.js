import getArgs from './get_args'
import {pricesApi, stockApi, benchmarkApi} from './prices_api'
import chart from './chart'
import company from './company'
import benchmark from './benchmark'

import * as d3 from "d3";

export default () => {

  let args = getArgs()
  
  d3.selectAll("svg").remove();
  
  pricesApi(args)
    .then((response) => {
      chart(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });

  benchmarkApi(args)
    .then((response) => {
      benchmark(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });


  stockApi(args)
    .then((response) => {
      company(response.data)})
    .catch(function (error) {
      console.log(error);
  });

  // debugger 

  // chart(prices)
}