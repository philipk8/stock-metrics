import getArgs from './get_args'
import {pricesApi} from './prices_api'
import chart from './chart'
import buildList from './build_list'

export default () => {

  // debugger 

  let args = getArgs()

  debugger

  pricesApi(args)
    .then((response) => {
      debugger 
      chart(response.data)})
    .catch(function (error) {
      console.log(error);
  });

  // debugger 

  // chart(prices)
}