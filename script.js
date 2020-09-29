// When a user clicks on the search button, the GET request is sent to the api (using a proxy) and pulls movie data 
// based on user input
$("#searchBtn").on("click", function(){
    var title = $("#showInput").val();
    var queryUrl = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + title + "&limit=1&type=show&k=385951-ChaseEdw-B7D7T5KF";
    $.ajax({
      method: "GET",
      url: queryUrl
    })
    .done(function(data){
        var movieTitle = data.Similar.Results[0].Name;
        console.log(data);
        $("#test").text(movieTitle);
    });
});