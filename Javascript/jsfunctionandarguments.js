// // this is not ideal way of doing this 

// console.log("Twinkle Twinkle Little Star");
// console.log("How I Wonder what you are");
// console.log("Up above the world so high,");
// console.log("Like a diamond in the sky");

// // To sing it again I have to rewrite all the code  This is not DRY
// // this is not ideal
// console.log("Twinkle Twinkle Little Star");
// console.log("How I Wonder what you are");
// console.log("Up above the world so high,");
// console.log("Like a diamond in the sky,");



// this is a better way to do this 
function singsong(){
    console.log("Twinkle Twinkle Little Star");
    console.log("How I Wonder what you are");
    console.log("Up above the world so high,");
    console.log("Like a diamond in the sky,");
    }
    
singsong()
singsong()
singsong()
singsong()

// Arguments
// Often we want to write function that takes inputs
function square(num){
    console.log(num * num);
}

square(10) // prints 100
square(3) // prints 9
square(4) // prints 16


function sayHello() {

console.log("Hello there” + !");
}

sayHello()

function sayHello(name) {

console.log("Hello there " + name)
}

sayHello("Rusty") 
// this will print out “Hello there Rusty
// can print out any name

// function can have as many arguments as needed
function area(length, width) {
console.log(length * width);
}
area(9,2) //18


// function can have as many arguments as needed
function greet(person1, person2, person3) {
console.log("hi "   + person1);
console.log("hi "  + person2);
console.log("hi " + person3); 
}
greet("Harry" , "Ron” , “Hermione")

function greet(person1, person2, person3) {
    console.log("hi "   + person1);
    console.log("hi "  + person2);
    console.log("hi " + person3); 
    }
    // if we left one name out of it it will be out
    // Hi underfined
    greet("Harry" , "Ronnie")