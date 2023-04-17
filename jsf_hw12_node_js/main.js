// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
// тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
// поточну робочу директорію і назву файлу сервера (використати модуль path).

const http = require("http");
const os = require("os");
const path = require("path");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<h1>OS Information</h1>`);
    res.write(`<p>User Name: ${os.userInfo().username}</p>`);
    res.write(`<p>OS Type: ${os.type()}</p>`);
    res.write(`<p>System Uptime: ${(os.uptime() / 60).toFixed(2)} minutes</p>`);
    res.write(`<p>Current Directory: ${path.resolve(".")}</p>`);
    res.write(`<p>File Name: ${path.basename(__filename)}</p>`);
    res.end();
});

server.listen(5000, () => {
    console.log("Server is running on http://localhost:5000");
});


// 12.2
// Необхідно створити власний модуль personalmodule.js, який містить функцію, що приймає ім’я системного юзера 
// і працює з поточним часом та на основі пори доби виводить повідомлення із привітанням юзера. 
// Щоб експортувати змінні чи функції модуля на зовні можна використати об’єкт module.exports. 
// Створіть Node.js сервер, який з використанням функціоналу розробленого модуля повертатиме наступну сторінку:

function greetUser(username) {
    const currentTime = new Date();
    const hour = currentTime.getHours();
    let greeting;

    if (hour < 6) {
        greeting = "Good night";
    } else if (hour < 12) {
        greeting = "Good morning";
    } else if (hour < 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }
    return `${greeting}, ${username}!`;
}

module.exports = { greetUser };

const http = require("http");
const personalModule = require("./personalmodule");

const newServer = http.createServer((req, res) => {
    const username = "UserName";
    const greeting = personalModule.greetUser(username);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end(greeting);
});

newServer.listen(port, hostname, () => {
    console.log("Server is running on http://127.0.0.1:3000");
});

