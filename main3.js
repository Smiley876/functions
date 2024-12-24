//local variables
var a = 10;
var b = 27;
var c = (20 / 4);
var x = 2 ** 5;
var z = 5;
var y = 25;

//function
function show(a, b, c, x, z, y){
     document.getElementById(`sum1`).innerHTML = a + y - b + c + x - z;
      document.getElementById(`sum2`).innerHTML = c + y - a;
     return document.getElementById(`sum3`).innerHTML = x + b - z;
}


   
