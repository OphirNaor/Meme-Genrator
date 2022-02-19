'use strict'

var gTrans = {
    'gallery': {
        en: 'GALLERY',
        he: 'גלריה'
    },

    'about': {
        en: 'ABOUT',
        he: 'אודות'
    },

    'search': {
        en: 'search',
        he: 'חיפוש'
    },

    'back': {
        en: 'Back',
        he: 'חזור'

    },

    'addLine': {
        en: 'Add Line',
        he: ' (עד 2)הוספת שורה'
    },
    'size': {
        en: 'Size',
        he: 'גודל הגופן'
    },
    'font': {
        en: 'Font',
        he: 'גופן'
    },
    'textShadow': {
        en: 'Text Shadow',
        he: 'צללית'
    },
    'download': {
        en: 'Download',
        he: 'הורדה'
    }
}




var gCurrLang = 'en';

function getTrans(transKey) {
    var keyTrans = gTrans[transKey]
    if (!keyTrans) return 'UNKNOWN'

    var txt = keyTrans[gCurrLang]
    if (!txt) txt = keyTrans.en

    return txt
}

function doTrans() {
    var els = document.querySelectorAll('[data-trans]')
    els.forEach((el) => {
        var transKey = el.dataset.trans
        var txt = getTrans(transKey)
        if (el.nodeName === 'INPUT') {
            el.placeholder = txt
        } else el.innerText = txt
    })
}

function setLang(lang) {
    gCurrLang = lang;
}