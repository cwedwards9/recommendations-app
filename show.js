var title = localStorage.getItem("Title");
    var titleDisplay = document.getElementById("titleShow");
    titleDisplay.innerText = title;

    var plot = localStorage.getItem("Plot");
    var plotDisplay = document.getElementById("plotShow");
    plotDisplay.innerText = plot;

    var rating = localStorage.getItem("Rating");
    var ratingDisplay = document.getElementById("ratingShow");
    ratingDisplay.innerText = rating;

    var poster = localStorage.getItem("Poster");
    var posterDisplay = document.querySelector(".poster");
    posterDisplay.setAttribute("srcset", poster);

    var year = localStorage.getItem("Year");
    var yearDisplay = document.getElementById("yearShow");
    yearDisplay.innerText = year;

    var director = localStorage.getItem("Director");
    var directorDisplay = document.getElementById("directorShow");
    directorDisplay.innerText = "Director(s): " + director;

    var actors = localStorage.getItem("Actors");
    var actorsDisplay = document.getElementById("actorsShow");
    actorsDisplay.innerText = "Actor(s): " + actors;