// When a user clicks on the search button, the GET request is sent to the api (using a proxy) and pulls movie data 
// based on user input
$("#searchBtn").on("click", function(){
    var title = $("#showInput").val();
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + title + "&limit=8&type=show&k=385951-ChaseEdw-B7D7T5KF";
    $.ajax({
      method: "GET",
      url: queryUrl
    })
    .done(function(data){
      for(var i = 0; i < 8; i++){
        var movieTitle = data.Similar.Results[i].Name;
        console.log(movieTitle);
        $("#card" + i + " .card-title").text(movieTitle);
      }
    });
});