import * as d3 from "d3";

export default (data) => {

  // const { data } = args;
  const width = 960;
  const height = 500;
  const margin = 5;
  const padding = 5;
  const adj = 30;

  // overall SVG
  const svg = d3.select("div#chart").append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "-"
            + adj + " -"
            + adj + " "
            + (width + adj *3) + " "
            + (height + adj*3))
      .style("padding", padding)
      .style("margin", margin)
      .classed("svg-content", true);
  
  // scales
  const timeConv = d3.timeParse("%Y-%m-%d");

  const xScale = d3.scaleTime().range([0,width]);
  const yScale = d3.scaleLinear().rangeRound([height, 0]);

  debugger 
  
  // xScale.domain(d3.extent(data, function(d){
      // return timeConv(d.date)}));
      yScale.domain(d3.extent(data, function(c){
          return c.close}));

  xScale.domain(d3.extent(data, function(d){
      return d.date}));

  
  // yScale.domain([(0), d3.max(slices, function(c) {
  //   return d3.max(c.values, function(d) {
  //       return d.measurement + 4; });
  //       })

  // axes 
  const yaxis = d3.axisLeft().scale(yScale); 
  const xaxis = d3.axisBottom().scale(xScale);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xaxis);

  svg.append("g")
    .attr("class", "axis")
    .call(yaxis);

  


};