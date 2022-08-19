
const menuEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMennu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toogleDesktopMenu(){
    // classList.toogle coloca o quita la clase inactive dependiendo si la tiene
    // se la quita si no la tiene se la pone
    deskMenu.classList.toggle('inactive');
    // aqui lo que estamos haciendo es oculando las cajitas para que no se sobre
    //pongan unas a las otras cuando una se abre la otra se cierra
    aside.classList.add('inactive');
    mobileMennu.classList.add('inactive');
}
function toogleMobileMenu(){
    mobileMennu.classList.toggle('inactive');
    // lo mismo para cuando una se abra la otra se cierre
    aside.classList.add('inactive');
    deskMenu.classList.add('inactive');
}
function toogleCarritoAside(){
    aside.classList.toggle('inactive');
    mobileMennu.classList.add('inactive');
    deskMenu.classList.add('inactive');
}