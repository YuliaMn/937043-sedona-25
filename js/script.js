var link = document.querySelector(".search-button");
var popup = document.querySelector(".modal-window");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("show");
});
