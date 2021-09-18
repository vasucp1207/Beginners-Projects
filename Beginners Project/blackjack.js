let sum=0
let cards=[]
let hasBlackJack=false
let isAlive=true
let message=""

let messageEl=document.getElementById("message-el")
let cardsEl=document.getElementById("cards-el")
let sumEl=document.getElementById("sum-el")

let player={
    name:"vasu",
    chips:123
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips

function startgame(){
    let firstCard=getrandom()
    let secondCard=getrandom()
    isAlive=true
    sum=firstCard+secondCard
    cards=[firstCard,secondCard]
    rendergame()
}

function getrandom(){
    let randomval=Math.floor(Math.random()*13+1)
    if(randomval>10)return 10
    else if(randomval===1)return 11
    else return randomval
}

function rendergame(){
    cardsEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++)
        cardsEl.textContent+=cards[i]+" "

    sumEl.textContent="Sum: "+sum

    if(sum<21){
        message="draw a new card"
    }
    else if(sum===21){
        message="you win"
        hasBlackJack=true
    }
    else{
        message="bhag bhosdike"
        isAlive=false
    }
    messageEl.textContent=message
}

function newcard(){
    if(hasBlackJack==false&&isAlive==true){
        let card=getrandom()
        sum+=card
        cards.push(card)
        rendergame()
    }
}