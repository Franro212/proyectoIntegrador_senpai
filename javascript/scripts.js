const navBar = document.querySelector(".navBar")
const botonNav = document.querySelector(".botonNav")

botonNav.addEventListener("click", () =>{
    navBar.classList.toggle("navBar_visible");
});