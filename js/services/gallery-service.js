'use strict'


var gImgs = [
    { id: '1', url: "img/1.jpg", keywords: ["priorities", "trump"] },
    { id: '2', url: "img/2.jpg", keywords: ["cute", "dog"] },
    { id: '3', url: "img/3.jpg", keywords: ["cute", "baby", "dog", "sleep"] },
    { id: '4', url: "img/4.jpg", keywords: ["sleep", "cute", "funny", "cat"] },
    { id: '5', url: "img/5.jpg", keywords: ["baby", "funny"] },
    { id: '6', url: "img/6.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: '7', url: "img/7.jpg", keywords: ["kid", "baby", "funny"] },
    { id: '8', url: "img/8.jpg", keywords: ["wounder", "ironic", "funny"] },
    { id: '9', url: "img/9.jpg", keywords: ["baby", "funny"] },
    { id: '10', url: "img/10.jpg", keywords: ["obama", "ironic", "funny"] },
    { id: '11', url: "img/11.jpg", keywords: ["fight", "ironic"] },
    { id: '12', url: "img/12.jpg", keywords: ["haim", "ironic", "funny"] },
    { id: '13', url: "img/13.jpg", keywords: ["cheers", "decaprio", "funny"] },
    { id: '14', url: "img/14.jpg", keywords: ["matrix", "serious"] },
    { id: '15', url: "img/15.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: '16', url: "img/16.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: '17', url: "img/17.jpg", keywords: ["putin", "ironic", "funny"] },
    { id: '18', url: "img/18.jpg", keywords: ["toy", "ironic", "funny"] },

];

const IMG_KEY = 'currImg';

function init() {
    renderGallery(gImgs);
}

function searchImg() {
    renderGallery();
}

function getImgsForDisplay() {
    var imgs = [];
    imgs = filterImgs(gImgs)
    return imgs;
}

function backToGallery() {
    showGallery();
    gMeme.txts.forEach(function (txt) {
        txt.line = '';
    })
}

function selectImg(elImg) {
    localStorage.clear();
    var imgId = elImg.id;
    var img = getImgById(imgId);
    console.log(img);
    showCanvas();
    saveCurrImg(img);
    initCanvas();
}


function saveCurrImg(img) {
    saveToStorage(IMG_KEY, img);
}

function getCurrImg() {
    var currImg = loadFromStorage(IMG_KEY);
    return currImg;
}

function getImgById(id) {
    console.log(id);
    console.log(gImgs);
    return gImgs.find((img) => img.id === id)
}