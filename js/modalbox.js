var modal = document.getElementById("ModalBox");

var btn = document.getElementById("PrivacyBtn");

var span = document.getElementsByClassName("close")[0];

var span2 = document.getElementsByClassName("close2")[0];


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

span2.onclick = function() {
  modal.style.display = "none";
}

id.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
