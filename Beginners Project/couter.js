let countEl=document.getElementById("count-el")
let count=0;

function increase(){
    count+=1
    countEl.innerText=count
}

let saveEl=document.getElementById("save-el")
let previous

function save(){
    previous=count+" - "
    saveEl.textContent+=previous
    count=0
    countEl.innerText=count
}