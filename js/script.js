window.addEventListener('DOMContentLoaded', () => {
    const headerBurger = document.querySelector('.header__burger'),
          headerMenu = document.querySelector('.header__row'),
          body = document.querySelector('body');

    headerBurger.addEventListener('click', ()=> {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        body.classList.toggle('lock');
    });
});