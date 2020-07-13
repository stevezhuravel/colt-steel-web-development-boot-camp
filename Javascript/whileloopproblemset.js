// print out all the number between -10 and 20
var count = -10;
while(count <= 19){
    console.log("count is: " + count);
    count++
}
// console.log("prints out all the numbers that are even between 10 and 40");
var countTwo = 10;
while(countTwo <= 40){
    console.log("count is: " + countTwo);
    // print all the even number between 10 and 40
    countTwo+=2
}

// console.log("prints out all the numbers that are odd between 300 and 333");
var countThree = 300;
while(countThree <= 333){
    if(countThree % 2 === 1){
        console.log("countThree is: " + countThree );
    }
    countThree ++;
}
// console.log("prints out all the numbers that are divisble between 5 and 50");
var countFour = 5
while(countFour <= 50){
    if(countFour % 3 === 0 && countFour % 5 === 0){
        console.log("countFour is: " + countFour);
    }
    countFour++;
}