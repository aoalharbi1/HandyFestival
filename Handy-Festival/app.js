const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const fileUpload = require('express-fileupload');
const readXlsxFile = require('read-excel-file/node');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const path = require('path');
const events = require('./routes/events');
const saltRounds = 10;


app.use(express.static(path.join(__dirname, '/files')));


app.use(session({
    secret: 'session id',   
    resave: false,
    saveUninitialized: true
}));

app.use(fileUpload());

app.use(bodyParser.json());
app.use(events);

app.get('/', function(err, req, res, next){
    
});

server.listen(process.env.PORT || 4500, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Listening at", addr.address + ":" + addr.port);
});
