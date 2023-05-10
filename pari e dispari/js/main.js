/* 

Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/
// Scommessa utente
const userScommessa = prompt('Pari o dispari?');
// Numero scelto dall'utente
const userNum = parseInt(prompt('Scegli un numero da 1 a 5'));

// Numero del PC
const pcNum = createRandomNum(1, 5);
console.log(pcNum);

// Controllo se l'utente ha vinto
if (userScommessa === checkIfEvenOdd()) {
    console.log('HAI VINTO!!');
} else {
    console.log('Hai perso');
}


// FUNCTION

function createRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function checkIfEvenOdd () {
    const somma = userNum + pcNum;
    console.log(somma);

    if (somma % 2 === 0) {
        return 'pari';
    } else {
        return 'dispari';
    }
}