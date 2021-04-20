'use strict'




function drawText() {
    var currLine = gSelectedMeme.lines[0];
    gCtx.lineWidth = 2;
    gCtx.fillStyle = currLine.strokeColor;
    gCtx.strokeStyle = currLine.fontColor;
    gCtx.font = `${currLine.size}px ${currLine.font}`;
    gCtx.textAlign = `${currLine.align}`;
    gCtx.textBaseline = 'middle';
    gCtx.fillText(currLine.txt, currLine.pos.x, currLine.pos.y);
    gCtx.strokeText(currLine.txt, currLine.pos.x, currLine.pos.y);
}

function onAddTxt() {
    gSelectedMeme.lines[0].txt = document.querySelector('.text-line').value;
    renderCanvas()
}