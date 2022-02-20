'use strict'

let gCanvas;
let gCtx;
let gMeme;

function createMeme() {
    return {
        width: null,
        height: null,
        size: 30,
        align: 'left',
        color: '#ffffff',
        textShadowWhite: false,
        textShadowBlack: true,
        font: 'Impact',
        txts: [
            {
                line: '',
                order: 0,
                posX: 80,
                posY: 60
            }]
    }
}

function renderCanvas() {
    const img = getCurrImg();
    const imgCanvas = new Image();
    imgCanvas.src = img.url;
    imgCanvas.onload = function () {
        drawCanvas(this);
        gMeme.txts.forEach(function (txt, idx) {
            renderTxt(txt, idx);
        })
    };
    return { width: imgCanvas.width, height: imgCanvas.height };
}

function getImg(id) {
    return gImgs.find((img) => img.id === id)
}


function renderTxt(txt, idx) {
    const x = txt.posX;
    const y = txt.posY;
    const txtSize = `${gMeme.size}px`;
    const fontSize = `${gMeme.size}px`;
    const txtFont = gMeme.font;
    if (gCanvas.getContext) {
        gCtx.font = `${txtSize} ${txtFont}`;
        gCtx.font = `${fontSize} ${txtFont}`;
        var currColor = gMeme.color
        gCtx.fillStyle = currColor;
        var shadowColor = '#000000';
        if (gMeme.textShadowBlack === false) {
            if (gMeme.textShadowWhite === true) {
                shadowColor = '#ffffff';
            } else shadowColor = null;
        }
        gCtx.strokeStyle = shadowColor;
        gCtx.strokeText(txt.line, x, y);
        gCtx.fillText(txt.line, x, y);
        gCtx.save();
    }
}

function locateLine() {
    var y;
    gMeme.txts.forEach(function (txt, idx) {
        if (idx === 0) y = 50;
        else if (idx === 1) y = gCanvas.height / 2;
        else y = gCanvas.height - 50;
        txt.posY = y;
    })
}

function drawCanvas(imgCanvas) {
    const x = 0;
    const y = 0;
    gCtx.drawImage(imgCanvas, x, y, gCanvas.width, gCanvas.height);
}

function renderCanvasSize(imgDimension) {
    gCanvas.width = 540;
    gCanvas.height = 405;
    const ratio = imgDimension.width / imgDimension.height;
    if (imgDimension.width > imgDimension.height) {
        if (imgDimension.width > gCanvas.width) {
            imgDimension.height = gCanvas.width * (1 / ratio);
            gCanvas.height = imgDimension.height;
        } else {
            var widthRatio = gCanvas.width / imgDimension.width;
            imgDimension.width = gCanvas.width;
            imgDimension.height *= widthRatio;
        }
    } else {
        if (imgDimension.height > gCanvas.height) {
            gCanvas.height = gCanvas.width;
            imgDimension.width = gCanvas.height * ratio;
            gCanvas.width = imgDimension.width;
        } else {
            var heightRatio = gCanvas.height / imgDimension.height;
            imgDimension.height = gCanvas.height;
            imgDimension.width *= heightRatio;
        }
    }
    gCtx.fillStyle = 'rgb(239, 245, 243)';
    gCtx.fillRect(0, 0, imgDimension.width, imgDimension.height);
    gMeme.width = imgDimension.width;
    gMeme.height = imgDimension.height;
}

function txtShadow(color) {
    if (color === '#ffffff') {
        if (!gMeme.textShadowWhite) {
            gMeme.textShadowWhite = true;
        }
        else {
            gMeme.textShadowWhite = false;
        }
        gMeme.textShadowBlack = false;
    } else if (color === '#000000') {
        if (!gMeme.textShadowBlack) {
            gMeme.textShadowBlack = true;
        }
        else {
            gMeme.textShadowBlack = false;
        }
        gMeme.textShadowWhite = false;
    }
    renderCanvas();
}

function txtAlign(alignValue) {
    if (alignValue === 'left') {
        gMeme.align = 'left';
    }
    if (alignValue === 'center') {
        gMeme.align = 'center';
    }
    if (alignValue === 'right') {
        gMeme.align = 'right';
    }

    updatePosX();
}

function updatePosX() {
    gMeme.txts.forEach(function (txt, idx) {
        if (gMeme.align === 'left') txt.posX = 10;
        if (gMeme.align === 'right') txt.posX = gCanvas.width - 80;
        if (gMeme.align === 'center') txt.posX = gCanvas.width / 2 - 40;
    })
    renderCanvas();
}

function addLine() {
    if (gMeme.txts.length === 3) {
        addClassBlockBtn();
        return;
    }
    var nextId = 1;
    var posY = 230
    if (gMeme.txts.length === 2) {
        nextId = 2;                     //line order
        posY = 380
    }
    var newLine = creatLine(nextId, posY);
    var txts = gMeme.txts;
    txts.push(newLine);
    locateLine();

    renderTxtLine(txts);
}

function creatLine(num, y) {
    return {
        line: '',
        order: num,
        posX: 80,
        posY: y
    }
}

function getTxtById(id) {
    for (var i = 0; i < gMeme.txts.length; i++) {
        var txt = gMeme.txts[i];
        if (txt.order === +id) {
            return txt;
        }
    }
}

// upload and share
function uploadImg() {
    const imgDataUrl = gCanvas.toDataURL("image/jpeg");

    // A function to be called if request succeeds
    function onSuccess(uploadedImgUrl) {
        const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
        console.log(encodedUploadedImgUrl);
        document.querySelector('.user-msg').innerHTML = `<p>Your photo is available <a target="_blank" href="${uploadedImgUrl}">here</a></p>`

        document.querySelector('.share-container').innerHTML = `
        <a class="btn" href="https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}" title="Share on Facebook" target="_blank" onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${uploadedImgUrl}&t=${uploadedImgUrl}'); return false;">
           Share   
        </a>`
    }

    doUploadImg(imgDataUrl, onSuccess);
}

function doUploadImg(imgDataUrl, onSuccess) {

    const formData = new FormData();
    formData.append('img', imgDataUrl)

    fetch('//ca-upload.com/here/upload.php', {
        method: 'POST',
        body: formData
    })
        .then(res => res.text())
        .then((url) => {
            console.log('Got back live url:', url);
            onSuccess(url)
        })
        .catch((err) => {
            console.error(err)
        })
}