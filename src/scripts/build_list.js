import getArgs from './get_args.js'
import load_chart from './load_chart.js'
import updateChart from './update_chart.js'

export default () => {

  

debugger 

  let times = ["5y", "2y", "1y", "6m", "3m"]

  const timeUl = document.getElementById("time-ul");

  times.forEach(time => {
    debugger 
    const timeLi = document.createElement("li");
    timeLi.classList.add("field");
  // debugger 
    timeLi.innerHTML = time;
    timeLi.addEventListener("click", e => {
            if (!e.target.classList.contains('active')) {
                Array.from(timeUl.getElementsByClassName('active')).forEach(li => {
                    li.classList.remove('active');
                });
                e.target.classList.add('active');
                debugger
                // updateChart(getOptions());
                load_chart();

            }
        });
    // debugger
        // timeLi.dataset.fn = 'sum';
        timeLi.dataset.field = time;
        timeUl.appendChild(timeLi);
  })
  timeUl.firstElementChild.classList.add('active');


  const tickerInput = document.getElementById("ticker-input")

  const form = document.getElementById('form');

  form.addEventListener("submit", e => {
    debugger
    const curr_ticker = tickerInput.value
    tickerInput.setAttribute("value", curr_ticker )
    // tickerInput.attr
    load_chart();
    debugger
  })
  
}