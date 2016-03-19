/**
 * Created by andreaortis on 16/03/16.
 */
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

solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);