//Date le ore lavorative giornaliere [40, 35, 45, 38, 42] 
//e una paga base di 15€/ora, 
//calcola lo stipendio totale settimanale
//applicando una maggiorazione di 5€ 
//per ogni ora straordinaria oltre le 40 giornaliere.

const oreGiornaliere = [40, 35, 45, 38, 42];

const pagaOraria = 15;

let stipendioSettimanale = 0;

for (let i = 0; i < oreGiornaliere.length; i++) {
    const ore = oreGiornaliere[i];
    let guadagnoGiorno = 0;
    if (ore > 40) {
        // Ha fatto straordinari:
        // 40 ore pagate normali (15€) + le ore in più pagate con maggiorazione (15 + 5 = 20€)
        const oreStraordinarie = ore - 40;
        guadagnoGiorno = (40 * pagaOraria) + (oreStraordinarie * (pagaOraria + 5));
    } else {
        // Nessuno straordinario: tutte le ore a 15€
        guadagnoGiorno = ore * pagaOraria;
    }
    // Aggiungiamo il guadagno di oggi al totale della settimana
    stipendioSettimanale += guadagnoGiorno;
}

console.log(stipendioSettimanale)