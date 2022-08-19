
const menuEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
menuEmail.addEventListener('click', toogleDesktopMenu);
function toogleDesktopMenu(){
    // classList.toogle coloca o quita la clase inactive dependiendo si la tiene
    // se la quita si no la tiene se la pone
    deskMenu.classList.toggle('inactive');
}