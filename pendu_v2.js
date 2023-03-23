let wordHangman = ["tornade", "elephant", "tasse", "clavier", "inceste"];
let letterUsed = [];
let tryLeft = 6;
let wordDisplay = "";
let gameOver = false;
let result = "";
let input = "";
let word = "";
let indexImg = 0;
let picture = document.getElementById("imgHang");

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Réinitialisation jeu + conversion en -
function replace() {
    gameOver = false
    indexImg = 0
    picture.src = `./asset/img/pendu${indexImg}.png`
    document.querySelector("#end").innerHTML = "";
    tryLeft = 6;
    letterUsed = []
    let indexRandom = random(0, wordHangman.length - 1);
    word = wordHangman[indexRandom].toUpperCase();
    wordDisplay = "";
    for (let i = 0; i < word.length; i++) {
        wordDisplay += "-"
    }
    document.querySelector("#word").innerHTML = wordDisplay;
    document.querySelector("#try").innerHTML = tryLeft;
   document.querySelectorAll(".input").forEach(element => {
    element.style.backgroundColor = "black"
   });
    
}
// Récupérer la lettre entrée
function getInput(elem) {
    input = elem.innerHTML;
    if (word.indexOf(input) == -1){
    elem.style.backgroundColor = "red"
    }else{
        elem.style.backgroundColor = "#1eb51ee1"
    }
}
//Vider l'input
function empty() {
    document.querySelector("#hang").value = ""
}
//Vérifier si lettre est bonne
function compare() {
    wordDisplay = ""
    if (word.indexOf(input) == -1) {
        tryLeft--;
        indexImg++
        picture.src = `./asset/img/pendu${indexImg}.png`
        
    }
    for (let i = 0; i < word.length; i++) {
        if (letterUsed.indexOf(word[i]) != -1) {
            wordDisplay += word[i];
        } else {
            wordDisplay += "-";
        }

    }
    document.querySelector("#try").innerHTML = tryLeft;
    document.querySelector("#word").innerHTML = wordDisplay;
    verif()
    if (gameOver == true) {
        document.querySelector("#end").innerHTML = result;
    }
}
// Conditions de fin de partie
function verif() {
    if (tryLeft == 0) {
        gameOver = true;
        result = "Perdu! Le mot à deviner était : "+ word;
        
        
    }
    if (word == wordDisplay) {
        gameOver = true;
        result = "Vous avez gagné!"
    }
}
////////Début de partie
replace()
function play(elem) {
    if (!gameOver) {
        getInput(elem);
        letterUsed.push(input)
        compare();
    }  
    }
 
