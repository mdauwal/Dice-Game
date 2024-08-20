document.addEventListener("DOMContentLoaded", function(){
    const diceOne = document.getElementById("img-1")
    const diceTwo = document.getElementById("img-2")
    const allDice = [
        "images/dice1.png",
        "images/dice2.png",
        "images/dice3.png",
        "images/dice4.png",
        "images/dice5.png",
        "images/dice6.png",
    ]
   document.addEventListener("click", ()=> {
    const index = Math.floor(Math.random() * 6);
    const index2 = Math.floor(Math.random() * 6);
    console.log(index) 
    console.log(index2) 

    diceOne.src = allDice[index];
    diceTwo.src = allDice[index2];
   })

    
})

