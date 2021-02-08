// src/index.js
import "./styles/index.scss";
import load_data from './scripts/load_data';

window.addEventListener("DOMContentLoaded", () => {
  
  const ticker = 'CVNA'

  load_data(ticker);

}); // closing of addEventListener