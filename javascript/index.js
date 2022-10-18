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

// FORMULARIO

let form = document.getElementById("my-form");
    
async function handleSubmit(event) {
  event.preventDefault();
  let status = document.getElementById("my-form-status");
  let data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      alert("Su mensaje fue enviado con exito")
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Hay un problema en el envio de su mensaje"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Hay un problema en el envio de su mensaje"
  });
}
form.addEventListener("submit", handleSubmit)

/*-------*/
