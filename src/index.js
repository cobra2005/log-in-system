const path = require('path');
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.get("/", (req, res) => {
  res.render('home')
});

app.get("/sign-in", (req, res) => {
  res.render('sign-in')
});

app.get("/sign-up", (req, res) => {
  res.render('sign-up')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});