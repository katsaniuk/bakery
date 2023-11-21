const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelector('.modal-btn-close');

// const toggleModal = () => modal.classList.toggle('is-hidden');

function openModaleMenu() {
    modal.classList.remove('is-hidden');
    document.body.style.overflow = 'hidden';
  }
  
  function closeModaleMenu() {
    modal.classList.add('is-hidden');
    document.body.style.overflow = '';
  }

modalBtnOpen.forEach(btn => {
    btn.addEventListener('click', openModaleMenu);
});
modalBtnClose.addEventListener('click', closeModaleMenu);