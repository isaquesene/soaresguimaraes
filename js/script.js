let btnMenu = document.querySelector('.toggle-btn'),
    menu = document.querySelector('nav'),
    header = document.querySelector('header');


btnMenu.addEventListener('click', () => {
    menu.classList.toggle('active');
    btnMenu.classList.toggle('active');
});


/*animação scroll*/
var swiper = new Swiper(".home-slider", {
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",    
      prevEl: ".swiper-button-prev",
    },
});