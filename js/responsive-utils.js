'use strict';

function hide(element) {
    element.classList.add('show');
}
function showHidden(element) {
    element.classList.remove('show');
    console.log('element:', element)
}


function openHeaderMenu(){
    let menuBtn = document.querySelector('.toggle-menu-btn');
    let elMenu = document.querySelector('.nav-bar');
    toggleMenu(menuBtn, '☰', '✖', elMenu)
}

function toggleMenu(currElement, textOpen, textClose, elMenu) {
    if (currElement.classList.value.includes('hidden')) {
        currElement.classList.remove('hidden');
        currElement.innerText = textClose;
        showHidden(elMenu);
    }
    else {
        currElement.classList.add('hidden');
        currElement.innerText = textOpen;
        hide(elMenu);
    }
}