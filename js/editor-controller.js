'use strict'

const gElCanvas = document.querySelector('#meme-canvas');


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



function drawText() {
    var currLine = gSelectedMeme.lines[0];
    gCtx.lineWidth = 0.5;
    gCtx.fillStyle = currLine.fontColor;
    gCtx.strokeStyle = currLine.strokeColor;
    gCtx.font = `${currLine.size}px ${currLine.font}`;
    gCtx.textAlign = `${currLine.align}`;
    gCtx.textBaseline = 'middle';
    gCtx.direction = 'rtl',
        gCtx.fillText(currLine.txt, currLine.pos.x, currLine.pos.y);
    gCtx.strokeText(currLine.txt, currLine.pos.x, currLine.pos.y);
}

function onAddTxt(text) {
    changeMemeProp('txt', text.value)
}

function onAddLine() {
    addTextLine()
    renderCanvas()
}


function onMoveLine(val) {
    var textLine = gSelectedMeme.lines[0]
    var linHeight = textLine.pos.y
    if (val === 'up') textLine.pos.y = linHeight - 5
    else textLine.pos.y = linHeight + 5
    renderCanvas()
}



function clearCanvas() {
    gSelectedMeme.lines[0].txt = '';
    document.querySelector('.text-line').value = '';
    renderCanvas();
}

function chooseFontSize(fontSize) {
    changeMemeProp('size', +fontSize.value)
    document.querySelector('.font-size-input span').innerText = +fontSize.value;
};

function chooseTextAlign(align) {

    if (+align.value === 1) {
        gSelectedMeme.lines[0].pos.x = 50;
        gSelectedMeme.lines[0].align = 'end';
    };
    if (+align.value === 2) {
        gSelectedMeme.lines[0].pos.x = 250;
        gSelectedMeme.lines[0].align = 'center';
    }
    if (+align.value === 3) {
        gSelectedMeme.lines[0].pos.x = 450;
        gSelectedMeme.lines[0].align = 'start';
    };
    renderCanvas()
};

function chooseFont(font) {
    changeMemeProp('font', font.value)
}

function chooseFontColor(color) {
    changeMemeProp('fontColor', color.value)
}

function chooseStrokeColor(color) {
    gSelectedMeme.lines[0].strokeColor = color.value;
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
        // elShareBtn.style.width = '100%';
        elShareBtn.innerHTML = `
            <a class="btn share-msg" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}"
             title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}');
              return false;">Click again to share on Facebook   
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
    console.table(gMyMemes)
    saveToStorage('My MEMES', gMyMemes);

}