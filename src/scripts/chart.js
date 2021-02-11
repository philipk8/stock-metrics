import * as d3 from "d3";

export default (data) => {

  // debugger 

  d3.select("svg").remove();

  const width = 960;
  const height = 500;
  const margin = 5;
  const padding = 5;
  const adj = 50;

  // debugger 

  // overall SVG
  const svg = d3.select("#chart").append("svg")
      .attr("preserveAspectRatio", "xMinYMin meet")
      .attr("viewBox", "-"
            + adj + " -"
            + adj + " "
            + (width + adj *3) + " "
            + (height + adj *3))
      .style("padding", padding)
      .style("margin", margin)
      .classed("svg-content", true);
  
  // scales
  const timeConv = d3.timeParse("%Y-%m-%d");

  const xScale = d3.scaleTime().range([0,width]);
  const yScale = d3.scaleLinear().rangeRound([height, 0]);

  // debugger 

  xScale.domain(d3.extent(data, function(d){
      return timeConv(d.date)}));
      
      // xScale.domain(d3.extent(data, function(d){
      //   return d.date}));
        
  yScale.domain(d3.extent(data, function(c){
        return c.close}));
  
  // yScale.domain([(0), d3.max(slices, function(c) {
  //   return d3.max(c.values, function(d) {
  //       return d.measurement + 4; });
  //       })

  // axes 
  const yaxis = d3.axisLeft()
    // .ticks(10, "$f")
    .ticks(10)
    .scale(yScale); 

  const xaxis = d3.axisBottom()
    .ticks(d3.timeMonth.every(1))
    .tickFormat(d3.timeFormat('%b %y'))
    .scale(xScale);

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xaxis);

  svg.append("g")
    .attr("class", "axis")
    .call(yaxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("dy", ".75em")
    .attr("y", 6)
    .style("text-anchor", "end")
    .text("Price");

  // lines 
  const line = d3.line()
    .x(function(d) { return xScale(timeConv(d.date)); })
    .y(function(d) { return yScale(d.close); });

  const dataObj = { values: data }
  const slices = []
  slices.push(dataObj)

  let id = 0;
  const ids = function () {
    return "line-"+id++;
  }

  // drawing 
  // const lines = svg.selectAll("lines")
  //   .data(slices)
  //   .enter()
  //   .append("g");

  //   const lines2 = lines.append("path")
  //   .attr("class", ids)
  //   .attr("d", function(d) { 
  //     return line(d.values); })

    const path = svg.append("path")
      .attr("class", ids)
      .attr("d", line(data))

      
  debugger 

  //  const path = lines2._groups[0][0]

       debugger 

    const totalLength = path.node().getTotalLength();
    // const totalLength = path.getTotalLength();

    debugger 

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      // .ease("linear")
      .attr("stroke-dashoffset", 0);

  // const lineFunction = d3.line()
  //   .x(function(d) { return timeConv(d.date);})
  //   .y(function(d) { return d.close;})

  // const lineGraph = svg.append("path")
  //   .attr("d", lineFunction(data))
  //   .attr("stroke", "blue")
  //   .attr("stroke-width", 2)
  //   .attr("fill", "none");

};