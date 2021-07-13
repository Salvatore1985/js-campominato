/*Consegna
Il computer deve generare 16 numeri casuali tra 1 e 100, queste saranno le nostre bombe.
I numeri delle bombe non possono essere duplicati (i 16 numeri devono essere tutti diversi)
Il giocatore, deve cercare di non prendere le bombe. Gli chiederemo 100 - 16 volte di scegliere un numero, uno alla volta, sempre compreso tra 1 e 100.
L'utente non può inserire 2 volte lo stesso numero
Ogni  volta che l'utente sceglie un numero che non è presente tra le bombe, guadagna un punto e poi gli chiediamo un altro numero.
Se il numero scelto dall'utente è presente tra i numeri bomba, la partita termina.
Quando la partita termina, comunichiamo all'utente il suo punteggio.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
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





/*1*/

const bombs = [];
//creo un numero random da 1 a 100
// console.log(numnerBombs);

//creom un ciclo while per verificarev la lunghezza della array bombs
while (bombs.length < 16) {
    /*inserisco la funzione creata per generare numeri random da 1 a100*/
    let numberBombs = getRandom(1, 100);
    /*creo una convalida per convalidare se il numero e già presente nella array bombs*/
    if (!bombs.includes(numberBombs)) {
        /*inseriso i knumeri univoci dentro l'array*/
        bombs.push(numberBombs);
    }

}
console.log(bombs);



function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}