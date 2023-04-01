// 1
let a =1;
let b =2;
let c =5;
result = (a < b && b < c) ? "The statement is correct" : "The statement is incorrect";
console.log(result);


//2
let x = 1;
let y = 2;

let res1 = String(x) + y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = (x < y) + "" + y; // Допишіть код, необхідно використовувати змінні x і y
console.log(res2); // ""true2""
console.log(typeof res2); // ""string""

let res3 = x != y;// Допишіть код, необхідно використовувати змінні x і y
console.log(res3); // true
console.log(typeof res3); // ""boolean""

let res4 = x / (y - "a");// Допишіть код, необхідно використовувати змінні x і y
console.log(res4); // NaN
console.log(typeof res4); // ""number""


//3
const yourAge = prompt("What is your age?");
const isAdult = yourAge >= 18 ? "You have reached the age of majority" : "You are still too young";
alert(isAdult);


//4
let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let counts = {};
for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
}
let maxCount = 0;
let data;
for (let num in counts) {
    if (counts[num] > maxCount) {
        maxCount = counts[num];
        data = num;
    }
}
arr = arr.filter(num => num !== parseInt(data));
console.log(data);
console.log(arr);


//5
const sideA = parseFloat(prompt("Enter the length of the side A:"));
const sideB = parseFloat(prompt("Enter the length of the side B:"));
const sideC = parseFloat(prompt("Enter the length of the side C:"));

if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC) || sideA <= 0 || sideB <= 0 || sideC <= 0 ||
    sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    alert("Incorrect data");
} else {
    const triP = (sideA + sideB + sideC) / 2;
    const triA = Math.sqrt(triP * (triP - sideA) * (triP - sideB) * (triP - sideC));
    const sidesArr = [sideA, sideB, sideC];
    const hypo = Math.max(...sidesArr);
    const side1Sq = (sideA !== hypo) ? sideA**2 : null;
    const side2Sq = (sideB !== hypo) ? sideB**2 : null;
    const triangleType = (sideA === sideB && sideB === sideC ? "Your triangle is equilateral" 
    : side1Sq && side2Sq && side1Sq + side2Sq === hypo**2 
    ? "Your triangle is right angled" : "Your triangle is irregular");
    console.log(triangleType);
    console.log("Area of the triangle is " + triA.toFixed(3));
}


//6
let now = new Date();
let hours = now.getHours();

let greeting;
if (hours >= 23 && hours < 5) {
    greeting = "Good night";
} else if (hours >= 5 && hours < 11) {
    greeting = "Good morning";
} else if (hours >= 11 && hours < 17) {
    greeting = "Good afternoon";
} else {
    greeting = "Good evening";
}
console.log(greeting);

switch (true) {
    case (hours >= 23 && hours < 5):
        greeting = "Good night";
        break;
    case (hours >= 5 && hours < 11):
        greeting = "Good morning";
        break;
    case (hours >= 11 && hours < 17):
        greeting = "Good afternoon";
        break;
    default:
        greeting = "Good evening";
        break;
}
console.log(greeting);


hours >= 23 && hours < 5 ? "Good night" : hours >= 5 && hours < 11 ? "Good morning" 
: hours >= 11 && hours < 17 ? "Good afternoon" :  "Good evening";
console.log(greeting);