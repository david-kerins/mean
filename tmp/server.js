var express = require('express')
var morgan = require('morgan')
var app = express()
app.use(morgan('combined'))
app.use('/', function(req, res) {
    res.send('Hello World')
})
app.listen(3000)
console.log('Server running at http://localhost:3000/')
module.exports = app;
