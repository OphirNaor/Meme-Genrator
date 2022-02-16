'use strict'

var gElCanvas;
var gCtx;

function init() {
    console.log('init');
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    renderGallery()
}


function renderGallery() {
    var elGallery = document.querySelector(".gallery-container");
    var images = getImages();
    console.log(images);
    var str = "";
    images.forEach((img) => {
        str += `<div class="img">
        <img src=${img.url} alt=${img.keywords[0]} onclick="openEditor(${img.id})" />
      </div>`;
    });

    elGallery.innerHTML = str;
}

function openEditor(imgId) {
    // renderEditor(imgId);
    // setMeme()
    var elGallery = document.querySelector('.gallery-container')
    elGallery.classList.add('hide')

    var elEditor = document.querySelector('.editor-modal')
    elEditor.classList.remove('hide')
    // document.querySelector('.main-container').classList.add('hide');
}
function CloseEditor() {
    var elGallery = document.querySelector('.gallery-container')
    elGallery.classList.remove('hide')

    var elEditor = document.querySelector('.editor-modal')
    elEditor.classList.add('hide')
}

function renderEditor(imgId) {
    setMeme()
    reRenderCanvas()
}

function reRenderCanvas() {
    renderImgCanvas(gMeme.selectedImgId);
    meme.lines.forEach(line => {
        writeText(line);
    })
}
function renderImgCanvas(id) {
    const IMG = document.querySelector(`.img-${id}`)
    gElCanvas.width = 500
    gElCanvas.height = 500
    gCtx.drawImage(IMG, 0, 0, gElCanvas.width, gElCanvas.height);
}



//     const elModal = document.querySelector('.main-container');
//     elModal.classList.add('hide')

//     // document.querySelector(".editor-modal").classList.add("hidden");
//     // document.querySelector(".editor-modal").classList.add("show-modal");
//     setMeme(imgId)
//     console.log(imgId);
//     renderMeme()
// }
