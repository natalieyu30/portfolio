// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuBranding = document.querySelector('.menu-branding');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');
const navLinks = document.querySelectorAll('.nav-link')


// Set initial state of menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
navLinks.forEach(link => {
  link.addEventListener('click', toggleMenu);
})

function toggleMenu() {
  showMenu = (menuBtn.classList.contains('close'))? true : false;
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuBranding.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // set menu state
    showMenu= true;
    // console.log('ture')
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // set menu state
    showMenu= false;
  }
}

window.addEventListener('click', (e) => {
  if(showMenu && !e.target.classList.contains('menu') && !e.target.classList.contains('menu-btn')) {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuBranding.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // set menu state
    // showMenu= false;
  }
})



const currentYear = document.querySelector('.get-year');
const getYear = new Date().getFullYear().toString()
currentYear.textContent=getYear