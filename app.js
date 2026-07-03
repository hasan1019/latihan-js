'use strict';
// const userName = 'John';

// function showMessage() {
//   let userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage();

// alert( userName );

// function checkAge(age = prompt('How old are you?')){
//     return(age > 18) ? alert(true) : confirm('Did parents allow you?');
//     alert(age);
// }

// function checkAge(age = prompt('How old are you?')){
//     return(age > 18) || confirm('Did parents allow you?');
// }

// let result = checkAge();
// alert("Hasil Akhir: " + result);

// let age = prompt("What is your age?", 18);

// if (age < 18) {

//   function welcome() {
//     alert("Hello!");
//   }

// } else {

//   function welcome() {
//     alert("Greetings!");
//   }

// }

// welcome();

function apakahGenap(angka) {
  return angka % 2 === 0; // Mengembalikan true atau false
}

// Fungsi bisa langsung dipakai sebagai syarat IF
if (apakahGenap(9)) {
  alert("Angka ini genap!");
}else{
  alert("Angka ini ganjil!");}