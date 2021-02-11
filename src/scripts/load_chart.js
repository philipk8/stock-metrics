import getArgs from './get_args'
import {pricesApi, stockApi} from './prices_api'
import chart from './chart'
import company from './company'
import buildList from './build_list'

export default () => {

  debugger 

  let args = getArgs()

  pricesApi(args)
    .then((response) => {
      chart(response.data)})
    .catch(function (error) {
      // debugger 
      console.log(error);
  });

  stockApi(args)
    .then((response) => {
      // debugger
      company(response.data)})
    .catch(function (error) {
      console.log(error);
  });

  // debugger 

  // chart(prices)
}