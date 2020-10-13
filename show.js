// Accessing local storage items and inserting them into the elements of the show.html page

const title = localStorage.getItem("Title");
const titleDisplay = document.getElementById("titleShow");
titleDisplay.innerText = title;

const plot = localStorage.getItem("Plot");
const plotDisplay = document.getElementById("plotShow");
plotDisplay.innerText = plot;

const rating = localStorage.getItem("Rating");
const ratingDisplay = document.getElementById("ratingShow");
ratingDisplay.innerText = "IMDb- " + rating;

const poster = localStorage.getItem("Poster");
const posterDisplay = document.querySelector(".poster");
posterDisplay.setAttribute("srcset", poster);

const year = localStorage.getItem("Year");
const yearDisplay = document.getElementById("yearShow");
yearDisplay.innerText = year;

const director = localStorage.getItem("Director");
const directorDisplay = document.getElementById("directorShow");
directorDisplay.innerText = "Director(s): " + director;

const actors = localStorage.getItem("Actors");
const actorsDisplay = document.getElementById("actorsShow");
actorsDisplay.innerText = "Actor(s): " + actors;

getTitleVideo(title);


// Gets the url to a youtube video for the movie/show title
function getTitleVideo(title){
    let titleSearch = title.replaceAll(" ", "+");
    let queryUrl = "https://cors-anywhere.herokuapp.com/https://tastedive.com/api/similar?q=" + titleSearch + "&info=1&limit=1&k=385951-ChaseEdw-B7D7T5KF";
    console.log(queryUrl);
    $.ajax({
    method: "GET",
    url: queryUrl
    })
    .done(function(data){
    localStorage.setItem("Video", data.Similar.Info[0].yUrl);

    const video = localStorage.getItem("Video");
    const videoDisplay = document.querySelector("iframe");
    videoDisplay.src = video;
    });
}