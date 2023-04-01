//7.1
// За допомогою методів об’єкта window створити:
//         1) нове вікно розміром 300х300 пікселів.
//         2) із затримкою 2 сек змініть розміри вікна на 500х500 пікселів
//         3) із затримкою 2 сек перемістіть вікно в точку з координатами (200, 200)
//         4) із затримкою 2 сек закрийте вікно.

// let newWindow = window.open("", "", "width=300, higth=300");
// setTimeout(() => {
//     newWindow.resizeTo(500, 500);
// }, 2000);
// setTimeout(() => {
//     newWindow.moveTo(200, 200);
// }, 4000);
// setTimeout(() => {
//     newWindow.close();
// }, 6000);


//7.2
// Для заданої HTML-сторінки:
// <p id ='text'>I learning JavaScript events!</p> 
// <div>
//         <button . . . . . >Change style!</button>
// </div>
// напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку 
// і змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".

function changeCSS() {
    const myText = document.getElementById("text");
    myText.style.color = "orange";
    myText.style.fontSize = "20px";
    myText.style.fontFamily = "Comic Sans MS";
}


//7.3
// Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку 
// з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. При відпусканні – білий.
//         4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
//         Приклад – курсор наведений на лінку.
// https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png

const container = document.querySelector(".container");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const link = document.querySelector(".link");

btn1.addEventListener("click", function () {
    container.style.backgroundColor = "blue";
});

btn2.addEventListener("dblclick", function () {
    container.style.backgroundColor = "pink";
});

btn3.addEventListener("mousedown", function () {
    container.style.backgroundColor = "brown";
});

btn3.addEventListener("mouseup", function () {
    container.style.backgroundColor = "white";
});

link.addEventListener("mouseover", function () {
    container.style.backgroundColor = "yellow";
});

link.addEventListener("mouseout", function () {
    container.style.backgroundColor = "white";
});


//7.4
// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// https://user-images.githubusercontent.com/9075641/228462160-e0584c12-eb4a-4973-b598-46e1cde9b941.png

const select = document.querySelector(".mySelect");
const deleteBtn = document.querySelector(".deleteBtn");

deleteBtn.addEventListener('click', function () {
    const selectedOptionIndex = select.selectedIndex;
    if (selectedOptionIndex !== -1) {
        select.options[selectedOptionIndex].remove();
    }
});


//7.5
// Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
// "I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", 
// а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
// Приклад роботи:
// https://user-images.githubusercontent.com/9075641/228462490-a2ec423a-44e3-40f5-9c0a-7e9d207f2822.png 

const btn = document.querySelector(".liveBtn");
const messageBox = document.querySelector(".message");

btn.addEventListener("click", function () {
    const message = document.createElement("p");
    message.innerText = "I was pressed!";
    messageBox.appendChild(message);
});

btn.addEventListener("mouseover", function () {
    const message = document.createElement("p");
    message.innerText = "Mouse on me!";
    messageBox.appendChild(message);
});

btn.addEventListener("mouseout", function () {
    const message = document.createElement("p");
    message.innerText = "Mouse is not on me!";
    messageBox.appendChild(message);
});


//7.6
// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера 
// і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// https://user-images.githubusercontent.com/9075641/228463011-5302f615-86e6-41dc-b09a-62bed3564596.png

window.addEventListener("resize", function () {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const output = document.querySelector(".output");
    output.textContent = `Width: ${width}px, Higth: ${height}px`;
});

const resizeEvent = new Event("resize");
window.dispatchEvent(resizeEvent);


//7.7
// На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн, у другому – назви міст. 
// Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого списку певна країна - 
// в правому випадаючому  списку з'являлися міста цієї країни. Список міст формується динамічно, через JavaScript. Т
// акож потрібно нижче вивести назву обраної країни і місто.
// Код HTML-сторінки:
// <select name="country" id="country">
//         <option value="ger">Germany</option>
//         <option value="usa">USA</option>
//         <option value="ukr">Ukraine</option>
// </select>
// <select name="cities" id="cities"></select>
// <p></p>

// https://user-images.githubusercontent.com/9075641/228463508-6225f4ee-7ad2-4130-b7fc-d97a2d236693.png

const countrySelect = document.querySelector("#country");
const citySelect = document.querySelector("#cities");
const selectedCountry = document.querySelector("#selected-country");
const selectedCity = document.querySelector("#selected-city");

countrySelect.addEventListener("change", function () {
    citySelect.innerHTML = "";    
    const selectedCountryValue = this.value;    
    selectedCountry.textContent = `Selected country: ${this.options[this.selectedIndex].text}`;    
    const citiesByCountry = {        
        "ukr": ["Kyiv", "Kharkiv", "Lviv", "Dnipro", "Odesa"],
        "usa": ["New York", "Los Angeles", "Chicago", "Houston", "Philadelphia"],
        "pol": ["Warsaw", "Krakow", "Lodz", "Wroclaw", "Poznan"]
    };    
    const cities = citiesByCountry[selectedCountryValue];
    cities.forEach(function (city) {
        const option = document.createElement("option");
        option.textContent = city;
        option.value = city;
        citySelect.appendChild(option);
    });
    selectedCity.textContent = "";
});

citySelect.addEventListener("change", function () {
    selectedCity.textContent = `Selected city: ${this.options[this.selectedIndex].text}`;
});
