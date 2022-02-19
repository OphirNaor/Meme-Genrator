'use strict'

// function saveToStorage(key, value) {
//     const str = JSON.stringify(value);
//     localStorage.setItem(key, str);
// }


// function loadFromStorage(key) {
//     const str = localStorage.getItem(key)
//     console.log(str);
//     const val = JSON.parse(str)
//     return val;
// }

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val))
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key)
    return JSON.parse(val)
}
