// suppose i wanted to model a single person: name age and city
var person = ["Cindy", 32, "Missoula"];

// to retrive the person's home town
// this is not very meaninngful code
person[2];  
// what if i accidentally reveresed the order
 var person2 = ["Travis", "Los Angles", 21];

//  This is perfect use for an object
// this is how we can take the person array of name age and city 
// propery colon and valuefor each 
// unlike an array, objects have no order
var person = {
    name: "Cindy",
    age: 32,
    city: "Missoula"
};
var person2 = {
    name: "Travis",
    city: "LA",
    age: 21
};

// to update age
person["age"] +=1;
// to update city
person2.city = "London";

// to print it out we use bracket notation, similar to arrays:
console.log(person2[name]);

// dot notation
console.log(person2.name);

// you cannot use dot notaion if the propert starts with a number
// invalid
// someObject.1blash  

// valid
// soneObject["1blah"]

// you can lookup using a variable with bracket notaion
var str = "name";
// doesn't look up name
// someObject.str
// does evulate str and looks for "name"
// someObject[str]

// you cannot use dot notation for property values with spaces
// this will be invalid
// someObject.fav color

// this is valid
// someObject0["fav color"]

// like arrays there are a few methods of initalizing objects

// make an empty object and then add to it 
var person2 = {}
person2.name = "Travis";
person2.age = 21;
person.city = "LA";

// all at once
var person2 = {
    name: "Travis",
    city: "LA",
    age: 21
};

// another way of initalizing an object 
var person2 = new Object();
person2.name = "Travis";
person2.age = 21;
person.city = "LA";


// comparing arrays and objects both use key values pairs 
var dogs = ["Rusty," ,"Lucky", "Bubba" ];

// reterive the second item
dogs[1];
// to add an item to an array  you need to specfiy where you want to add

// to change
dogs[1]
dogs[1] = "Lucy"
dogs.push("Wyatt")

var dogs ={
    name: "Bubba",
    breed: "Lab"
};
dog["name"]
dog.name

// to add an item to an objects
dog["age"] = 6;
dog.age = 6;

dogs.breed = "Black Lab"

// Neested object an arrays

// where we make an array of post where is it own object
var posts = [
    {
        title: "Cats are medicore",
        author: "Colt",
        comments: ["Awesme post, terroble post"]
    },
    {
        title: "Cats are actually awesome",
        autheor: "Cat Luvur",
        comments: ["<3", "Go"]
    }
]

var someObject = {
    friends:[
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};
// if we wanted to get Malofoy from someobject 
// we will go on layer at a time
// first we need to access someObject than friends  has three object
// at position 0 is Malfoy so we just do .name
// this print out the name with is in position 0 of friend in someObject
someObject.friends[0].name
