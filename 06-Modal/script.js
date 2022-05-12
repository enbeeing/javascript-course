'use strict';

// dom elements
const body = document.querySelector('body');
const modal = body.querySelector('.modal');
const overlay = body.querySelector('.overlay');
// btns
const closeModalBtn = modal.querySelector('.close-modal');
const showModalBtns = body.querySelectorAll('.show-modal');

// classes for css
const hiddenClass = 'hidden';

// boolean just for fun :D
let isModalHidden = true;

// add eventListeners
showModalBtns.forEach(btn => {
    btn.addEventListener('click', displayModal);
});
closeModalBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && !isModalHidden){
        hideModal();
    }
});

function displayModal(){
    removeClass(modal, hiddenClass);
    removeClass(overlay, hiddenClass);

    isModalHidden = false
}

function hideModal(){
    addClass(modal, hiddenClass);
    addClass(overlay, hiddenClass);
    
    isModalHidden = true;
}

// funtions to add/remove element class
function addClass(element, classToAdd){
    element.classList.add(classToAdd);
}
function removeClass(element, classToRemove){
    element.classList.remove(classToRemove);
}