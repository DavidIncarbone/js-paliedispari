"usestrict";
console.clear();

// PAROLA PALINDROMA

// Steps

// 1 - Inizializzare una variante prompt chiedendo all'utente di scrivere una parola
// 2 - Creare una funzione con un ciclo for, che parte dalla fine della parola ed arriva all'inizio

// let word = prompt("Per favore inserire una parola");
// console.log(word);

// let reversedWord = wordReverse(word);
// console.log(reversedWord);

//PARI E DISPARI

// Steps

// 1 - Inizializzare 2 variabili prompt: nella prima chiediamo all'utente di scegliere pari o dispari, la seconda la convertiamo in numero e chiediamo dis cegliere un numero
// 2 - Creare una funzione che generi un numero casuale che va da 1 a 5 ed assegnarlo al pc
// 3 - Inizializzare una variabile, dandogli come valore: numeroUtente + numeroPc


let userChoice = prompt("Scegliere pari o dispari");
console.log(userChoice);

let userNumber = parseInt(prompt("Inserire un numero"));
console.log(userNumber);

let pcNumber = randomNumber(1, 5);
console.log(pcNumber);

let sum = userNumber + pcNumber;
console.log(sum);

oddsOrEven(sum);


















