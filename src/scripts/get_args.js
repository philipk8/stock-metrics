
export default () => {

  const args = {
    data: null,
    dimension: null,
    metric: null,
    fn: null
  }

  const data = [
    {1: 10},
    {2: 20},
    {3: 30}
  ]

  
  // const dimUl = document.getElementById("dim-ul"); 
  // const metUl = document.getElementById("met-ul");
  
  // const dimEle = dimUl.getElementsByClassName('active')[0];
  // const metEle = metUl.getElementsByClassName('active')[0];
  
  args.data = data;

  // options.data = DataExplorer.rawData;
  // options.dimension = dimEle.dataset.field;
  // options.metric = metEle.dataset.field;
  // options.fn = metEle.dataset.fn;

  return args;
}