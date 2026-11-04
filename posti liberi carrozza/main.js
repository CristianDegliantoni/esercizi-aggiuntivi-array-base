// Dati i posti liberi per carrozza[2, 0, 4, 7, 12, 8],
// chiedi all'utente il numero di passeggeri del gruppo 
// e assegna loro la prima carrozza che ha capienza sufficiente,
// stampando il numero della carrozza scelta.



const postiCarrozza = [2, 0, 4, 7, 12, 8];

// 1. Chiediamo il numero e lo convertiamo in intero
const numeroPasseggeri = parseInt(prompt("Da quante persone è composto il gruppo? ", "6"));
// Variabile flag per sapere se abbiamo trovato posto
let carrozzaAssegnata = false;
// 2. Scorriamo le carrozze
for (let i = 0; i < postiCarrozza.length; i++) {
    // 3. Controlliamo se la carrozza ha posti a sufficienza
    if (postiCarrozza[i] >= numeroPasseggeri) {
        // NOTA: gli array partono da indice 0, ma per l'utente la prima carrozza è la numero 1 (quindi i + 1)
        const numeroCarrozza = i + 1;

        console.log(`Carrozza assegnata: numero ${numeroCarrozza} (posti liberi: ${postiCarrozza[i]})`);
        carrozzaAssegnata = true;

        // 4. Ci fermiamo alla PRIMA carrozza trovata
        break;
    }
}
// 5. Se il ciclo è finito e nessuna carrozza andava bene
if (!carrozzaAssegnata) {
    console.log("Nessuna carrozza ha posti sufficienti per il tuo gruppo.");
}