document.getElementById("play").addEventListener("click", function() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;

    var randomImage1 = "images/dice" + randomNumber1 + ".png";
    var randomImage2 = "images/dice" + randomNumber2 + ".png";

    document.querySelectorAll('img')[0].setAttribute('src', randomImage1);
    document.querySelectorAll('img')[1].setAttribute('src', randomImage2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "&#128681 Player 1 wins";
    } 
    else if (randomNumber2 > randomNumber1) {
        document.querySelector('h1').innerHTML = "Player 2 wins &#128681";
    }
    else {
        document.querySelector('h1').innerHTML = "&#128681 Draw! &#128681";
    }
});
