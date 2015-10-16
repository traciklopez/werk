var config = require('./config'),
	bodyParser = require('body-parser'),
	express = require('express'),
	flash = require('connect-flash'),
	session = require('express-session');

module.exports = function() {
    var app = express();
    
    app.use(bodyParser.urlencoded({
    	extended: true
    }));

    app.use(flash());

    app.use(bodyParser.json());

    app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'Muahhahaha'
}));

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);


    app.use(express.static('./public'));
    
    return app;


};