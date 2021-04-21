'use strict';


function initCanvas() {
    gCtx = gElCanvas.getContext('2d');
    console.log('gCtx:', gCtx);
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
    console.table(gSelectedMeme.lines);
    // renderCanvas()
}

function changeMemeProp(property, val) {
    gSelectedMeme.lines[0][property] = val;
    renderCanvas();
};

function onSuccess(uploadedImgUrl) {
    uploadedImgUrl = encodeURIComponent(uploadedImgUrl);
    document.querySelector('.share-btn').innerHTML = `
    <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}"
     title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}');
      return false;">Facebook   
    </a>`;
};