const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => res.send("Hello World!"));
app.get('/about', (req, res) => res.send('about'));
app.get('/test', (req, res) => {
    res.send("test");
})
app.get('/index', (req, res) => {
  res.locals.myScore = 12;
  res.render('index');
})
app.get('/goals', (req, res) => {
  res.render('goals', {goal1: 'Simple Express App'})
})


app.listen(3000, () => console.log("Example app listening on port 3000!"));
