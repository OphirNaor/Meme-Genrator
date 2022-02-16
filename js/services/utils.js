'use strict'

function makeId(length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}







//Canvas

function renderImgOnCanvas(img, elCanvas, ctx) {
    console.log('ctx', ctx)

    ctx.drawImage(img, 0, 0, elCanvas.width, elCanvas.height);
}