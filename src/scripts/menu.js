const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', openMenu)

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-sm')
}

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       200,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



