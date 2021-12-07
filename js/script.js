function changeTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var i = document.getElementById("logo-img");
  if (element.classList == "dark-mode") {
    i.src = "wikipedia-logo-black.svg";
    i.style.backgroundColor = "white";
  } else {
    i.src = "wikipedia-logo.svg";
  }
}

function showInfo() {

    var btn = $('.street-img').html();
    if (btn == "Show info") {
      $('.street-img-info').show();
      $('.street-img').text('Hide info');
    } else if (btn == "Hide info"){
      $('.street-img-info').hide();
      $('.street-img').text('Show info')
    }

}
