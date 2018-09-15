
const express = require('express')
const app = express()


/* Routes */
app.get('/', function (req, res) {
  res.render('index'), {title: 'HelloWorld'}
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
