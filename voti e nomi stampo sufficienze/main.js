//Dati i voti e i nomi degli studenti,
//stampa chi ha la sufficienza e chi no.


const nomi = ["luca", "geronimo", "samuele"];
const voti = [8, 4, 6];
let insufficienza = 5;
for (let i = 0; i < nomi.length; i++) {
    voto = voti[i];
    nome = nomi[i];
    if (voto >= 6) {
        console.log(`${nome} ha la sufficienza (voto: ${voto})`);
    } else {
        console.log(`${nome} NON ha la sufficienza (voto: ${voto})`);
    }
}