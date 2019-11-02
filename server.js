var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var tasks = require('./routes/tasks');

var port = process.env.PORT || 3000;

var app = express();

//View Engine

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'client/dist/client')));

// Body Parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'/client/dist/client/index.html'));
});
//app.use('/', index);
app.use('/api', tasks);

app.listen(port, function(){
    console.log('Server started on port '+port);
});