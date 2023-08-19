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

// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 9
// creo un array a vuoto
const a = []
// aggiungo 10 elementi casuali all array
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (10 - 1))  + 1
    a.push(randomNumber)
}
// stampo l'array completo
console.log(a);

// creo un array b vuoto
const b = []
// aggiungo 10 elementi casuali all array
for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * (10 - 1))  + 1
    b.push(randomNumber)
}
// stampo l'array completo
console.log(b);
// creo un array c vuoto
const c = []
for (let i = 0; i < a.length; i++) {
    let sum = a[i] + b[i];
    c.push(sum)
    
}
console.log(c);


// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 10
// allaccio l elemento container10 dal dom
const container = document.getElementById("container10");
// genero i numeri da 1 a 100
for (let i = 1; i < 100; i++) {
    //per ogni numero creo un elemento span
    const numberElement = document.createElement('span')
    //trasformo la i in stringa, aggiungo uno spazio alla fine e meto tutto dentro lo span
    numberElement.textContent = i.toString() + " "
    // metto lo span appena creato nel dom
    container.appendChild(numberElement);
    // se la i é divisibile * 10
    if (i % 10 == 0) {
        // creo un elemento br per andare a capo
        const lineBreak = document.createElement("br");
        // aggiungo il line break dopo ogni decina in modo da andare a capo
        container.appendChild(lineBreak);
    };
    
}

// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 12

const studentList = ['paolo','carlo','stefano','bianca','luigi']
const studentVote = []
let maxScore = 0

for (let i = 0; i < studentList.length; i++) {
    let vote = parseInt(prompt('inserisci il voto'));
    studentVote.push(vote)
    maxScore += vote
    console.log(maxScore);
}

let mid = maxScore / studentVote.length
console.log(mid);