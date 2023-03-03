const express = require('express')
const app = express()
const port = 8080

app.use(express.json())

app.use(express.urlencoded({
  extended: false
}))

app.set("view engine", "ejs")

app.use('/static', express.static(__dirname + '/static'));

app.set("views", require("path").join(__dirname, "views"))

//* Todas las rutas

app.get('/', function (req, res) {
    res.render('index')
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
  });