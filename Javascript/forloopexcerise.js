console.log("print all the number between -10 and 20");
for(var i = -10; i<=19; i++){
    console.log(i);
}
console.log("print all the number between 10 and 40");
// for(var l = 10; l <=40; l+=2){
//     console.log(l);
// }
for(var i = 10; i <=40; i++){
    if(i%2 === 0){
        console.log(i);
    }
}
console.log("print all the odd number between 300 and 333");
for(var i = 300; i <=333; i++){
    if( i % 2 === 1){
        console.log(i);
    }

}
console.log("print all the  number divisable between 3 and 5 and 50");
for(var i = 5; i <= 50; i++){
    if( i % 3 === 0  && i % 5 === 0){
        console.log(i);
    }

}

// to loop over an array usinga for loop we use of the array's length property
var colors = ["red", "orange", "yellow", "green" ];
for(let i = 0; i < colors.length; i++){
    // this print out each color
    console.log(colors[i]);
}
// forEach
// javascript provides an easy built-in way of iterating over an array: ForEach
// 
// arr.forEach(someFunction)

var colors = ["red", "orange", "yellow", "green" ];

// colors is holding all the colors 
colors.forEach(function(color){
    // color is a placeholdre, call it what ever you want
    // what ever you call it passed to where you need to call it
    console.log(colors);
});

function printColor(color){
    console.log("***********");
    console.log("purple");
    console.log("***********");
}
// we call the array and do for each on the name of the method we made 
colors.forEach(printColor);

// the difference between for and forEach
// in the for loop we dealing with a number

// inforEach we are dealing with a temporay name that we have created name or item