var link = document.querySelector(".search-button");
var popup = document.querySelector(".modal-window");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    if(popup.classList.contains('hide')){
    popup.classList.remove('hide');
    popup.classList.add('show');
  }
  else{
    popup.classList.add('hide');
  }
});
