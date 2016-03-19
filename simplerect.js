/**
 * Created by andreaortis on 16/03/16.
 */
var rect = {
    perimeter:function(x,y){
        return (2*(x + y));
    },
    area:function(x,y){
        return (x * y);
    }
}


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