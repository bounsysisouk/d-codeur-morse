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
/*=====================================
    EXTRAIRE LES CARACTERE DUN TEXTE 
======================================*/
function getLatinCharacterList(text) {
    return text.split("");
}
//test
console.log(getLatinCharacterList("Bonjour, a tous"))
// Resultat obtenu: Array(15)0: "B"1: "o"2: "n"3: "j"4: "o"5: "u"6: "r"7: ","8: " "9: "a"10: " "11: "t"12: "o"13: "u"14: "s" length::15

// Étape 2 : dictionnaire latinToMorse (annexe 1) et translateLatinCharacter
/*==================================================
    TRADUIRE UN TEXTE LATIN EN MORSE
====================================================*/

const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
};
function translateLatinCharacter(character) {
    const lettresMaj = character.toUpperCase();
    if (lettresMaj === " ") {
        return "/";
    }
    return latinToMorse[lettresMaj] || "";
}
//TEST
console.log(translateLatinCharacter("A")) // resultat: ".- "

// Étape 3 : encode
/*==================================================
    ENCODER UN TEXTE EN MORSE
====================================================*/
function encode(text) {
    const lettreSaisie = getLatinCharacterList(text);
    const morseList = lettreSaisie.map((caract) => translateLatinCharacter(caract)).filter((code) => code !== "");

    return morseList.join(" ")
}
//TEST
console.log(encode("SOS")); // resultat : ... --- ...
console.log(encode("hey all")) // resultat : .... . -.-- / .- .-.. .-..


// Étape 4 : dictionnaire morseToLatin (annexe 2), getMorseCharacterList,
// translateMorseCharacter et decode
/*=======================================================
    DECODER DU MORSE VERS LE LATIN 
========================================================*/
const morseToLatin = {
  '-': "T",
  '--': "M",
  '---': "O",
  '--.': "G",
  '--.-': "Q",
  '--..': "Z",
  '-.': "N",
  '-.-': "K",
  '-.--': "Y",
  '-.-.': "C",
  '-..': "D",
  '-..-': "X",
  '-...': "B",
  '.': "E",
  '.-': "A",
  '.--': "W",
  '.---': "J",
  '.--.': "P",
  '.-.': "R",
  '.-..': "L",
  '..': "I",
  '..-': "U",
  '..-.': "F",
  '...': "S",
  '...-': "V",
  '....': "H"
}
function getMorseCharacterList(morseText) {
    return morseText.trim().split(" ");
}
function translateMorseCharacter(morseCaract) {
    if (morseCaract === "/") {
        return " ";
    }
    return morseToLatin[morseCaract || ""];
}
function decode(morseText) {
    if (!morseText.trim()) {
        return "";
    }
    const morseCaractList = getMorseCharacterList(morseText);
    return morseCaractList.map((Caract) => translateMorseCharacter(Caract)).join("");
};
// TEST
console.log(decode("... --- ..."));  //resultat : SOS
console.log(decode(".... . -.-- / .- .-.. .-.."));  //resultat : HEY ALL


// Étape 5 : écouteurs de clic sur les deux boutons
/*=====================================================
    INTERFACE HTML + JAVASCRIPT
=======================================================*/

encodeBtn.addEventListener("click", () => {
    const encoded = encode(latinInput.value);
    morseInput.value = encoded;
    morseOutput.textContent = encoded
})

decodeBtn.addEventListener("click", () => {
    const decoded = decode(morseInput.value);
    latinInput.value = decoded;
    latinOutput.textContent = decoded

})