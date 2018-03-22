const express = require('express');
const bodyParser = require("body-parser");
const app = express()
app.set("view engine", "pug");
app.set("views", "views")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
   res.render("homepage")
 })

 app.post('/success', function(req, res){
  console.log(req.body.dropdown)
   res.render("success")
 })

app.listen(8081, () => console.log('Your on localhost 8081'))

module.exports = app
