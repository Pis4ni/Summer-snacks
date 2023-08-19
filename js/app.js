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


//considero una lista di studenti data
const studentList = ['paolo','carlo','stefano','bianca','luigi']
// creo un array vuoto atto a tenere conto dei voti
const studentVote = []
// creo una variabile che conterrá il voto massimo
let maxScore = 0
// per ogni studente della lista
for (let i = 0; i < studentList.length; i++) {
    // chiedo un voto
    let vote = parseInt(prompt('inserisci il voto'));
    // metto il voto nella lista voti
    studentVote.push(vote)
    // sommo il voto alla variabile del voto massimo
    maxScore += vote
    // stampo il voto massimo totalizzato da tutti gli studenti
    console.log(maxScore);
}
// creo la variabile mid che contiene la media dei voti ottenuti
let mid = maxScore / studentVote.length
// stampo la media
console.log(mid);


// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 13


function same(a,b){
    if (a===b) {
        return true
    }else{
        return false
    }
}
function sameTwo(a,b){
    return a === b
}

// !/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/ snack 14

// ​Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.​
function max (a,b,c){
    if (a>b && a>c) {
        return a
    }else if (b>a && b>c) {
        return b 
    }else{
        return c
    }
}

function min (a,b,c){
    if (a<b && a<c) {
        return a
    }else if (b<a && b<c) {
        return b 
    }else{
        return c
    }
}
