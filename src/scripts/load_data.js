import * as d3 from "d3";
import updateChart from "./update_chart";
import getArgs from './get_args';

export default (ticker) => {

  let args = getArgs();

  updateChart(args);
}