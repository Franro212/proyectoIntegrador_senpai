const navBar = document.querySelector(".navBar")
const botonNav = document.querySelector(".botonNav")
function botn (){
    navBar.classList.toggle("navBar_visible");
}
botonNav.addEventListener("click", botn
);

/*POPUP*/

var modal = document.getElementById("myModal")
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];


btn.onclick = function () {
      modal.style.display = "block";
    }

    span.onclick = function () {
      modal.style.display = "none";
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
/*-------*/
