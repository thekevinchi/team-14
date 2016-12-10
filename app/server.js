const express = require('express')
const app = express()


app.use(express.static('public'))
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
  res.render('index');
})

app.get('/charts', (req, res) => {
  res.render('charts');
})

app.listen(3000, () => {
  console.log("Magic happens on port 3000");
})
