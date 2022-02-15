let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


console.log(menu)
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}