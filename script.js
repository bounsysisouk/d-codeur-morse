// Kata JS 6 : Traducteur de morse
// Complète ce fichier étape par étape. Les identifiants HTML sont déjà prêts.

// Éléments de la page (utile pour l'étape 5)
const latinInput = document.querySelector("#latin-input");
const morseOutput = document.querySelector("#morse-output");
const encodeBtn = document.querySelector("#encode-btn");

const morseInput = document.querySelector("#morse-input");
const latinOutput = document.querySelector("#latin-output");
const decodeBtn = document.querySelector("#decode-btn");

// Étape 1 : getLatinCharacterList
function getLatinCharacterList(text) {
    return text.split("");
}

//test
console.log(getLatinCharacterList("Bonjour, a tous"))
// Resultat obtenue: Array(15)0: "B"1: "o"2: "n"3: "j"4: "o"5: "u"6: "r"7: ","8: " "9: "a"10: " "11: "t"12: "o"13: "u"14: "s" length::15

// Étape 2 : dictionnaire latinToMorse (annexe 1) et translateLatinCharacter


// Étape 3 : encode


// Étape 4 : dictionnaire morseToLatin (annexe 2), getMorseCharacterList,
// translateMorseCharacter et decode


// Étape 5 : écouteurs de clic sur les deux boutons
