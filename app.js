let massage;
let age = prompt("enter your age :");

if (age < 18){
    massage = "you are not allowed";
} else if (age > 18){
    massage = "you are to old";
}else{
    massage = "you may in";
}

alert(age);
alert(massage);