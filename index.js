const express = require('express');
//const router = require('./routes');
//app.use(router);

const app = express();
app.use(express.json());

const router = require("./routes/route_index.js");
app.use(router);

app.set('view engine', 'ejs');


app.get('/', function(req, res) {
    res.render('pages/homePage');
  });


app.listen(3000, () => console.log('server listening on port 3000'));