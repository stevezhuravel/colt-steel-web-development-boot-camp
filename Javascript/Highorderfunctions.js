// every function has is own scope and their not shared but other functions.

// Higher Order function are they either take a function as function as their argument or they return another function.

// Set Interval takes a function it will call a function as a specfily interval time it out.

setInterval(function(){
console.log("I am an anonymous function");
console.log("This is awesome");
},2000);


// scope
// inside the function scope x is 40
function doMath(){
    var x = 40;
    console.log(x);
    }
    doMath();
    // inside the function the scope is defined as 40 after the 
    // global scope we get an error is not visable in the scope
    // since we create another variable x after the global scope this has no barring on what happens inside the function scope
    var x = "Hello"
    x = "Hello"
    