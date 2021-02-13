
export default () => {

  const args = {
    // apiKey: 'Tpk_aacacbb679254fe1af315378cb8b2d4e',
    closeOnly: true,
    interval: null,
    ticker: "GME",
    benchmark: "SPY",
    range: '3m'
  }


  const timeUl = document.getElementById("time-ul");
  const timeEle = timeUl.getElementsByClassName('active')[0];

  args.range = timeEle.dataset.field;


  const benchUl = document.getElementById("benchmark-ul");
  const benchEle = benchUl.getElementsByClassName('active')[0];

  args.benchmark = benchEle.dataset.field;
  
  const tickerInput = document.getElementById("ticker-input")
  let tickerVal = tickerInput.value

  if (tickerVal === "") {
    tickerVal = "GME"
  } else {
    args.ticker = tickerVal
  }

  return args;
}