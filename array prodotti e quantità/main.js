// Dato un array di prodotti e uno di quantità, 
// stampa se il prodotto è esaurito 
// o se le scorte sono basse.


const prodotti = ["pasta", "uova", "pancetta"];
const quantità = [20, 2, 0];


// Definiamo una soglia per considerare le scorte "basse" (es. meno di 3)
const sogliaBassa = 3;
for (let i = 0; i < prodotti.length; i++) {
    const prodotto = prodotti[i];
    const qta = quantità[i];
    if (qta === 0) {
        console.log(`${prodotto}: esaurito`);
    } else if (qta < sogliaBassa) {
        console.log(`${prodotto}: scorte basse (rimaste: ${qta})`);
    } else {
        console.log(`${prodotto}: disponibile (rimaste: ${qta})`);
    }
}