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

function checkAge(age = prompt('How old are you?')){
    return(age > 18) || confirm('Did parents allow you?');
}

let result = checkAge();
alert("Hasil Akhir: " + result);