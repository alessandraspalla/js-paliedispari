const userWord = prompt('Inserisci una parola');

let check = checkIfWordIsPalindrome()



// FUNCTION
function checkIfWordIsPalindrome() {
    
    // Transformo parola in array di lettere
    const letterWord = Array.from(userWord);
    console.log(letterWord);
    
    // Inverto l'ordine delle lettere nell'array
    const reverseLetter = letterWord.reverse();
    console.log(reverseLetter);

    // Riunisco le lettere dell'array
    const newWord = reverseLetter.join('');
    console.log(newWord);

    if (userWord === newWord) {
        console.log('La parola è palidroma');   
    } else {
        console.log('La parola NON è palindroma');
    }
}