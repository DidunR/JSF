//2
console.log("Didun");

//3
let firstAnimal = "dog";
let secondAnimal = "cat";
console.log(firstAnimal);
console.log(secondAnimal);
firstAnimal = secondAnimal;
console.log(firstAnimal);
console.log(secondAnimal);

//4
let teslaCar = {
    model: "Y",
    color: "black",
    price: 60000,
    electric: true,
    power: undefined,
    year: null
};
console.log(teslaCar);

//5
const areYouAdult = confirm("Are you adult?");
const isAdult = areYouAdult;
console.log(isAdult);

//6
const myName = "Roman";
const surname = "Didun";
const group = 1;
const yearOfBirth = 1989;
const merried = true;
console.log(typeof yearOfBirth, yearOfBirth);
console.log(typeof group, group);
console.log(typeof merried, merried);
console.log(typeof myName, myName);
console.log(typeof surname, surname);
const fish = undefined;
const animal = null;
console.log(fish);
console.log(animal);

//7
const yourName = prompt("What is your name?");
const yourEmail = prompt("What is your e-mail?");
const yourParol = prompt("What is your parol?");
let yourInfo = "'Dear " + yourName + ", your email is " + yourEmail + ", your password is " + yourParol + "'";
// alert(`Dear ${yourName}, your email is ${yourEmail}, your password is ${yourParol}`);
alert(yourInfo);

//8
let secondInMinute = 60;
let minuteInHour = 60;
let secondInHour = secondInMinute * minuteInHour;
let hourInDay = 24;
let secondInDay = secondInHour * hourInDay;
let dayInMonth = 30;
let secondInMonth = secondInDay * dayInMonth;
console.log(secondInHour);
console.log(secondInDay);
console.log(secondInMonth);
