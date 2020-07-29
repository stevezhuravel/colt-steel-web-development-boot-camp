
var movies = [
    {
        watched: "true",
        title: "21 jump street",
        stars: "4 stars"
    },
    {
        watched: "true",
        title: "Bob burgers",
        stars: "3 stars"
    },
    {
        watched: "true",
        title: "22 jump street",
        stars: "5 stars"
    },
    {
        watched: "false",
        title: "Les Miserables",
        stars: "no stars"
    }
]
movies.forEach(function(movie){
    var result = "you have";
    if(movie.watched){
        result += "watched";
    }else{
        result += "not seen"
    }
    result += "\" " + movie.title + "\" "; console.log();
    result += movie.stars + "stars";
    console.log(result);
})
