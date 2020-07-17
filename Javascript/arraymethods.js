var friend1 = "Charile";
var friend2 = "Liz";
var friend3 = "David";
var friend4 = "Mattie";

// This is not ideal it not DRY 

// THIS IS PERFECT CASE FOR AN ARRAY
var friends = ["Charlie", "Liz", "David", "Mattie"];
// Array are indexed starting at 0. Every slot has a corresponding number

var friends = ["Charlie", "Liz", "David", "Mattie"];

console.log(friends[0]);//Charlie

// friends[1] + “heart“ //”Liz <3 David”

// we can use index to update values 
friends[0] = "Chuck";
friends[1] = "Lizzie";

var friends = ["Chuck", "Lizzie", "David", "Mattie"];
 friends[4] = "Amelie";

var friends = ["Chuck", "Lizzie", "David", "Mattie", "Amelie"];

// we can intitalize an empty array two ways
var friends = [] // no friends
var friends = new Array() //uncommon

//Arrays can hold any type of daya

// Build in Array Methods
// Push/pop
// Shift/ushift
// indexOf
// slice


// push is used to add to the end of the array
var colors = ["Red", "Orange", "yellow"];
colors.push("green");
// [“Red”, “orange”, “yellow”, “green]

// pop remove the last item in an array
var colors = ["Red", "Orange", "yellow"];
colors.pop();
// ['Red”, “orange"]
//pop() returns the removed element
var col = colors.pop(); //orange

//unshift adds to the front of an array 
var colors = ["Red", "Orange", "yellow"];

colors.unshift("infrared");
//[“infrared”, “Red”, “orange”, “yellow”]

// shift remove the first element in the array
var colors = ["Red", "Orange", "yellow"];
colors.shift();
//[“orange”, “yellow”]

//shift() also return the removed element
var col = colors.shift() //orange

// indexOf use indexOf() to find the index of an item in an array

var friends =  ["Charile", "Liz", "David", "Mattie", "Liz"];
 //returns the first index at which a given elemtcan be found
friends.indexOf("David"); //2 
// return the first instance of liz
friends.indexOf("Liz"); //1 not 4

//returns -1 if the element is not presented
friends.indexOf("Hagrid"); //-1

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//use slice to copy the 2nd and 3d frits
//specfiy the inddex where the new array starts(1) and ends(3)
var citrus = fruits.slice(1,3);

//this does not alter the orginal fruit array
// citrus contains ["orange", "Lemon"]
// fruits contains ["Banana", "Orange", "Lemon", "Apple", "Mango"]

// you can also use slice() to copy an entire array
var nums = [1,2,3];
var otherNums = nums.slice();
//boths arrays are [1,2,3]

// nested arrays
var friendsGroups = [
    ["Harry", "Ron", "Hermione"],
    ["Malfoy", "Crabbe", "Goyle"],
    ["Mooney", "Wromtail", "Prongs"]
];

console.log(friendsGroups[2][0]);
// console.log(friendsGroups[2]); prints out ["Mooney", "Wromtail", "Prongs"]
// console.log(friendsGroups[2][0]); print out Mooney which is in array 2 and is in position 0