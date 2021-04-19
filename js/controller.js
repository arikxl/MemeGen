'use strict'


var gCanvas;
var gCtx;



function onInit() {
    console.log('LETS MEME!');
    gCanvas = document.querySelector('#meme-canvas');
    gCtx = gCanvas.getContext('2d');
    // drawImg()
}







function openFilters() {
    document.querySelector('.dropdown-content').classList.toggle('show');
}


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
    var filter, a,  txtValue;
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