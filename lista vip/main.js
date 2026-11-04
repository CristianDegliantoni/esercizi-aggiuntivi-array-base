//Data la lista VIP per una serata,
// verifica se l'utente X è presente nella lista VIP
//o se è nella lista standard.


const vip = ["luca", "giovanni", "lucia", "jason"];

const x = prompt("dimmi il tuo nome: ", "samuele");

// 1. Variabile di controllo (partiamo dal presupposto che non sia VIP)
let isVip = false;
// 2. Il ciclo serve SOLO a cercare se c'è
vip.forEach(personaVip => {
    if (personaVip === x) {
        isVip = true; // Trovato! Segnamo che è VIP
    }
});
// 3. FUORI dal ciclo diamo il verdetto finale
if (isVip) {
    console.log(`Benvenuto ${x}, sei nella lista VIP!`);
} else {
    console.log(`Benvenuto ${x}, lei è presente nella lista standard.`);
}