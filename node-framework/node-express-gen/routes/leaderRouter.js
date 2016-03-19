var express = require('express');
var leaderRouter = express.Router();

leaderRouter.route('/')
    .all(function(req,res,next){
        res.writeHead(200,{'Content-type':'text/plain'});
        next()
    })
    .get(function(req,res,next){
        res.end('I will send you all leaderships!');

    })
    .post(function(req,res,next){
        res.end('I will create a new leadership: '+ req.body.name+' with detail: '+req.body.description);
    })
    .delete(function(req,res,next){
        res.end('I will delete all leaderships!');

    });

leaderRouter.route('/:leaderId')
    .get(function(req,res,next){
        res.end('I will send you the leadership: '+req.params.leaderId);
    })
    .put(function(req,res,next){
        res.write('I will update the leadership: '+req.params.leaderId+'\n');
        res.end('I updated the leadership with this details: '+req.body.name+' description: '+req.body.description);

    })
    .delete(function(req,res,next){
        res.end('I will delete the leadership: '+req.params.leaderId);
    });

module.exports = leaderRouter;
