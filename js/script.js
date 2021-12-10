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

function showInfo(element) {

  $('#' + element).toggle("slow", function(){
    if($('#' + element).is(":visible")) {
      $('#' + element).siblings('.street-img').text('Hide info');
    } else {
      $('#' + element).siblings('.street-img').text('Show info');
    }

  });
}
