console.log('hello, world');

/*
Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero

Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

Tools:
- inputs
- let / const
- math
- if / else
- .Document.GetElementById / QuesrySelector
- element.value
- element.addEventListner()
- function(){//code here}
*/

// select required DOM elements (salviamo in una costante elementi della pagina)
const generateBtnElement = document.querySelector('#generate');
const ageInputElement = document.querySelector('#age');
const kmInputElement = document.querySelector('#km');
const pricePerKm = 0.21;

//add an event listner on the button
generateBtnElement.addEventListener('click', function(){ // se lo si usa su form si seleziona tutto il form (al posto di #generate) non solo il bottone e non si usa click come evento ma submit.
  //console.log('clicked', ageInputElement.value, kmInputElement.value);

  // read the input values
  const age = parseInt(ageInputElement.value); //rendere numero la stringa
  const km = Number(kmInputElement.value); //rendere numero la stringa

  //console.log(km * pricePerKm);

  // do your math
// il prezzo del biglietto è definito in base ai km (0.21 € al km)

const fullPrice = km * pricePerKm;
console.log(fullPrice);

// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65
let discount;

if (age < 18){
console.log('apply 20% discount');
discount = 0.2
}
else if (age > 65){
console.log('apply 40% discount');
discount = 0.4
}
else {
console.log('apply full price');
discount = 0    
}

const finalPrice = fullPrice - (fullPrice * discount)
console.log('€' + finalPrice.toFixed(2));

// far comparire il totale in pagina
document.getElementById('ticket').innerHTML = 'Your ticket price is' + ' €' + finalPrice.toFixed(2)


});





