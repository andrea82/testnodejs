/**
 * Created by andreaortis on 16/03/16.
 */
    var argv = require('yargs')
        .usage('Usage: node $0 --l=[num] --b=[num]')
        .demand(['l','b'])
        .argv;

    var rect = require('./rectangle-2');

    function solveRect(l,b){
        console.log("Solving rectangel with l: "+ l +" and b = "+ b );

        rect(l,b,function(err,rectangle){

            if(err)
            {
                console.log(err);
            }
            else
            {
                console.log('Area a = '+ rectangle.area(l,b));
                console.log("Perimeter p = "+ rectangle.perimeter(l,b));
            }
        });
    }

    solveRect(argv.l,argv.b);
