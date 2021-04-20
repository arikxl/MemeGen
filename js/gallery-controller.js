'use strict'


var gCanvas;
var gCtx;



function onInit() {
    console.log('LETS MEME!');
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    renderGallery();
    // drawImg()
}


function onImgPick(id) {
    gMemes.selectedImgId = id;
    openModal();
};


function openModal(isSavedMeme) {
    document.querySelector('.gallery-container').style.display = 'none';
    document.querySelector('.search-container').style.display = 'none';
    document.querySelector('.meme-editor-container').style.display = 'flex';
    renderCanvas()
}

// function onSearchImg(ev) {
//     ev.preventDefault();
//     var chosenGalley = getFromStorage(IMG_KEY);
//     console.log('chosenGalley:', chosenGalley)
//     filteredGallery = searchImg(chosenGalley)
//     console.log('filteredGallery:', filteredGallery)
//     // setTimeout(() => {
//     //     renderImg()
//     // }, 500);
// }








// xXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


// function openFilters() {
//     document.querySelector('.dropdown-content').classList.toggle('show');
// }


function clearCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
    console.log('clear test');
}


function downloadCanvas(elLink) {
    // const data = gCanvas.toDataURL()
    elLink.href = gCanvas.toDataURL()
    elLink.download = 'my-img.jpg'
    console.log('download test');
}



// צריך להחליף לפונקציית פילטר נורמלית
function filterMemes() {
    var filter, a, txtValue;
    var filterInput = document.querySelector('.filter-input');
    filter = filterInput.value.toUpperCase();
    var filterDropdown = document.querySelector('.dropdown-content');
    a = filterDropdown.getElementsByTagName("a");
    for (var i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}




function closeModal() {
    document.querySelector('.gallery-container').style.display = 'grid';
    document.querySelector('.search-container').style.display = 'flex';
    document.querySelector('.meme-editor-container').style.display = 'none';
}

function Onchange(value) {
    console.log('value:', value)
    console.log('value:')
}