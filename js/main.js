//creo lista cognomi non ordinata
var cognomiDisordinati = ["Bianchi", "Rossi", "Duzioni", "Balsano", "Verdi"] ;
console.log(cognomiDisordinati);

//chiedo all'utente il proprio cognome
var cognomeUtente;
cognomeUtente=prompt("Inserisci il tuo cognome");
console.log(cognomeUtente);

//aggiungo il cognome nella var disordinata
cognomiDisordinati.push(cognomeUtente);
console.log(cognomiDisordinati);

//creo un duplicato della lista disordinata
var duplicatoCognomiDisordinati = cognomiDisordinati.slice();
console.log(duplicatoCognomiDisordinati);

//ordino la lista duplicata in ordine alfabetico
duplicatoCognomiDisordinati.sort();
console.log(duplicatoCognomiDisordinati);

//alert con posizione del nuovo aggiunto
for (var i = 0; i < duplicatoCognomiDisordinati.length; i++) {
    if (duplicatoCognomiDisordinati[i] == cognomeUtente) {
        alert("L'ordine di nome utente è " + (i+1));
    }
};


