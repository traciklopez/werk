var config = require('./config'),
	bodyParser = require('body-parser'),
	express = require('express');

module.exports = function() {
    var app = express();
    
    app.use(bodyParser.urlencoded({
    	extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);

    app.use(express.static('./public'));
    
    return app;
};