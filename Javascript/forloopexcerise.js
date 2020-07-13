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