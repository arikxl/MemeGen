'use strict'

var gId = 1001;
var gCtx;

function initCanvas() {
    gCtx = gElCanvas.getContext('2d')
    console.log('gCtx:', gCtx)
    renderCanvas()
}


const gMemes = [{
        id: gId++,
        image: 'img/img-square/1001.jpg',
        category: 'other'
    },
    {
        id: gId++,
        image: 'img/img-square/1002.jpg',
        category: 'funny'
    },
    {
        id: gId++,
        image: 'img/img-square/1003.jpg',
        category: 'funny'
    },
    {
        id: gId++,
        image: 'img/img-square/1004.jpg',
        category: 'sex'
    },
    {
        id: gId++,
        image: 'img/img-square/1005.jpg',
        category: 'fight'
    },
    {
        id: gId++,
        image: 'img/img-square/1006.jpg',
        category: 'crazy'
    },
    {
        id: gId++,
        image: 'img/img-square/1007.jpg',
        category: 'other'
    },
    {
        id: gId++,
        image: 'img/img-square/1008.jpg',
        category: 'stupid'
    },
    {
        id: gId++,
        image: 'img/img-square/1009.jpg',
        category: 'fight'
    },
    {
        id: gId++,
        image: 'img/img-square/1010.jpg',
        category: 'other'
    },
    {
        id: gId++,
        image: 'img/img-square/1011.jpg',
        category: 'other'
    },
    {
        id: gId++,
        image: 'img/img-square/1012.jpg',
        category: 'sex'
    },
    {
        id: gId++,
        image: 'img/img-square/1013.jpg',
        category: 'funny'
    },
    {
        id: gId++,
        image: 'img/img-square/1014.jpg',
        category: 'sex'
    },

    {
        id: gId++,
        image: 'img/img-square/1015.jpg',
        category: 'crazy'
    },

    {
        id: gId++,
        image: 'img/img-square/1016.jpg',
        category: 'fight'
    },
    {
        id: gId++,
        image: 'img/img-square/1017.jpg',
        category: 'other'
    },
    {
        id: gId++,
        image: 'img/img-square/1018.jpg',
        category: 'other'
    },
];

// console.table(gMemes);


var gSelectedMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    exportReady: false,
    lines: [{
        txt: '',
        pos: {
            x: (gElCanvas.width / 2),
            y: 50
        },
        size: 50,
        align: 'center',
        fontColor: 'white',
        strokeColor: 'red',
        isDragging: false,
        font: 'Heebo, sans-serif',
    }]
}