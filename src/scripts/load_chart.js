import getArgs from './get_args'
import {pricesApi, stockApi, metricApi, benchmarkApi} from './prices_api'
import chart from './chart'
import company from './company'
import benchmark from './benchmark'
import buildList from './build_list'

import * as d3 from "d3";

export default () => {

  
  let args = getArgs()
  
  d3.select("svg").remove();
  
  debugger 

  pricesApi(args)
    .then((response) => {
      chart(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });

  benchmarkApi(args)
    .then((response) => {
      debugger 
      benchmark(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });

  // metricApi(args)
  //   .then((response) => {
  //     debugger
  //     metric(response.data)})
  //   .catch(function (error) {
  //     // debugger 
  //     console.log(error);
  // });

  stockApi(args)
    .then((response) => {
      debugger
      company(response.data)})
    .catch(function (error) {
      console.log(error);
  });

  // debugger 

  // chart(prices)
}