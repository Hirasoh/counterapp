//document.getElementById("count-el").innerHTML=5

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}

// 1. Cre



function save() {
    let countStr = count + " - "
    saveEl.innerText += countStr
    console.log(count)
    countEl.innerText = 0
    count=0
}
