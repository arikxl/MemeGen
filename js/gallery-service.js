'use strict'


const IMG_KEY = 'imgs';
var filteredGallery;

function renderGallery() {
    let elGallery = document.querySelector('.gallery-container')
    let strHTML = ``
    gMemes.forEach(img => {
        strHTML += `<div class="meme-img pointer"><img class="img-card"
         onclick="onImgPick(${img.id})"
         src="img/img-square/${img.id}.jpg"></div>`
    });
    elGallery.innerHTML = strHTML
}

function searchImg(currGallery) {
    let filtered = currGallery.filter(meme =>
        meme.keywords.find(keyword =>
            keyword.toLowerCase().includes(elSearch.value.toLowerCase())
        )
    )
    return filtered;
};



function _saveImgToStorage() {
    saveToStorage(IMG_KEY, gImgs)
};