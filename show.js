var title = localStorage.getItem("Title");
var titleDisplay = document.getElementById("titleShow");
titleDisplay.innerText = title;

var poster = localStorage.getItem("Poster");
var posterDisplay = document.querySelector(".poster");
posterDisplay.setAttribute("srcset", poster);