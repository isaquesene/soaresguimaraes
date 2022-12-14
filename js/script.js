let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('nav'),
    header = document.querySelector('header');


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
});


/*animação scroll*/
