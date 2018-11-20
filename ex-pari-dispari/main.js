// Esercizio: L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer e dichiariamo chi ha vinto.
// VIDEOLEZIONE 27/A

// 1) CHIEDIAMO ALL'UTENTE DI SCEGLIERI TRA PARI O DISPARI
 var utenteDichiara = prompt("Scrivi pari o dispari");
 console.log(utenteDichiara);

    // Per verificare che l'utente inserisca correttamente i dati posso:
    // Usare questo metodo

    // if (utenteDichiara == "pari" || utenteDichiara == "dispari") {
    //   alert("ok");
    //  }
    // else {
    //   alert("errore, ricarica la pagina")
    // }

    // Usare quest'altro metodo
    var valori_validi = ["pari", "dispari"];
    if (valori_validi.includes(utenteDichiara)) {
      alert("valore corretto");
    }
    else {
      alert("valore errato");
    }



 // 2) CHIEDIAMO ALL'UTENTE DI SCEGLIERI UN NUMERO DA 1 E 5

 var numeroUtente = parseInt(prompt("Scegli un numero da 1 e 5"));
 console.log(numeroUtente);

// 3) Generiamo un numero random per il computer utilizzando una funzione
// 3.1 QUESTA è LA MIA FUNZIONE

function numeroRandom(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 3.2 QUESTO è IL NUMERO RANDOM DEL PC
var numeropc = numeroRandom(1, 5);
console.log(numeropc);

// 4)  MI CREO UNA FUNZIONE PER SOMMARE IL NUMERO DELL'UTENTE E QUELLO DEL PC

function sommaNumeri (a, b){
return a + b;
}

var somma = sommaNumeri(numeroUtente, numeropc);
console.log(somma);

// 4) VERIFICO SE LA SOMMA DEI DUE NUMERI SE è PARI O DISPARI ATTRAVERSO UNA VARIABILE E NON UNA FUNZIONE

var pari = false;
  if ((somma % 2) == 0) {
  pari = true;
  console.log("è pari");
  }
  else {
  console.log("è dispari");
  }

// ESITO GIOCO

var esito;
if (utenteDichiara == "pari" && pari) {
  console.log("hai vinto");
}

else if (utenteDichiara == "dispari" && !pari) {
  console.log("hai vinto");
}

else {
  console.log("hai perso");
}
