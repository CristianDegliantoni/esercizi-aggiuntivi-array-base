//Un ospedale ha 7 infermieri con questi turni:
// ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"].
// Conta quanti infermieri lavorano in ciascun turno.



const turni = ["mattina", "pomeriggio", "notte", "mattina", "pomeriggio", "notte", "mattina"];
// 1. Dichiariamo i contatori prima del ciclo
let contatoreMattina = 0;
let contatorePomeriggio = 0;
let contatoreNotte = 0;
// 2. Cicliamo su ogni turno
turni.forEach(turno => {
    if (turno === "mattina") {
        contatoreMattina++;
    } else if (turno === "pomeriggio") {
        contatorePomeriggio++;
    } else if (turno === "notte") {
        contatoreNotte++;
    }
});
// 3. Stampiamo i risultati finali DOPO la fine del ciclo
console.log("Infermieri di mattina:", contatoreMattina);
console.log("Infermieri di pomeriggio:", contatorePomeriggio);
console.log("Infermieri di notte:", contatoreNotte);