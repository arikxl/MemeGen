'use strict';


var gStickers = ['❤', '😎', '👍🏻', '💩'];

function initCanvas() {
    gCtx = gElCanvas.getContext('2d');
    renderCanvas();
}

function addTextLine() {
    if (gSelectedMeme.lines.length > 2) return;
    gSelectedMeme.lines.push({
        txt: 'שלום, אני שורה חדשה',
        pos: {
            x: gElCanvas.width / 2,
            y: 250
        },
        size: 40,
        align: 'center',
        fontColor: 'white',
        strokeColor: 'black',
        font: 'Heebo, sans-serif',
    });
    if (gSelectedMeme.lines.length === 3) {
        gSelectedMeme.lines[2].pos.y = 350;
        gSelectedMeme.lines[2].txt = 'מתוקההה כמה שורות';
    }
    console.table(gSelectedMeme.lines);
    renderCanvas();
}

function changeMemeProp(property, val) {
    gCurrLine[property] = val;
    renderCanvas();
};

