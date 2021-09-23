var count =0

var countEl = document.getElementById("count-el")
var saveEl = document.getElementById("#save-el")
function increment() {
    count += 1
    countEl.textContent = count     //.innerText will not read space

}

function save() {
    
    let savedEnteries = count + " - "

    saveEl.textContent += savedEnteries //.innerText will not read space

    count = 0
    countEl.textContent = count 
}


