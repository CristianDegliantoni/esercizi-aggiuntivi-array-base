// Dati gli atleti ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"] 
// e i relativi punteggi [78, 93, 86, 91, 82], 
// determina chi ha ottenuto il punteggio più alto, 
// il secondo e il terzo più alto 
// per assegnare rispettivamente oro, argento e bronzo.

const atleti = ["Antonio", "Bruno", "Carlo", "Diego", "Emanuel"];
const punteggi = [78, 93, 86, 91, 82];

// ==========================================
// 1. TROVIAMO L'ORO (il punteggio più alto)
// ==========================================
let oroNome = "";
let oroPunti = 0;
let oroIndice = 0;

for (let i = 0; i < punteggi.length; i++) {
    if (punteggi[i] > oroPunti) {
        oroPunti = punteggi[i];
        oroNome = atleti[i];
        oroIndice = i; // ci ricordiamo chi ha già vinto
    }
}

// ==========================================
// 2. TROVIAMO L'ARGENTO (il più alto ESCLUSO l'oro)
// ==========================================
let argentoNome = "";
let argentoPunti = 0;
let argentoIndice = 0;

for (let i = 0; i < punteggi.length; i++) {
    // Se non è chi ha vinto l'oro ed è più alto del punteggio argento attuale
    if (i !== oroIndice && punteggi[i] > argentoPunti) {
        argentoPunti = punteggi[i];
        argentoNome = atleti[i];
        argentoIndice = i; // ci ricordiamo anche chi ha vinto l'argento
    }
}

// ==========================================
// 3. TROVIAMO IL BRONZO (il più alto ESCLUSI oro e argento)
// ==========================================
let bronzoNome = "";
let bronzoPunti = 0;

for (let i = 0; i < punteggi.length; i++) {
    // Se non è l'oro e non è l'argento ed è più alto del punteggio bronzo attuale
    if (i !== oroIndice && i !== argentoIndice && punteggi[i] > bronzoPunti) {
        bronzoPunti = punteggi[i];
        bronzoNome = atleti[i];
    }
}

// ==========================================
// 4. STAMPA DEI RISULTATI
// ==========================================
console.log(`🥇 Oro: ${oroNome} con ${oroPunti} punti`);
console.log(`🥈 Argento: ${argentoNome} con ${argentoPunti} punti`);
console.log(`🥉 Bronzo: ${bronzoNome} con ${bronzoPunti} punti`);
