'use strict'

const gElCanvas = document.querySelector('#meme-canvas') 


function renderCanvas() {
    const img = new Image()
    img.src = `./img/img-square/${gMemes.selectedImgId}.jpg`;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gMeme.lines.forEach((line, idx) => {
            drawText(idx)
            if (gMeme.lines.length && !gMeme.exportReady) markActiveLine()
        });
    }
}