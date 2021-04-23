'use strict';

function openHeaderMenu() {
    let menuBtn = document.querySelector('.toggle-menu-btn');
    let elMenu = document.querySelector('.nav-bar');
    if (!menuBtn.classList.value.includes('hidden')) {
        menuBtn.classList.add('hidden');
        elMenu.style.display = 'flex';
        menuBtn.innerText = '✖';
    } else {
        menuBtn.innerText = '☰';
        elMenu.style.display = 'none';
        menuBtn.classList.remove('hidden');
    }
}
