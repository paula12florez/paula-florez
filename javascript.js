// // console.log("este es un mensaje secreto") 
// console.log(document.querySelector(".menu"));
const menu = document.querySelector(".menu");
const burgerButton = document.querySelector("#burgermenu");

burgerButton.addEventListener('click', hidenShow)
function hidenShow() {
  if(menu.classList.contains('is-active')){
    menu.classList.remove('is-active');
  }else{
    menu.classList.add('is-active');
  }
  
}