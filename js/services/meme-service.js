'use strict'
var gImgs = [
    { id: 1, url: "img/1.jpg", keywords: ["priorities", "Trump"] },
    { id: 2, url: "img/2.jpg", keywords: ["cute", "dog"] },
    { id: 3, url: "img/3.jpg", keywords: ["cute", "baby", "dog", "sleep"] },
    { id: 4, url: "img/4.jpg", keywords: ["sleep", "cute", "funny", "cat"] },
    { id: 5, url: "img/5.jpg", keywords: ["baby", "funny"] },
    { id: 6, url: "img/6.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 7, url: "img/7.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 8, url: "img/8.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 9, url: "img/9.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 10, url: "img/10.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 11, url: "img/11.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 12, url: "img/12.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 13, url: "img/13.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 14, url: "img/14.jpg", keywords: ["priorities", "ironic", "funny"] },
    { id: 15, url: "img/15.jpg", keywords: ["priorities", "ironic", "funny"] },

];
var gMeme = {
    selectedImgId: 1,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'I sometimes eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
        },
    ],
}


function getMeme() {
    console.log('get meme');
    return gMeme
}


function getImages() {
    console.log('get img');
    return gImgs;
}


// function openEditor(img) {
//     console.log(img);
// }

function setMeme(imgId) {
    gMeme.selectedImgId = imgId
}

function renderMeme() {
    const meme = getMeme();
    const img = getImg(meme.selectedImgId)
    drawImgFromlocal(img.url);
}

function drawImgFromlocal(urlImg) {
    console.log();
    var img = new Image()
    img.src = urlImg;
    img.onload = () => {
        // gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height) //img,x,y,xend,yend
        renderTxtImg();
    }
}


function renderTxtImg() {
    const meme = getMeme();
    var txt = meme.lines[0].txt
    gCtx.fillText(txt, 10, 50);
}

function getImg(id) {
    return gImgs[id]
}