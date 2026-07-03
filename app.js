// let hour = 12;
// let isWeekend = false;

// if (hour < 10 || hour > 18 || isWeekend) {
//   alert( 'The office is closed.' ); // it is the weekend
// } else {
//     alert( 'The office is open.' ); // it is a weekday
// }

// let firstName = "";
// let lastName = "";
// let nickName = "SuperCoder";

// alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder

// true && alert("not");
// false || alert("yes");

// let age = 80;

// if (age >= 14 && age <= 90) {alert("you are in the range");} else {alert("you are not")};

// let role = prompt("who's there?");

// if (role === "Admin"){
//     let password = prompt("enter pass!!!");
    
//     if (password === "TheMaster"){
//         alert("you may enter");
//     }else if(password === "Other"){
//         alert("who are you???");
//     }else{
//         alert("it's a anonym");
//     }
// }else if(role === "" || role ===null){
//     alert("canceled");
// }else{
//     alert("i don't know you");
// }

// let dompet = null;

// alert (dompet ?? 100);

outer : for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 7; j++) {

    if(j%2 == 1) continue;
    let input = prompt(`Value at coords (${i},${j})`);
    if (!input) break outer;

  }
}

alert('Done!');