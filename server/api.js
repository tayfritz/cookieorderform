const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/orders', function (req, res) {
  res.send('<h1>I found you</h1>');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
