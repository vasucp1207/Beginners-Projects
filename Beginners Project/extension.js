let inputBtn=document.getElementById("input-btn")
let myLead=[]
let inputEl=document.getElementById("input-el")
let ulEl=document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    myLead.push(inputEl.value)
    inputEl.value=""
    renderLead()
})

function renderLead(){
    let listItems=""
    for(let i=0;i<myLead.length;i++){
        listItems+= `
        <li>
            <a target='_blank' href='${myLead[i]}'>
                ${myLead[i]}
            </a>
        </li>
    `
    }
    ulEl.innerHTML=listItems
}
