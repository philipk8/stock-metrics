import * as d3 from "d3";

export default (data) => {

  // debugger 

  // d3.select("svg").remove();

  const width = 960;
  const height = 500;
  const margin = 5;
  const padding = 5;
  const adj = 45;

  // debugger 

  // overall SVG
  const svg = d3.select("#chart").append("svg")
      // .attr("preserveAspectRatio", "xMinYMin meet")
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
        
  // yScale.domain(d3.extent(data, function(c){
  //       return c.close}));

  yScale.domain([d3.min(data, function(d) {
        return d.close - 5; }), d3.max(data, function(d) {
        return d.close; })]);
  
  // yScale.domain([(0), d3.max(slices, function(c) {
  //   return d3.max(c.values, function(d) {
  //       return d.measurement + 4; });
  //       })

  // axes 
  const yaxis = d3.axisRight()
    // .ticks(10, "$f")
    .ticks(10)
    .scale(yScale);

  // const xaxis = d3.axisBottom()
  //   .ticks(d3.timeMonth.every(1))
  //   .tickFormat(d3.timeFormat('%b %y'))
  //   .scale(xScale);

  // svg.append("g")
  //   .attr("class", "axis")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xaxis)
  // .selectAll("text")
  //   .attr("y", 0)
  //   .attr("x", -48)
  //   .attr("dy", ".35em")
  //   .attr("transform", "rotate(-90)")
  //   .style("text-anchor", "start");

  svg.append("g")
    .attr("class", "axis")
    .attr("transform", "translate(" + width + ", 0)")
    .call(yaxis)
  .append("text")
    .attr("transform", "rotate(-90)")
    .attr("dy", ".75em")
    .attr("y", 35)
    .style("text-anchor", "end")
    .style("fill", "#063970")
    .style("font-size", "16px")
    .style("font-weight", "bold")
    .text("Benchmark");

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

    // const path = svg.append("path")
    //   .attr("class", ids)
    //   .attr("d", line(data))

    // let tooltip;
    // if (document.getElementById('tooltip')) {
    //     tooltip = d3.select('#tooltip');
    // } else {
    //     tooltip = d3.select("body").append('div')
    //         .attr('id', 'tooltip')
    //         .attr('class', 'tooltip')
    //         .style('opacity', 0);
    // }

    const path = svg.append("path")
      .attr("class", ids)
      .attr("id", "benchmark")
      .attr("d", line(data))

    const totalLength = path.node().getTotalLength();

    path
      .attr("stroke-dasharray", totalLength + " " + totalLength)
      .attr("stroke-dashoffset", totalLength)
      .transition()
      .duration(2000)
      // .ease("linear")
      .attr("stroke-dashoffset", 0);


      debugger 

      

      // // tooltip
      //   const focus = svg.append("g")
      //       .attr("class", "focus")
      //       .style("display", "none");

      //   debugger 

      //   focus.append("circle")
      //       .attr("r", 5);

      //   debugger 

      //   focus.append("rect")
      //       .attr("class", "tooltip")
      //       .attr("width", 100)
      //       .attr("height", 50)
      //       .attr("x", 10)
      //       .attr("y", -22)
      //       .attr("rx", 4)
      //       .attr("ry", 4);

      //     debugger 

      //   focus.append("text")
      //       .attr("class", "tooltip-date")
      //       .attr("x", 18)
      //       .attr("y", -2);

      //   focus.append("text")
      //       .attr("x", 18)
      //       .attr("y", 18)
      //       .text("Price:");

      //       debugger 

      //   focus.append("text")
      //       .attr("class", "tooltip-price")
      //       .attr("x", 60)
      //       .attr("y", 18);

      //       debugger 

      //   svg.append("rect")
      //       .attr("class", "overlay")
      //       .attr("width", width)
      //       .attr("height", height)
      //       .on("mouseover", function() { focus.style("display", null); })
      //       .on("mouseout", function() { focus.style("display", "none"); })
      //       .on("mousemove", mousemove);

      //   // const timeConv = d3.timeParse("%Y-%m-%d");

      //   const data2 = data.map( (d) => {
      //     return {
      //       date0: d.date, // '2020-12-01'
      //       date: timeConv(d.date), // 'UTC 
      //       close: d.close
      //     }
      //   })
        
      //   // debugger

      //   function mousemove() {
      //     // debugger
      //     let bisectDate = d3.bisector(function(d) { return d.date; }).left
      //     // debugger
      //       // var xx = event.pageX
      //       // var x0 = xScale.invert(xx)
      //       let x0 = xScale.invert(d3.pointer(event,this)[0])
      //       // debugger 
      //          let i = bisectDate(data2, x0, 1)
      //         //  debugger 
      //           let d0 = data2[i - 1],
      //           d1 = data2[i],
      //           d = x0 - d0.date > d1.date - x0 ? d1 : d0;
      //     debugger 
      //       focus.attr("transform", "translate(" + xScale(timeConv(d.date0)) + "," + yScale(d.close) + ")");
      //     debugger
      //       focus.select(".tooltip-date").text(d.date0);
      //     debugger
      //       focus.select(".tooltip-price").text(d.close);
      //     debugger 
      //   }
    

  // const lineFunction = d3.line()
  //   .x(function(d) { return timeConv(d.date);})
  //   .y(function(d) { return d.close;})

  // const lineGraph = svg.append("path")
  //   .attr("d", lineFunction(data))
  //   .attr("stroke", "blue")
  //   .attr("stroke-width", 2)
  //   .attr("fill", "none");

};