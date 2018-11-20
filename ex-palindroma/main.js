// Usa una funziona per capire se la parola è palindroma
// lezione 27/a
// CHIEDO ALL'UTENTE DI INSERIRE UNA PAROLA
var parola = prompt("inserisci una parola per verificare se è palindroma");
console.log(parola);

var parola_al_contrario = "";
// CREO UN CICLO FOR PER INVERTITE L'ORDINE DELLE LETTERE DELLA PAROLA CHE LA COMPONGONO, PARTO DALLA FINE DELLA PAROLA E ARRIVO A >= 0
for (var i = parola.length -1; i >= 0; i--) {
// parola_al_contrario = parola_al_contrario + parola[i];
parola_al_contrario += parola[i];
// += EQUIVALE A PRENDERE parola_al_contrario E SOMMARLA A parola
console.log(parola_al_contrario);
}

if (parola == parola_al_contrario) {
  alert("è palindroma");
}

else {
  alert("non è palindroma");
}
