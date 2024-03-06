const nome = prompt("Inserisci il tuo nome:"); // string | null
console.log("Il nome inserito è: " + nome);

const cognome = prompt("Inserisci il tuo cognome:"); // string | null
console.log("Il cognome inserito è: " + cognome);

const colorePreferito = prompt("Inserisci il tuo colore preferito:"); // string | null
console.log("Il colore preferito inserito è: " + colorePreferito); 

let password = nome + cognome + colorePreferito; 
console.log("La password inserita è:" + nome + cognome + colorePreferito); //string null

let numeroCasuale = Math.random();
console.log("Numero casuale: " + numeroCasuale); //numero

let numeroB = 294

let numeroFinale = (numeroCasuale * numeroB);
console.log(numeroCasuale * numeroB); //numero

let numeroIntero = parseInt(numeroFinale);
console.log("Numero intero: " + numeroIntero); //numero

let passwordFinale = nome + cognome + colorePreferito + numeroIntero; 
console.log ("la password inserita è:" + nome + cognome + colorePreferito + numeroIntero); //string null