// get the age and converts it to a number 
var age = Number(prompt("what is your age"));
// if age is negavie 
if(age < 0){
    console.log("Age cannot be negative");
}
// if age is exaclly 21
 if(age === 21){
    console.log("Happy birthday");
}
// if age is odd if their is a remanider 
 if(age % 2 !== 0){
    console.log('Your age is odd.');
}
// checks if age is a perfect square
if(age % Math.sqrt(age)== 0){
    console.log("your age is a prefect square ");
}


