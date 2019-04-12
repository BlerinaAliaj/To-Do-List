// Import express
var express = require('express');
// App becomes the function output of express()
var app = express();

// Set up the mongo database you want to connect to.
// If the database does not exist, then mongo will creat it for you
var url = 'mongodb://localhost:27017/todolist';

var mongoose = require('mongoose');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');


//Set port to PORT, or 3000 if it is not setup
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));



app.set('view engine', 'ejs');

mongoose.connect(url, { useNewUrlParser: true});
// Set up warning once connection to DB has been done
mongoose.connection.once('open', function(){
    console.log('Connection has been made!!')
}).on('error', function(error){
    console.log('Connection error:', error)
});


setupController(app);
apiController(app);

//Set app to listen on that port
app.listen(port);

