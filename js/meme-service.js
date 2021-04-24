'use strict'

var gMyMemesId = 5001
var gId = 1001;
var gCtx;

const gMemes = [{
        id: gId++,
        image: 'img/img-square/1001.jpg',
        category: 'other'
    },
    {
        id: gId++,
        image: 'img/img-square/1002.jpg',
        category:'funny'
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
        category:'fight'
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
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        pos: {
            x: (gElCanvas.width / 2),
            y: 50
        },
        size: 40,
        align: 'center',
        fontColor: 'white',
        strokeColor: 'black',
        font: 'Heebo, sans-serif',
    }]
};

var gMyMemes = [];

// function getCurrLine(idx) {
//     console.log('gMemes.lines[idx]:', gMemes.lines[idx])
//     return gMemes.lines[idx];
// }