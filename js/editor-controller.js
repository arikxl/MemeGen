'use strict'

const gElCanvas = document.querySelector('#meme-canvas');


function renderCanvas() {
    var img = new Image();
    img.src = `./img/img-square/${gMemes.selectedImgId}.jpg`;
    gSelectedMeme.selectedImgId =gMemes.selectedImgId;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
        gSelectedMeme.lines.forEach((idx) => {
            drawText(idx);
        });
    };
};


function drawText() {
    var currLine = gSelectedMeme.lines[0];
    gCtx.lineWidth = 1;
    gCtx.fillStyle = currLine.fontColor;
    gCtx.strokeStyle = currLine.strokeColor;
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

function clearCanvas() {
    gSelectedMeme.lines[0].txt = '';
    document.querySelector('.text-line').value =''
    renderCanvas()
}

function chooseFontSize(fontSize) {
    gSelectedMeme.lines[0].size = +fontSize.value;
}

function chooseTextAlign(align) {

    if (+align.value===1) {
        gSelectedMeme.lines[0].pos.x =50;
        gSelectedMeme.lines[0].align='start';
    };
    if (+align.value===2) {
        gSelectedMeme.lines[0].pos.x =250;
        gSelectedMeme.lines[0].align='center';
    } 
    if (+align.value===3) {
        gSelectedMeme.lines[0].pos.x =450;
        gSelectedMeme.lines[0].align='end';
    } ;
};

function chooseFont(font) {
    console.log('font.value:', font.value)
}

function chooseFontColor(color) {
    console.log('color.value:', color.value)
}

function chooseStrokeColor(color) {
    console.log('color.value:', color.value)
}


function downloadCanvas(elLink) {
    console.log('elLink:', elLink);
    elLink.href = gCanvas.toDataURL();
    elLink.download = 'Arik-meme.jpg';
    console.log('download test');
}


function shareToFacebook(elForm, ev) {
    ev.preventDefault();
    // alert('test')
    document.querySelector('#imgData').value = gCanvas.toDataURL("image/jpeg");
    console.log('test')

    // A function to be called if the upload request succeeds
    function onSuccess(uploadedImgUrl) {
        uploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        document.querySelector('.share-btn').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}"
         title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}');
          return false;">Facebook   
        </a>`;
    }
    doUploadImg(elForm, onSuccess);
}


function doUploadImg(elForm, onSuccess) {
    var formData = new FormData(elForm);
    fetch('http://ca-upload.com/here/upload.php', {
            method: 'POST',
            body: formData
        })
        .then(function (res) {
            return res.text()
        })
        .then(onSuccess)
        .catch(function (err) {
            console.error(err)
        })
}