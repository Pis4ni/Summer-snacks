// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 3

/* // chiedo all utente un numero di array's da generare
let N = parseInt(prompt('inserisci un numero di array da generare'))
// genero il quantitativo di array's richiesti
for (let i = 0; i < N; i++) {
    let arrays = [];
    // per ogni array genero 10 numeri casuali da 1 a 100
    for (let j = 0; j < 10; j++) {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        //  aggiungo il numero randomico all' array
        arrays.push(randomNumber)
    }
    // ogni volta che genero un array nuovo lo stampo
    console.log(`array ${i+1}:`, arrays)
}
 */
 
// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 4

//creo un array di numeri
const numbers = [1,2,3,4,5,6,7,8,9,14,12]
//allaccio l elemento even dal documento
const even = document.getElementById('even')
//allaccio l elemento odd dal documento
const odd = document.getElementById('odd')
//per ogni elemento di 'numbers'  
for (let i = 0; i < numbers.length; i++) {
    //verifico se é pari
    if (numbers[i] % 2 == 0) {
        //lo dispongo all internop dell'elemento even
        even.innerHTML += numbers[i]
        //altrimenti
    }else{
        //lo dispongo all internop dell'elemento odd
        odd.innerHTML += numbers[i]
    }
    
}
// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 7

const colors = ['blue', 'red', 'yellow', 'green', 'black']

for (let i =colors.length -1; i >= 0 ;i--) {
    console.log(colors[i]);
}