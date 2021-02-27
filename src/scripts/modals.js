const modalWindow = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const btnModalOpen = document.querySelector('.tarif-wrapper-item-btn');
const btnModalClose = document.querySelector('.modal-close-icon');

btnModalOpen.addEventListener('click', openModal);
btnModalClose.addEventListener('click', closeModal);

function openModal(e) {
    e.preventDefault();
    modalWindow.style.display = 'block';
    modalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.onclick = (e) => {
        if (e.target == modalWrapper || e.target == btnModalClose) {
            closeModal()
        }
    }
}

function closeModal() {
    modalWindow.style.display = 'none';
    modalWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}