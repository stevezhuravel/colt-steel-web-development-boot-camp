// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     } else {
//             return false;
//         }
//     } 
    
function isEven(num){
    return(num % 2 === 0);
    

isEven(4);
isEven(21);
isEven(68);
isEven(333);

}
function factorial(num){
    // define a result variable
    var result = 1;
    // calculat efactorial and store value in result
    for (var i = 2; i <=num; i++){
        result *=  i;
    }
    // return the result variable
    return result
}
factorial(4);
factorial(10);
factorial(0);
function backFactorial(num){
    if(num === 0){
        return 1;
    }
    // define a result variable
    var result = 1;
    // calculat efactorial and store value in result
    for (var i = num - 1; i >=1; i--){
        result *=  i;
    }
    // return the result variable
    return result
}

function kebabToSnake(str){
    // replace all "-" with "_"'s
    var returnChangeString =  str.replace(/-/g, "_");
    return returnChangeString;
}
kebabToSnake("Hello World");
kebabToSnake("dogs-are-awesome");
kebabToSnake("blah");