var port = 1337;

module.exports = {
    port: port,
    db: 'mongodb://localhost/todos',
    facebook: {
        clientID: '950569911700694',
        clientSecret: 'e6d5b8a81b0957ef516671f56b5dadad',
        callbackURL: 'http://localhost:'+ port +'/oauth/facebook/callback'
    }
};
