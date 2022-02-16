'use strict'

var gElCanvas;
var gCtx;

function init() {
    console.log('init');
    gElCanvas = document.querySelector('canvas')
    gCtx = gElCanvas.getContext('2d')
    // renderImages()
}


function renderImages() {
    var gridContEl = document.querySelector(".gallery-container");
    var images = getImages();
    console.log(images);
    var str = "";
    images.forEach((img) => {
        str += `<div class="img">
        <img src=${img.url} alt=${img.keywords[0]} onclick="openEditor(${img.id})" />
      </div>`;
    });

    gridContEl.innerHTML = str;
}