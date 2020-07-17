//this function capitalize the first char in a string

function capitalize(str){
    //  slice does takes everything after the first letter and combines it 
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris"; //"paris"
var capital = capitalize(city); //"Paris"

//we can capture the retuend value in a variable

//  we do not need a if else statement because if we pass anything that is not a number is short cirucus it 
function capitalize(str){
    if(typeof str  === "nummber"){
        return "that is not a string"
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
var city = "paris"; //"paris"
var capital = capitalize(city); //"Paris"

var num = 37 //37
var capital = capitalize(num) // "this is not a string" 

// function declaration
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
// here we are just assigned the function to variable in one line
// function expression
var capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}