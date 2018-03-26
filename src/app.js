const express = require('express');
const bodyParser = require("body-parser");
const app = express()
const mongoose = require('mongoose')
app.set("view engine", "pug");
app.set("views", "views")
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/ratings')

var ratingSchema = new mongoose.Schema({
  rating: String
})
var Rating = mongoose.model('Rating', ratingSchema)

app.get('/', function(req, res) {
   res.render("homepage")
 })

 app.post('/success', function(req, res){
  this.rating = req.body.dropdown
  var myRating = new Rating(req.body);
    myRating.save()
    .then(item => {
      res.render("success")
    })
    .catch(err => {
      res.status(400).send("Not Saved")
    });
 })

app.listen(8081, () => console.log('Your on localhost 8081'))

module.exports = app
