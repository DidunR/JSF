// 11.1
// Реалізуйте функцію getPromise(message, delay), яка приймає текстове повідомлення message і 
// цілочисельне значення затримки delay (в мс) і повертає Promise, який чекає задану кількість часу 
// (використовуючи аргумент delay) і завершується повідомленням message.
// Приклад застосування функції:
// Результат: через 2 сек в консолі виводиться "test promise"

function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function (data) {
    console.log(data);
});


// 11.2
// Реалізуйте функцію calcArrProduct(arr), яка приймає масив чисел. Функція повинна повернути Promise, 
// робота якого завершується поверненням добутку елементів масиву, якщо вони є типу Numbers, 
// або повідомленням "Error! Incorrect array!" у випадку, якщо хоча б 1 елемент масиву нечисловий.
// Приклад застосування функції:

function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        let product = 1;
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] !== "number") {
                reject("Error! Incorect arrey!");
            }
            product *= arr[i];
        }
        resolve(product);
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result));
// "Error! Incorrect array!"


// 11.3
// Створіть наступний асинхронний ланцюжок promise:

new Promise(function (resolve, reject) {
    let number = prompt("Enter a number:");  // Запитуємо у користувача number за допомогою prompt()
    if (isNaN(number)) {  // Якщо користувач ввів не число - викликаємо reject()
        reject("Error! Not a number entered!");
    } else {
        resolve(number);  // Якщо користувач ввів число- викликаємо resolve(number)
    }
}).catch(function (error) {
    return new Promise(function (resolve, reject) {
        let number = prompt("Please enter a number:");  // Запитуємо у користувача number, до тих пір, поки він його не введе
        while (isNaN(number)) {
            number = prompt("Please enter a number:");
        }
        resolve(number);  // Після вводу числа - викликаємо resolve(number)
    });
}).then(function (result) {
    console.log(result);  // Вивід number у консоль
});


// 11.4
// Заданий цикл for, який виводить послідовність чисел від 0 до 10 з випадковим інтервалом (від 0 до N мілісекунд). 
// Використовуючи проміси потрібно змінити цикл так, щоб числа виводилися в строгій послідовності від 0 до 10. 
// Наприклад, якщо виведення нуля займає 4 секунди, а одиниці 2 секунди, то одиниця повинна дочекатися виведення  
// нуля і тільки потім почати свій відлік (щоб дотримуватися послідовності).
// Для розв’язку задачі необзідно застосувати задану функцію delay(i, time), яка повертає проміс, 
// який резолвиться поточним значенням числа-лічильника циклу і, яке виводиться через час time мілісекунд.
// Результат: 
// з різним рендомним інтервалом (наприклад від 0 до 3 сек) в консоль послідовно  виводяться числа 0,1,2,3,4,5,6,7,8,9 
// Задачу потрібно реалізувати без застосування промісів. Переписати функцію showNumbers, використовуючи конструкцію async/await.
// Приклад  роботи:


const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));
async function showNumbers() {
    for (let i = 0; i <= 10; i++) {
        await delay(i, Math.floor(Math.random() * 1000)); // рандомний інтервал від 0 до 1000 мілісекунд
        console.log(i);
    } // your code with using delay(i, time)
}
showNumbers();