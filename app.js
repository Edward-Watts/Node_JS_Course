const http = require('http');

const express = require('express');

const path = require('path');

//custom file
// const routes = require('./routesOld');
const adminRoutes = require('./routes/admin'); // insert after express function
const shopRoutes = require('./routes/shop');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);