'use strict'


var gCanvas;
var gCtx;

function onInit() {
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
}

function onSearchInput(txt, ev) {
    if (ev.type === 'click') {
        txt.toLowerCase()
    }
    setMemesFilter(txt)
    renderGallery()
}

function onImgPick(id) {
    gMemes.selectedImgId = id;
    openModal();
};

function openModal() {
    document.querySelector('.close-modal').style.display = 'block';
    document.querySelector('.gallery-container').style.display = 'none';
    document.querySelector('.search-container').style.display = 'none';
    document.querySelector('.meme-editor-container').style.display = 'flex';
    renderCanvas()
}

function closeModal() {
    document.querySelector('.gallery-container').style.display = 'grid';
    document.querySelector('.search-container').style.display = 'flex';
    document.querySelector('.close-modal').style.display = 'none';
    document.querySelector('.meme-editor-container').style.display = 'none';
    gSelectedMeme.lines[0].txt = '';
    document.querySelector('.text-line').value = ''
    gSelectedMeme.lines[0].pos.x = 250;
    gSelectedMeme.lines[0].align = 'center';
}