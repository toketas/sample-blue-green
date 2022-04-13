const express = require('express')
const app = express()

const port = 3333
const ip = require('ip').address()

app.get('/', (req, res) => {
  res.send('Blue 1.0.0 - ' + ip)
})

app.listen(port, () => {
  console.log('Listening on port', port)
})
