let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('nav');


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
})