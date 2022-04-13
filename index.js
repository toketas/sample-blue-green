const express = require('express')
const app = express()

const port = 3333

app.get('/', (req, res) => {
  res.send('Blue 1.0.0')
})

app.listen(port, () => {
  console.log('Listening on port', port)
})
