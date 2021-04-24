'use strict'

const IMG_KEY = 'imgs';
var gFilterBy = '';

function renderGallery() {
    const imgs = getImgs();
    let strHTML = imgs.map(img => {
        return `<div class="meme-img pointer"><img class="img-card"
         onclick="onImgPick(${img.id})"
         src="img/img-square/${img.id}.jpg"></div>`
    });
    document.querySelector('.gallery-container').innerHTML = strHTML.join('');
}

function setMemesFilter(txt) {
    gFilterBy = txt;
}


function getImgs() {
    if (!gFilterBy) return gMemes;
    return gMemes.filter(meme => meme.category.includes(gFilterBy.toLowerCase()))
}

function _saveImgToStorage() {
    saveToStorage(IMG_KEY, gImgs)
};

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove);
    gElCanvas.addEventListener('mousedown', onDown);
    gElCanvas.addEventListener('mouseup', onUp);
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove);
    gElCanvas.addEventListener('touchstart', onDown);
    gElCanvas.addEventListener('touchend', onUp);
}