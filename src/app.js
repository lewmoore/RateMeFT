const express = require('express');
const app = express()
app.set("view engine", "pug");
app.set("views", "views")

app.get('/', (req, res) => res.render("homepage"))

app.listen(8081, () => console.log('Your on localhost 8081'))

module.exports = app
