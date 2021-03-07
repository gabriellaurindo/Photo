const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello Worldddd')
})
 
app.listen(3000)