﻿let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('ri-menu-line');
    navbar.classList.toggle('open');
}