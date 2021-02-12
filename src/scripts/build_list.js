import load_chart from './load_chart.js'

export default () => {


  let times = ["3m", "6m", "1y", "2y"]

  const timeUl = document.getElementById("time-ul");

  times.forEach(time => {
    const timeLi = document.createElement("li");
    timeLi.classList.add("field");
    timeLi.innerHTML = time;
    timeLi.addEventListener("click", e => {
            if (!e.target.classList.contains('active')) {
                Array.from(timeUl.getElementsByClassName('active')).forEach(li => {
                    li.classList.remove('active');
                });
                e.target.classList.add('active');
                load_chart();

            }
        });
        timeLi.dataset.field = time;
        timeUl.appendChild(timeLi);
  })
  timeUl.firstElementChild.classList.add('active');

  let benchmarks = ["SPY", "VTI", "VWO" ]

  const benchUl = document.getElementById("benchmark-ul");

  benchmarks.forEach(benchmark => {
    const benchLi = document.createElement("li");
    benchLi.classList.add("field");
    benchLi.innerHTML = benchmark;
    benchLi.addEventListener("click", e => {
            if (!e.target.classList.contains('active')) {
                Array.from(benchUl.getElementsByClassName('active')).forEach(li => {
                    li.classList.remove('active');
                });
                e.target.classList.add('active');
                load_chart();

            }
        });
        benchLi.dataset.field = benchmark;
        benchUl.appendChild(benchLi);
  })
  benchUl.firstElementChild.classList.add('active');


  // ticker input 
  const tickerInput = document.getElementById("ticker-input")

  const form = document.getElementById('form');

  form.addEventListener("submit", e => {
    e.preventDefault();
    const curr_ticker = tickerInput.value
    tickerInput.setAttribute("value", curr_ticker )
    load_chart();
  })

}