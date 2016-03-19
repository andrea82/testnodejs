/**
 * Created by andreaortis on 18/03/16.
 */

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/dishes',function(req,res,next){
    res.writeHead(200,{'Content-type':'text/plain'});
    next();
})

app.get('/dishes',function(req,res,next){
    res.end('I will send you all dishes!');

})

app.post('/dishes',function(req,res,next){
    res.end('I will create a new dish: '+ req.body.name+' with detail: '+req.body.description);
})

app.delete('/dishes',function(req,res,next){
    res.end('I will delete all dishes!');

})

app.get('/dishes/:dishId',function(req,res,next){
    res.end('I will send you the dish: '+req.params.dishId);
});

app.put('/dishes/:dishId',function(req,res,next){
    res.write('I will update the dish: '+req.params.dishId+'\n');
    res.end('I updated the dish with this details: '+req.body.name+' description: '+req.body.description);

});

app.delete('/dishes/:dishId',function(req,res,next){
    res.end('I will delete the dish: '+req.params.dishId);
})

app.use(express.static(__dirname + '/../public'));

app.listen(port,hostname,function(){
    console.log('Server is running at http://'+hostname+':'+port);
});