/*Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
à all’utente che cambia il range di numeri casuali:BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficolt
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
Consigli del giorno: :party_wizard:
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi. Ad esempio :Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Proviamo prima con pochi numeri, inserire 86 numeri ogni volta potrebbe essere un po’ scocciante :occhiolino:
Le validazioni e i controlli possiamo farli anche in un secondo momento.
Scriviamo prima in modo che tutto funzioni e poi studiamo il codice per trovare opportunità di miglioramento (inserire funzioni, pulire variabili superflue ecc).
Non  è necessario stampare in pagina, chi vuole può farlo, in file separato, ma solo dopo che l'esercizio base funziona con prompt/alert/console.log*/



//Preparazione 
/* 1 creo un array per contenere le bombe*/
/* 2 creo una funzione per generare numeri random da 1 a100*/
/* 3 creo un ciclo while per verificare la lunghezza della array bombe*/
/* 4 chiedo al giocatore di scegliere un numero per (100-16 volte)*/


var numeriTotali = 5;
var numeroBombe = 2;
var numeriPossibilita = numeriTotali - numeroBombe;
var bombe = [1, 2];
// console.log(bombe)









// //creo un ciclo while per verificare la lunghezza della array bombe
// while (bombe.length < numeroBombe) {
//     /*inserisco la funzione creata per generare numeri random da 1 a100*/
//     var numeroCasuale = getRandom(1, numeriTotali);
//     console.log(numeroCasuale);
//     /*creo una convalida per convalidare se il numero e già presente nella array bombe*/
//     if (!isInArray(numeroCasuale, bombe)) {
//         /*inseriso i knumeri univoci dentro l'array*/
//         bombe.push(numeroCasuale);
//     }

// }





/*creo un array dove inserisco i numeri scelti dal giocatore*/
var numeriGiocatore = [];

var userPlay = getUserNumnber(1, numeriTotali);


// while (numeriGiocatore > numeriPossibilita) {

// }




//******* FUNCTION DECLARATION */


//genera un numero random tra un minimo e il massimo
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * controlla che un dato elemento sia presente in un array
 * @param{*}needle
 * @param{*}haystack
 * @returns{bolean}
 */

function isInArray(needle, haystack) {
    var trovato = false;

    //creo un contatore con una condizione (continuo finche ho elementi nella array(haystack) ma ache finche trovato è falso)   )
    var i = 0;
    while (!trovato && i < haystack.length) {

        if (needle === haystack[i]) {
            trovato = true;
        }
        i++;
    }

    //porto fuori il risultato
    return trovato;
}

function getUserNumnber(min, max) {
    /* chiedo al giocatore di scegliere un numero da 1 a 100*/
    var number;
    do {
        prompt('inserisci un numero da ' + min + 'a' + max);
    }

    while (!isNumber(number) || number < min || number > max)
    number = prompt('inserisci un numero da ' + min + 'a' + max);


    return parseInt(number);
}


function isNumber(num) {
    if (!num || num.trim() === '' || isNaN(num)) {
        return false;
    }
}