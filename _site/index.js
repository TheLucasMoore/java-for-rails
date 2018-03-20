var sslRedirect = require('heroku-ssl-redirect');
var express = require('express');
var app = express();
var path = require('path');
var public = __dirname + "/app/public/";
var media = __dirname + "/app/media/";

app.use(sslRedirect());

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(public + "index.html"));
});

app.use('/media', express.static(media));

app.listen(process.env.PORT || 8080);
