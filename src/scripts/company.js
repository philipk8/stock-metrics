import * as d3 from "d3";

export default (data) => {

  // debugger 
  
  d3.select("text").remove();

  d3.select("#company").append("text")
    .attr("class", "company-name")
    .text(data.companyName)

  // const svg = d3.select("div#company").append("svg")
  //   .attr("width", 960)
  //   .attr("height", 100)

  // svg.append("text")
  //   .attr("class", "company-name")
  //   .text("Company")
  
  
}