import getArgs from './get_args'
import {pricesApi, stockApi} from './prices_api'
import chart from './chart'
import company from './company'
import metric from './metric'
import buildList from './build_list'

import * as d3 from "d3";

export default () => {

  debugger 

  let args = getArgs()

  d3.select("svg").remove();

  pricesApi(args)
    .then((response) => {
      chart(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });

  pricesApi(args)
    .then((response) => {
      metric(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });

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