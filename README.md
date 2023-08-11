# FATTI IN CLASSE
​
## Snack8
​
Crea un array vuoto e chiedi all’utente un numero di dati casuali da inserire nell'array.
Stampa in console il numero più grande e il numero più piccolo.
​
## Snack7BIS
​
Chiedere all'utente un colore
Dato l'array
const colors = ['blue', 'red', 'yellow', 'green', 'black'];
Stampare in console se il colore inserito dall'utente è presente nell'array, altrimenti stampare "not found".
​
## Snack11
​
Trovare gli errori del codice:
​
```
function checkAge(myAge) {
    const message = '';
    if (myAge < 18) {
        message = 'Sei troppo giovane! Hai ${myAge} anni!';
    } else {
        message = 'Hai più di 18 anni!';
    }
}
​
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;
    console.log(`Il risultato finale è {total}`);
}
​
addNumbers();
const result = checkAge(myAge);
console.log(result);
```
​
---
​
# ESERCIZI PER LE VACANZE
​
## Snack3
​
Fai inserire un numero, che chiameremo N, all’utente. Genera N array, ognuno formato da 10 numeri casuali da 1 a 100. Ogni volta che ne crei uno, stampalo.
​
## Snack4
​
Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di numeri, stampiamo nell’id rosso i numeri dispari e in verde i numeri pari.
​
## Snack7
​
Dato l'array
const colors = ['blue', 'red', 'yellow', 'green', 'black'];
Stampare in console i colori in ordine inverso (da "black" a "blue")
​
## Snack9
​
Creare due array di 10 elementi interi casuali compresi tra 1 e 10;
Generare un terzo array con la somma degli elementi presenti nelle stesse posizioni.
Esempio:
Input: a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5]
Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]
​
## Snack10
Generare i numeri da 1 a 100 andando a capo ogni 10.
Esempio:
Output: 1 2 3 4 5 6 7 8 9 10
11 12 13 14 15 16 17 18 19 20
21 22 23 24 25 26 27 28 29 30
31 32 33 34 35 36 37 38 39 40
41 42 43 44 45 46 47 48 49 50
51 52 53 54 55 56 57 58 59 60
61 62 63 64 65 66 67 68 69 70
71 72 73 74 75 76 77 78 79 80
81 82 83 84 85 86 87 88 89 90
91 92 93 94 95 96 97 98 99 100
​
## Snack12
​
Data una lista di stundenti all'esame, chiedere il voto di ognuno e calcolarne la media
const studentList = [ 'paolo', 'carlo', 'stefano', 'bianca', 'luigi' ];
​
## Snack13
​
Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.
​
## Snack14
​
Scrivi due funzioni una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.
​
## Snack15
​
Scrivi una funzione che converta un voto numerico (v) in un giudizio seguendo questi parametri:
v < 18: insufficiente
18 <= v < 21: sufficiente
21 <= v < 24: buono
24 <= v < 27: distinto
27 <= v <= 29: ottimo
v = 30: eccellente