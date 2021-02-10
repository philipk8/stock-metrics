import getArgs from './get_args'
import {pricesApi} from './prices_api'
import chart from './chart'

export default () => {

  debugger 

  let args = getArgs()

  debugger

  pricesApi(args)
    .then((response) => {chart(response.data)})
    .catch(function (error) {
      console.log(error);
  });

  debugger 

  // chart(prices)
}