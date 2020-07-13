// var answer = prompt("Are we there yet;")
// //  this will prompt the user untill the user said yes or yeah
// while(answer != "yes" && answer != "yeah"){
//     var answer = prompt("Are we there yet;")
//  }
//  alert("yes we made it ")

 // this will only prompt the user once.
// if(answer === 'Yes'){
//     alert("yes we made it ")
// } else {
//     var answer = prompt("Are we there yet;")
// }

// version 2 
var answer = prompt("Are we there yet;")
//  this will prompt the user untill the user said yes or yeah
while(answer.indexOf("yes") === -1){
    var answer = prompt("Are we there yet;")
 }
 alert("yes we made it ")