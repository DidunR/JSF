// 12-1.
// Створити Node.js http-сервер, який слухатиме запити на порт 5000 на локальній  машині. 
// Сервер повинен повертати сторінку, що містить ім’я поточного користувача операційної системи, 
// тип операційної системи, час роботи системи в хвилинах (використати модуль OS), 
// поточну робочу директорію і назву файлу сервера (використати модуль path).

const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`<h1>OS Information</h1>`);
    res.write(`<p>User Name: ${os.userInfo().username}</p>`);
    res.write(`<p>OS Type: ${os.type()}</p>`);
    res.write(`<p>System Uptime: ${(os.uptime() / 60).toFixed(2)} minutes</p>`);
    res.write(`<p>Current Directory: ${path.resolve('.')}</p>`);
    res.write(`<p>File Name: ${path.basename(__filename)}</p>`);
    res.end();
});

server.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
