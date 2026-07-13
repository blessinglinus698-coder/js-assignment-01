// Print number
for (let i = 1; i <= 20; i++) {
   console.log(i);
}



// Even numbers 2 - 20///
   let i = 2
   while (i < 20) {
console.log(i)

i += 2;
   }



   // Array Loop 
   const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];
   for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
   }




// Count Array Items/

const nigerianstates = ["Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", "Cross River", "Delta"];
console.log(nigerianstates);
console.log(nigerianstates.length);




//Object/
const student = {
   firstname: "Blessing",
   lastname: "Linus",
   age: 28,
   course: "Web Development"
};

console.log(`My name is ${student.firstname} ${student.lastname}. I am ${student.age} years old and I am studying ${student.course}.`);



//Age Checker//
let age = 28; // can be changed to test different ages

if (age < 18) {
   console.log("Too young");

} else if (age >= 18 && age <= 30) {
   console.log("You can register");

}else {
   console.log("Registration closed");
}



//Login Validation//
let username = "Blessing_dev";
let password = "securepassword123";

if (username && password){
   console.log("Login Successful");
} else {
   console.log("username and password are required");
}



//Ternary Operator//
let score = 85;

let result = score >= 50 ? "Pass" : "Fail";
console.log(result);


//Logical Operators//

let hasID = true;
let hasTicket = false;

if (hasID && hasTicket) {
   console.log("You may enter");
} else {
   console.log("Acess denied");
}



//Mini Challenge

const students = ["David", "Sarah", "Michael", "Emily", "Daniel"];

for (let i = 0; i < students.length; i++) {
   if (students[i] === "Micheal") {
      console.log("Micheal is present.");
   } else {
      console.log(`${students[i]} is absent.`);
   }
}



//Exam grade checker//
let Score = 75;

if (Score >= 70) {
   console.log("EXCELLENT");
} else if (Score >= 60) {
   console.log("Very Good");
} else if (Score >= 50) {
   console.log("Pass");
} else {
   console.log("Fail");
}