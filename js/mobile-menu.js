const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

function openMobileMenu() {
    mobileMenu.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }
  
  function closeMobileMenu() {
    mobileMenu.classList.remove('is-open');
    document.body.style.overflow = '';
  }

menuBtnOpen.addEventListener('click', openMobileMenu);
menuBtnClose.addEventListener('click', closeMobileMenu);
