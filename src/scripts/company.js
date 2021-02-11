import * as d3 from "d3";

export default (data) => {

  // debugger 
  
  d3.select(".company-name").remove();

  let coName = ""
  let coSymbol = ""

  if (data.companyName === null) {
    coName = "Ticker Not Found";
    coSymbol = "please search again"
  } else {
    coName = data.companyName;
    coSymbol = data.symbol
  }

  d3.select("#company").append("text")
    .attr("class", "company-name")
    .text(coName + " " + "(" + coSymbol + ")" )

  // const svg = d3.select("div#company").append("svg")
  //   .attr("width", 960)
  //   .attr("height", 100)

  // svg.append("text")
  //   .attr("class", "company-name")
  //   .text("Company")
  
  
}