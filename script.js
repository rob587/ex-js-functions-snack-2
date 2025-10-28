// funzione dichiarativa

// function somma(a, b) {
//   return a + b;
// }

// somma(5, 3);

// console.log(somma(5, 3));

// funzione anonima assegnata a una variabile
// const somma = function (a, b) {
//   return a + b;
// };

// console.log(somma(5, 3));

// arrow function
// const somma = (a, b) => {
//   return a + b;
// };

// console.log(somma(5, 3));

// SNACK 2

// const quadrato = (n) => {
//   return n * n;
// };

// console.log(quadrato(2));

// SNACK 3

// // creata funzione callback chiamata moltiplica
// const moltiplica = (a, b) => a * b;
// // variabile che accetta 2 argomenti e l'argomento generico, eseguo la funzione che è stata passata come parametro
// const eseguiOperazione = (a, b, operatore) => operatore(a, b);

// console.log(eseguiOperazione(5, 3, moltiplica));

// SNACK 4

// function creaTimer(time) {
//   return () => {
//     setTimeout(() => {
//       console.log("Tempo scaduto");
//     }, time);
//   };
// }

// const timer = creaTimer(2000);
// timer();
