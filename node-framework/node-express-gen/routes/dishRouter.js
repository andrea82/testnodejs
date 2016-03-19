var express = require('express');
var dishRouter = express.Router();

dishRouter.route('/')
    .all(function(req,res,next){
        res.writeHead(200,{'Content-type':'text/plain'});
        next()
    })
    .get(function(req,res,next){
        res.end('I will send you all dishes!');

    })
    .post(function(req,res,next){
        res.end('I will create a new dish: '+ req.body.name+' with detail: '+req.body.description);
    })
    .delete(function(req,res,next){
        res.end('I will delete all dishes!');

    });

dishRouter.route('/:dishId')
    .get(function(req,res,next){
        res.end('I will send you the dish: '+req.params.dishId);
    })
    .put(function(req,res,next){
        res.write('I will update the dish: '+req.params.dishId+'\n');
        res.end('I updated the dish with this details: '+req.body.name+' description: '+req.body.description);

    })
    .delete(function(req,res,next){
        res.end('I will delete the dish: '+req.params.dishId);
    });

module.exports = dishRouter;
