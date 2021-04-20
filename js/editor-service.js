'use strict';


function initCanvas() {
    gCtx = gElCanvas.getContext('2d');
    console.log('gCtx:', gCtx);
    renderCanvas();
}