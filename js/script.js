let navbar = document.querySelector('#navbar');

let menu = document.querySelector('#menu-icon');

menu.addEventListener('click', () => {
    navbar.classList.toggle('nav-active');
});

menu.addEventListener('click', () => {
    menu.classList.toggle('menu-active');
});


