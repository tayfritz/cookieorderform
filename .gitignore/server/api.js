const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug') 

const order = {
  name: 'Taylor',
  cookies: true,
  dozen: '12'
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.get('/orders', function (req, res) {
  res.send('<h1> Hey there! I found you</h1>');
});

app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
