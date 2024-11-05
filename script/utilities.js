"usestrict";
console.clear();

// UTILITIES FUNCTION

// RANDOM NUMBER GENERATOR

/**
 * 
 * @param {num} min 
 * @param {num} max 
 * @returns 
 * 
 * @abstract Genera un numero random compreso tra min e max
 */

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// ODDS EVEN GAME 

/**
 * 
 * @param {num} num 
 * @returns 
 * @abstract Ritorna "pari" se num è pari, altrimenti ritorna "dispari""
 */

function oddsEven() {

    const pcNumber = randomNumber(1, 10);
    console.log("numPC", pcNumber);

    const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 10"));
    console.log("num user", userNumber);


    const userChoice = prompt("Scegli pari o dispari");
    console.log(userChoice);

    const sum = pcNumber + userNumber;
    console.log(sum);


    const oeResult = oddsEven(sum);
    console.log(oeResult);

    if (oeResult === userChoice.toLowerCase()) {

        console.log("Hai vinto!");

    } else {
        console.log("Hai perso");

    }
}

// ODDS EVEN GAME 2

/**
 * 
 * @param {num} num 
 * @returns 
 * @abstract 
 */

function oddsOrEven(num) {

    let result = "";

    if (num % 2 === 0) {
        console.log(`Il risultato è pari`);
        result = "pari"
    } else {
        console.log(`Il risultato è dispari`);
        result = "dispari"

    } if (userChoice === result) {

        console.log("Complimenti hai vinto!");

    } else {

        console.log("Spiacente hai perso");

    }


}

// DICE GAME
/**
 * 
 * @param {num} userNumber 
 * @param {num} pcNumber 
 * @returns 
 */

function dice() {

    const userNumber = randomNumber(1, 6);
    const pcNumber = randomNumber(1, 6);

    let message = `Il tuo numero è ${userNumber}, mentre il numero del PC è ${pcNumber}. `

    if (userNumber > pcNumber) {

        console.log(message + "Complimenti, hai vinto!");

    } else if ((userNumber < pcNumber)) {

        console.log(message + "Spiacente, purtroppo hai perso");

    } else {

        console.log(message +
            "Tu e il pc avete pescato lo stesso numero, abbiamo quindi un pareggio!");

    }
    return;
}

// Word Reverse

/**
 * 
 * @param {string} 
 * @returns 
 */

function wordReverse() {
    let reversedWord = "";

    for (let i = word.length - 1; i >= 0; i--) {

        reversedWord += word[i];

    }
    if (word === reversedWord) {
        console.log("La parola è palindroma");

    } else {
        console.log("La parola non è palindroma");

    }

    return reversedWord
}
