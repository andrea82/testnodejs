/**
 * Created by andreaortis on 18/03/16.
 */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var serverConfig = require('./server-config');
var dishRouter = require('./dishRouter');
var promoRouter = require('./promoRouter');
var leaderRouter = require('./leaderRouter');

var app = express();

app.use(morgan('dev'));
app.use('/dishes',dishRouter(express,bodyParser));
app.use('/promotions',promoRouter(express,bodyParser));
app.use('/leadership',leaderRouter(express,bodyParser));
app.use(express.static(__dirname + '/../public'));

app.listen(serverConfig.port,serverConfig.hostname,function(){
    console.log('Server is running at http://'+serverConfig.hostname+':'+serverConfig.port);
});