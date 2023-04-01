//1
// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів. 
// У модальному вікні необхідно послідовно вивести вміст:
//         1) першого елемента списку
//         2) останнього елемента списку
//         3) другого елемента списку
//         4) четвертого елемента списку
//         5) третього елемента списку
// Приклад:
// •        1
// •        2
// •        3
// •        4
// •        5
// Результат виводу: 1, 5, 2, 4, 3

const listItems = document.querySelectorAll('#list li');
const first = listItems[0].textContent;
const last = listItems[listItems.length - 1].textContent;
const second = listItems[1].textContent;
const fourth = listItems[3].textContent;
const third = listItems[2].textContent;
const result = `${first}, ${last}, ${second}, ${fourth}, ${third}`;
// alert(result);


//2
// Для сторінки
// <body>
//   <h1>I'am a big header!!!</h1>
//   <div id="myDiv">
//     <p>First paragraph</p>
//     <p>Second paragraph</p>
//     <p>Third paragraph</p>
//     <p>Fourth paragraph</p>
//   </div>
//   <ul id="myList">
//     <li>Make</li>
//     <li>me</li>
//     <li>horizontal!</li>
//   </ul>
//   <span>Make me invisible, please!</span>
// </body>
// Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.

const header = document.querySelector('h1');
const div = document.querySelector('#myDiv');
const paragraphs = div.querySelectorAll('p');
const list = document.querySelector('#myList');
const span = document.querySelector('span');

header.style.backgroundColor = 'rgba(144,238,144,255)';
paragraphs[0].style.fontWeight = 'bold';
paragraphs[1].style.color = 'red';
paragraphs[2].style.textDecoration = 'underline';
paragraphs[3].style.fontStyle = 'italic';
list.style.display = 'flex';
list.style.listStyleType = 'none';
span.style.visibility = 'hidden';


//3
// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">         
//      <div id="myDiv">
//          <p>First paragraph</p>           
//      </div>
//  </main> 
// </body>

window.addEventListener('DOMContentLoaded', function () {
    const main = document.createElement('main');
    const div1 = document.createElement('div');
    const paragraph = document.createElement('p');

    main.classList.add('mainClass', 'check', 'item');
    div1.id = 'myDiv1';
    paragraph.textContent = 'First paragraph';
    div1.appendChild(paragraph);
    main.appendChild(div1);

    const container = document.createElement('div');
    container.id = 'Third task';
    container.appendChild(main);
    document.body.appendChild(container);
});


//4
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/Jjabvez

// const btn = document.querySelector('.btn');
// const outBlock = document.querySelector('.out');
// btn.addEventListener('click', (event) => {
//     event.preventDefault();
//     const fio = document.querySelector('[name="fio"]').value;
//     const phone = document.querySelector('[name="phone"]').value;
//     const birthday = document.querySelector('[name="birthday"]').value;
//     const email = document.querySelector('[name="email"]').value;
//     const arr = [fio, phone, birthday, email];
//     outBlock.textContent = arr.join(', ');
// });


//5
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/abzLvqo

// const circles = document.querySelectorAll('.circle');
// circles.forEach(circle => {
// const animClass = circle.getAttribute('data-anim');
// circle.classList.add(animClass);
// });
// function checkAnimation(element) {
// const animationName = element.style.animationName || getComputedStyle(element).animationName;
// return animationName !== 'none';
// }
// const firstCircle = document.querySelector('.circle:first-child');
// console.log(checkAnimation(firstCircle));


//6
// Задача описана в блоці JS
// https://codepen.io/misha_klymenko/pen/dyjyeGO

// const colors = document.querySelectorAll('.color');
// const priceDisplay = document.getElementById('outprice');

// let price = 189.99; // default price

// colors.forEach(color => {
//     color.addEventListener('click', () => {
//         const newPrice = Number(color.getAttribute('data-price'));
//         price = newPrice;
//         priceDisplay.textContent = price.toFixed(2);        
//         colors.forEach(c => c.classList.remove('active'));
//         color.classList.add('active');
//     });
// });

// const sizes = document.querySelectorAll('.size');
// const sizePrice = 20;

// sizes.forEach(size => {
//     size.addEventListener('click', () => {
//         const sizeValue = Number(size.getAttribute('data-value'));
//         const newPrice = price + (sizeValue * sizePrice);
//         price = newPrice;
//         priceDisplay.textContent = price.toFixed(2);        
//         sizes.forEach(s => s.classList.remove('active'));
//         size.classList.add('active');
//     });
// });

