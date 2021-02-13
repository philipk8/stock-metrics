// src/index.js
import "./styles/index.css";
import loadChart from "./scripts/load_chart"
import buildList from "./scripts/build_list"

const axios = require('axios');

window.addEventListener("DOMContentLoaded", () => {

  buildList()
  loadChart()

}); // closing of addEventListener