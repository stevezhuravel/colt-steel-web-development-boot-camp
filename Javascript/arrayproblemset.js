// this create the arr
var num = ["a" , "b" , "c", 'd'];

function printReverse(num){
    // goes thru the array length - 1 and goes backward checking if is greather 
    // or equal to 0;
    // subtract one from it 
    for( var i = num.length -1; i >=0; i--){

        console.log(num[i]);
    }
}
// logs it to the console
console.log(printReverse(num));

 var arr = [1 , 2, 4 ,6];

function isUniform(arr) {
    // we start at the first number in te arr
    var first = arr[0];
    // goes thru the length of the array
    for(var i = 1; i <= arr.length; i++) {
        // this check is the first position is not equal to the second
        //  keeps checking if is equal upto the last element in the array
        if(arr[i] !== first) {
            // if it not equal is return false
            return false;
        }
    }
    return true;
}
console.log(isUniform(arr));

// var sum = [ 1, 4, 16 ];

function sumArray(sum){
    // var result = 0;
    // // goes thru the array
    // for(var i = 0; i <= sum.length; i++){
    //     // logs result after each iteration
    //     result += sum[i];
    //     // print out the result after each iteration
    //     console.log(result);

    var result = 0;
    sum.forEach(function(element){
        result += element;
    })
    return result;
    }

// logs it to the console
console.log(sumArray(sum));


function findMax(arr){
    // we start a position 1 one in array which is -
    var max = arr[0];
    for(var i = 1;  i < arr.length; i++){
        // if the number in position i of the array is greater than max
        if(arr[i] > max){
            // than max takes that number
            max = arr[i];
        }
    }
    return max;
}