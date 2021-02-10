import getArgs from './get_args.js'
import updateChart from './update_chart.js'

export default () => {

  // const tickerInput = document.getElementById("")

  let times = ["5y", "2y", "1y", "6m", "3m"]

debugger 

  const timeUl = document.getElementById("time-ul");

  times.forEach(time => {
    const timeLi = document.createElement("li");
    timeLi.classList.add("field");
  debugger 
    timeLi.innerHTML = time;
    timeLi.addEventListener("click", e => {
            if (!e.target.classList.contains('active')) {
                Array.from(timeUl.getElementsByClassName('active')).forEach(li => {
                    li.classList.remove('active');
                });
                e.target.classList.add('active');
                // updateChart(getOptions());
                
            }
        });
    debugger
        // timeLi.dataset.fn = 'sum';
        timeLi.dataset.field = time;
        timeUl.appendChild(timeLi);
  })
debugger 

  timeUl.firstElementChild.classList.add('active');


}