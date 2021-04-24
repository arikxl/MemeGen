'use strict';

function openHeaderMenu() {
    let menuBtn = document.querySelector('.toggle-menu-btn');
    let elMenu = document.querySelector('.nav-bar');
    if (menuBtn.classList.value.includes('hidden')) {
        menuBtn.classList.remove('hidden');        
        elMenu.style.display = 'none';
        menuBtn.innerText = '☰';
    } else {
        menuBtn.classList.add('hidden');
        elMenu.style.display = 'flex';
        menuBtn.innerText = '✖';
    }
}
