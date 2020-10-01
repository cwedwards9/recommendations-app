// When a user clicks on the search button, the GET request is sent to the api (using a proxy) and pulls movie data 
// based on user input
$(".searchBtn").on("click", function(){
    //Clear any poster images from previous searches
    $("img").remove();

    var title = $(this).prev().val();
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + title + "&limit=8&type=show&k=385951-ChaseEdw-B7D7T5KF";
    $.ajax({
      method: "GET",
      url: queryUrl
    })
    .done(getTitles)
});


// Get the title results and display them in within each card in our html
function getTitles(data){
  $(".row").removeClass("result");

  for(var i = 0; i < 8; i++){
    var movieTitle = data.Similar.Results[i].Name;
    console.log(movieTitle);
    $("#title" + i).text(movieTitle);

    getPosters(movieTitle, i);
  }
} 


// Get the poster for each title from the omdb API
function getPosters(title, index){
  var movieUrl = "https://www.omdbapi.com/?t=" + title + "&apikey=c539e965";

  $.ajax({
    method: "GET",
    url: movieUrl
  })
  .done(function(data){
    var posterUrl = data.Poster;

    // Create an img tag, add attributes, and append to each respective card
    var posterImg = $("<img>");
    posterImg.attr("src", posterUrl);
    posterImg.attr("movie-title", title);
    posterImg.addClass("poster hvr-grow");
    $("#card" + index).prepend(posterImg);

    $("input").val("");
  });
}



// When a user clicks on a movie poster (img), they will be directed to the show page with more info on that movie
$(".card").on("click", "img", function(){
  var title = $(this).attr("movie-title");
  var url = "https://www.omdbapi.com/?t=" + title + "&apikey=c539e965";

  $.ajax({
    method: "GET",
    url: url
  })
  .done(function(data){
    // Direct user to the show page with more info on the movie
    window.location.href = "show.html";

    // Store the movie data to local storage for use in the show.html file
    localStorage.setItem("Title", data.Title);
    localStorage.setItem("Year", data.Year);
    localStorage.setItem("Poster", data.Poster);
    localStorage.setItem("Plot", data.Plot);
    localStorage.setItem("Rating", data.Ratings[1].Value);
    localStorage.setItem("Actors", data.Actors);
    localStorage.setItem("Director", data.Director);
  });
});