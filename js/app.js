'use strict';
let mark;
let text;
let student = prompt("Please enter your name:", "AHMAD");

if (student == null || student == "") {
    text = alert("User cancelled the prompt.");
} else {
    mark = Math.floor(prompt("WELCOME " + student + "! please enter the mark ?")) ;
    console.log(mark);

    if (mark <= 0) {
        mark = alert("WELCOME " + student + " This mark is Invalid !");
    }
    else if (mark > 0 && mark <= 49) {
        text = alert("WELCOME " + student + " Your result 'F' ! you failed :( ");
    }
    else if (mark >= 50 && mark <= 60) {
        text = alert("WELCOME " + student + " Your result 'D' ! you pass :) ");
    }
    else if (mark >= 61 && mark <= 70) {
        text = alert("WELCOME " + student + " Your result 'C' ! you pass :) ");
    }
    else if (mark >= 71 && mark <= 80) {
        text = alert("WELCOME " + student + " Your result 'B' ! you pass :) ");
    }
    else if (mark >= 81 && mark <= 90) {
        text = alert("WELCOME " + student + " Your result 'A' ! you pass :) ");
    }
    else if (mark >= 91 && mark <= 100) {
        text = alert("WELCOME " + student + " Your result 'A+' ! you pass :) ");
    }
    else {
        mark = prompt("WELCOME " + student + " This mark is Invalid !");
    }
}
