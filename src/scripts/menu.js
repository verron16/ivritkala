const menuBurger = document.querySelector('.top-bar-burger');
const menu = document.querySelector('.menu');

menuBurger.addEventListener('click', openMenu)

function openMenu() {
menuBurger.classList.toggle('menu-open');
menu.classList.toggle('menu-sm')
}

function closeMenu() {
  menuBurger.classList.remove('menu-open');
  menu.classList.remove('menu-sm');
}

let links = document.querySelectorAll('.menu-item-link').forEach(a => a.addEventListener('click', ev => {
  let id = ev.target.getAttribute('href').slice(1)
  switch (id) {
    case 'footer': closeMenu(); break;
    case 'author': closeMenu(); break;
    case 'tarif': closeMenu(); break;
    case 'reviews': closeMenu(); break;
    default: return;
  }
}))

// settings animations

wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       300,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();



