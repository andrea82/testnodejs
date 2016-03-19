/**
 * Created by andreaortis on 16/03/16.
 */
var rect = require('./rectangle-1');

function solveRect(l,b){
    console.log("Solving rectangel with l: "+ l +" and b = "+ b );

    if(l < 0 || b < 0)
    {
        console.log("Rectangle must have dimentions greater than zero l = "+ l + " and b = "+b);
    }
    else
    {
        console.log('Area a = '+ rect.area(l,b));
        console.log("Perimeter p = "+ rect.perimeter(l,b));
    }
}


solveRect(2,4);
solveRect(3,5);
solveRect(-3,5);