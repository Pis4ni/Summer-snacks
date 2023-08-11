// chiedo all utente un numero di array's da generare
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