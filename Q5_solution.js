// Q5. Write a JavaScript program that calculates the area of a circle using the Math object's properties and methods.

let circleRadius = 10;

function calCircleArea(circleRadius){
    let AreaOfCircle = Math.PI * Math.pow(circleRadius, 2)
    console.log(`Original result = ${AreaOfCircle}`);
    console.log(`After Roundup = ${AreaOfCircle.toFixed(2)}`);
}

calCircleArea(circleRadius)