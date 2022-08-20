
const menuEmail = document.querySelector('.navbar-email');
const deskMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMennu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');


menuEmail.addEventListener('click', toogleDesktopMenu);
menuHamIcon.addEventListener('click', toogleMobileMenu);
menuCarritoIcon.addEventListener('click', toogleCarritoAside);


function toogleDesktopMenu(){
    // classList.toogle coloca o quita la clase inactive dependiendo si la tiene
    // se la quita si no la tiene se la pone
    deskMenu.classList.toggle('inactive');
    // aqui lo que estamos haciendo es oculando las cajitas para que no se sobre
    //pongan unas a las otras cuando una se abre la otra se cierra
    shoppingCartContainer.classList.add('inactive');
    mobileMennu.classList.add('inactive');
}
function toogleMobileMenu(){
    mobileMennu.classList.toggle('inactive');
    // lo mismo para cuando una se abra la otra se cierre
    shoppingCartContainer.classList.add('inactive');
    deskMenu.classList.add('inactive');
}
function toogleCarritoAside(){
    shoppingCartContainer.classList.toggle('inactive');
    mobileMennu.classList.add('inactive');
    deskMenu.classList.add('inactive');
}


// ----------------------
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Pantalla',
    price: 220,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Compu',
    price: 1200,
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
// for (pro of productList){
//     console.log(pro.name);
// } no muestra el name de los objetos
// for (pro in prductList){
//     console.log(pro);
// } esto nos muestra los indices del array

// para las buenas practicas es recomendable hacer de esto una funcion
// ejemplo

function renderProduct(arrayProducts){
    for (product of arrayProducts){
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
    
        const productPrice = document.createElement('p');
        productPrice.innerHTML = '$ '+ product.price;
    
    
        const productName = document.createElement('p');
        productName.innerHTML = product.name;
        // estamos metiendo dentro del div a los parafos
        productInfoDiv.append(productPrice,productName);
    
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
    
        // despues de crear todos las etiquetas comoenzamos a mequetar para
        // que quede como en el ejemplo
        productImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        // dentro de figure estamos metiendo la imagen como en la muestra como hijo
        productInfoFigure.appendChild(productImgCart);
        // estamos maquetando HTML dentro de JS
        productInfo.append(productInfoDiv, productInfoFigure);
    
        productCard.append(productImg,productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}
// llamar a la funcion y darle el array que puede ser cualquiera
renderProduct(productList);
