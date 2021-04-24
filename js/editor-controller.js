'use strict'

const gElCanvas = document.querySelector('#meme-canvas');
var gCurrLine;

function renderCanvas() {
    var img = new Image();
    img.src = `./img/img-square/${gMemes.selectedImgId}.jpg`;
    gSelectedMeme.selectedImgId = gMemes.selectedImgId;
    // gMemes.selectedImgId = gSelectedMeme.selectedImgId
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gSelectedMeme.lines.forEach((idx) => {
            drawText(idx);
        });
    };
    renderStickers();
};


function renderStickers() {
    let elStickersPanel = document.querySelector('.stickers-container');
    let strHTML = ``;
    gStickers.forEach(sticker => {
        strHTML += `<div class="sticker pointer"
         onclick="drawSticker(this)">${sticker}</div>`
    });
    elStickersPanel.innerHTML = strHTML
}

// function getCurrLine(index) {
//     return gMeme.lines[index]
// }

function drawText(line) {
    var currLine = line;
    gCtx.lineWidth = 0.5;
    gCtx.fillStyle = currLine.fontColor;
    gCtx.strokeStyle = currLine.strokeColor;
    gCtx.font = `${currLine.size}px ${currLine.font}`;
    gCtx.textAlign = `${currLine.align}`;
    gCtx.textBaseline = 'middle';
    gCtx.direction = 'rtl';
    gCtx.fillText(currLine.txt, currLine.pos.x, currLine.pos.y);
    gCtx.strokeText(currLine.txt, currLine.pos.x, currLine.pos.y);
    gCurrLine = line;
}



function onAddTxt(text) {
    changeMemeProp('txt', text.value);
}

function onAddLine() {
    addTextLine();
    renderCanvas();
}
var count = 0;

function onSwitchLine() {
    if (gSelectedMeme.lines.length === 1) return;
    gSelectedMeme.selectedLineIdx++;

    if (gSelectedMeme.selectedLineIdx >2) gSelectedMeme.selectedLineIdx ===0;
    console.log('gSelectedMeme.selectedLineIdx:', gSelectedMeme.selectedLineIdx)
    // dont know why
}

function onMoveLine(val) {
    gCurrLine.pos.y += val;
    renderCanvas();
}

function clearLine() {
    gCurrLine.txt = '';
    document.querySelector('.text-line').value = '';
    renderCanvas();
}

function chooseFontSize(fontSize) {
    changeMemeProp('size', +fontSize.value);
    document.querySelector('.font-size-input span').innerText = +fontSize.value;
};

function chooseTextAlign(align) {

    if (+align.value === 1) {
        gCurrLine.pos.x = 50;
        gCurrLine.align = 'end';
    };
    if (+align.value === 2) {
        gCurrLine.pos.x = 250;
        gCurrLine.align = 'center';
    }
    if (+align.value === 3) {
        gCurrLine.pos.x = 450;
        gCurrLine.align = 'start';
    };
    renderCanvas()
};

function chooseFont(font) {
    changeMemeProp('font', font.value);
    renderCanvas();
}

function chooseFontColor(color) {
    changeMemeProp('fontColor', color.value);
    renderCanvas();
}

function chooseStrokeColor(color) {
    gCurrLine.strokeColor = color.value;
    renderCanvas();
}

function drawSticker(sticker) {
    // sticker.style.color = gSelectedMeme.lines[0].fontColor;
    console.log(sticker.innerText);
}


function downloadCanvas(elLink) {
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'Arik-meme.jpg';
}

function shareToFacebook(elForm, ev) {
    ev.preventDefault();
    document.querySelector('#imgData').value = gCanvas.toDataURL("image/jpeg");
    doUploadImg(elForm, onSuccess);

    function onSuccess(uploadedImgUrl) {
        var elShareBtn = document.querySelector('.share-btn');
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl);
        elShareBtn.innerHTML = `
            <a class="btn share-msg" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}"
             title="Share on Facebook" target="_blank"
              onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}');
              return false;">Share on Facebook   
            </a>`;
    };
};

function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('//ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function (res) {
            return res.text();
        })
        .then(onSuccess)
        .catch(function (err) {
            console.error(err);
        });
};


function saveMeme() {
    const memeUrl = (gElCanvas.toDataURL());
    gMyMemes.push({
        img: memeUrl,
        imgId: gMyMemesId++,
        lines: [...gSelectedMeme.lines]
    });
    console.table(gMyMemes);
    saveToStorage('My MEMES', gMyMemes);
}