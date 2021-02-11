const express = require('express')
const app = express()
const path = require('path')
const fetch = require('node-fetch')
const PORT = process.env.PORT || 8000; // process.env accesses heroku's environment variables
// const PORT = process.env.PORT || 8080; // process.env accesses heroku's environment variables

// app.use(express.static('public'))
app.use(express.static('dist'))

app.get('/', (request, res) => {
  // res.sendFile(path.join(__dirname, './public/index.html'))
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

// create route to get single book by its isbn
app.get('/stocks/:ticker/chart/:range', (request, response) => {
  // make api call using fetch
  fetch(`https://sandbox.iexapis.com/stable/stock/${request.params.ticker}/chart/${request.params.range}?chartCloseOnly=${request.query.closeOnly}&chartInterval=${request.query.interval}&token=${request.query.apiKey}`)
  .then((response) => {
      return response.text();
  }).then((body) => {
      let results = JSON.parse(body)
      console.log(results)   // logs to server
      response.send(results) // sends to frontend
    });
});

app.get('/stock/:ticker/company', (request, response) => {
  debugger
  // make api call using fetch
  fetch(`https://sandbox.iexapis.com/stable/stock/${request.params.ticker}/company?token=${request.query.apiKey}`)
  .then((response) => {
      return response.text();
  }).then((body) => {
      let results = JSON.parse(body)
      console.log(results)   // logs to server
      response.send(results) // sends to frontend
    });
});

// // create route to get single book by its isbn
// app.get('/books/:isbn', (request, response) => {
//   // make api call using fetch
//   fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${request.params.isbn}&format=json&jscmd=data`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)   // logs to server
//       response.send(results) // sends to frontend
//     });
// });

// create a search route
// app.get('/search', (request, response) => {
//   fetch(`http://openlibrary.org/search.json?q=${request.query.string}`)
//   .then((response) => {
//       return response.text();
//   }).then((body) => {
//       let results = JSON.parse(body)
//       console.log(results)
//       response.send(results)
//     });
// });

app.listen(PORT, () => {
  console.log(__dirname);
  console.log(`listening on ${PORT}`)
})
