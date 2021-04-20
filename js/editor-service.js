'use strict';

const gElCanvas = document.querySelector('#meme-canvas');


function renderCanvas() {
    var img = new Image();
    img.src = `./img/img-square/${gMemes.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gSelectedMeme.lines.forEach((idx) => {
            drawText(idx)
        });
    };
};