// Date le temperature settimanali,
//trova il valore massimo, 
//il minimo
//e calcola la media aritmetica delle sette giornate.

const temperatureSettimanali = [20, 25, 23, 24, 21, 27, 25];
let somma = 0;
// Inizializziamo max e min con il primo elemento dell'array
let max = temperatureSettimanali[0];
let min = temperatureSettimanali[0];
// Scorriamo tutto l'array
for (let i = 0; i < temperatureSettimanali.length; i++) {
    const temperatura = temperatureSettimanali[i];
    // 1. Aggiungiamo la temperatura alla somma totale
    somma += temperatura; // equivale a: somma = somma + temperatura;
    // 2. Verifichiamo se è il nuovo massimo
    if (temperatura > max) {
        max = temperatura;
    }
    // 3. Verifichiamo se è il nuovo minimo
    if (temperatura < min) {
        min = temperatura;
    }
}
// 4. Calcoliamo la media FUORI dal ciclo (somma / numero di elementi)
const media = somma / temperatureSettimanali.length;
// Stampiamo i risultati
console.log(`Temperatura massima: ${max}°`);
console.log(`Temperatura minima: ${min}°`);
console.log(`Media settimanale: ${media.toFixed(2)}°`); // toFixed(2) arrotonda a 2 decimali