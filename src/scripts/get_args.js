
export default () => {

  const args = {
    apiKey: 'Tpk_aacacbb679254fe1af315378cb8b2d4e',
    closeOnly: true,
    interval: null,
    ticker: 'AAPL',
    range: '3m'
  }

  debugger 

  let ticker1 = document.getElementById("myVal").value 

    console.log(document.getElementById("myVal").value)
  
    debugger 
  
  function handleClick(event) {
      console.log(document.getElementById("myVal").value)

      // draw(document.getElementById("myVal").value)
      return false;
  }

  // const dimUl = document.getElementById("dim-ul"); 
  // const metUl = document.getElementById("met-ul");
  
  // const dimEle = dimUl.getElementsByClassName('active')[0];
  // const metEle = metUl.getElementsByClassName('active')[0];
  
  // options.data = DataExplorer.rawData;
  // options.dimension = dimEle.dataset.field;
  // options.metric = metEle.dataset.field;
  // options.fn = metEle.dataset.fn;

  return args;
}