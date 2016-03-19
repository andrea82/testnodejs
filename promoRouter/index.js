/**
 * Created by andreaortis on 18/03/16.
 */

module.exports = function(express,bodyParser){

    var promoRouter = express.Router();
    promoRouter.use(bodyParser.json());
    promoRouter.route('/')
        .all(function(req,res,next){
            res.writeHead(200,{'Content-type':'text/plain'});
            next()
        })
        .get(function(req,res,next){
            res.end('I will send you all promotion!');

        })
        .post(function(req,res,next){
            res.end('I will create a new promotion: '+ req.body.name+' with detail: '+req.body.description);
        })
        .delete(function(req,res,next){
            res.end('I will delete all promotions!');

        });

    promoRouter.route('/:promoId')
        .get(function(req,res,next){
            res.end('I will send you the promotion: '+req.params.promoId);
        })
        .put(function(req,res,next){
            res.write('I will update the promotion: '+req.params.promoId+'\n');
            res.end('I updated the promotion with this details: '+req.body.name+' description: '+req.body.description);

        })
        .delete(function(req,res,next){
            res.end('I will delete the promotion: '+req.params.promoId);
        });

    return promoRouter;
}
