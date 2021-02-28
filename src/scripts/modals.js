const modalWindow = document.querySelector('.modal');
const modalWrapper = document.querySelector('.modal-wrapper');
const btnModalOpen = document.querySelectorAll('.tarif-wrapper-item-btn');
const btnModalClose = document.querySelector('.modal-close-icon');
let priceModal = document.querySelector('.modal-content-tarif-price-content');
let tarifList = document.querySelector('.modal-content-tarif-list');
let titleModal = document.querySelector('.modal-content-tarif-title');

btnModalOpen.forEach(btn => btn.addEventListener('click', event => {
    event.preventDefault();
    initPrice();
    initDateTitleTodo();
    openModal();;
   
}))
btnModalClose.addEventListener('click', closeModal);

function initPrice() {
    let prevSibl = event.target.previousSibling.childNodes[0].textContent;
    priceModal.textContent = prevSibl;
}

function initDateTitleTodo() {
    
    let allSiblings = event.target.parentNode.childNodes;
    titleModal.textContent = allSiblings[1].textContent;
    let oldList = allSiblings[2];
    tarifList.innerHTML = oldList.innerHTML;
    let deleteClassTarifList = document.querySelectorAll('.modal .tarif-list-item').forEach(todo => todo.classList.remove('tarif-list-item'))
    let addClassTarifList = document.querySelectorAll('.modal ul li').forEach(todo => todo.classList.add('modal-content-tarif-list-item'))
}

function openModal() {
    modalWindow.style.display = 'block';
    modalWrapper.classList.add('active');
    document.body.style.overflow = 'hidden';
    document.onclick = (e) => {
        if (e.target == modalWrapper || e.target == btnModalClose) {
            closeModal();
        }
    }
}

function closeModal() {
    modalWindow.style.display = 'none';
    modalWrapper.classList.remove('active');
    document.body.style.overflow = 'auto';
}