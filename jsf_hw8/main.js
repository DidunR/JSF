// 8-1. 
// Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
// Приклад роботи:
// upperCase('regexp'); 
// "String's not starts with uppercase character"
// upperCase('RegExp');
// "String's starts with uppercase character"

function isFirstSymbolUpcase(str) {
    const regexp = /^[A-Z]/;
    if (regexp.test(str)) {
        return "String's starts with uppercase character";
    } else {
        return "String's not starts with uppercase character";
    }
}

console.log(isFirstSymbolUpcase("Hello world"));
console.log(isFirstSymbolUpcase("hello world"));
console.log(isFirstSymbolUpcase("hEllo world"));


// 8-2. 
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
// Валідними вважаються всі символи на різних позиціях.
// Приклад роботи:
// checkEmail("Qmail2@gmail.com");
// true

function checkEmail(email) {
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regexp.test(email)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEmail("example@example.com"));
console.log(checkEmail("example@.com"));
console.log(checkEmail("exam34 ple@.com."));
console.log(checkEmail("example@com"));
console.log(checkEmail("exmp22le@gmail.com"));


// 8-3. 
// Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
// Приклад роботи:
// Вхідний рядок    "Java Script"
// Вихід    “Script, Java”

const languageName = "Java Script";
const myResult = languageName.replace(/(\S+)\s+(\S+)/, "$2, $1");
console.log(myResult);


// 8-4. 
// Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).

function validateCreditCardNumber(cardNumber) {
    const regexp = /^(\d{4}-){3}\d{4}$/;
    return regexp.test(cardNumber);
}

console.log(validateCreditCardNumber('1234-5678-9012-3456'));
console.log(validateCreditCardNumber('1234-5678-9012-34567'));
console.log(validateCreditCardNumber('1234567890123456'));
console.log(validateCreditCardNumber('1234 5678 9012 3456'));


// 8-5.
// Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
// Вимоги:
// •  Цифри (0-9).
// •  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
// •  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
//  •  Символ “-” не може повторюватися.

// checkEmail('my_mail@gmail.com');
// "Email is correct!"
// checkEmail('#my_mail@gmail.com');
// "Email is not correct!"
// checkEmail('my_ma--il@gmail.com');
// "Email is not correct!"




// 8-6.
// Напишіть функцію, яка перевіряє правильність логіна. Правильний логін - рядок від 2 до 10 символів,
// що містить лише букви та числа, номер не може бути першим. Функція має приймати рядок і знаходити усі числа в цьому рядку,
// включаючи числа з плаваючою комою (наприклад, 3.4).
// Приклад роботи:
// checkLogin('ee1.1ret3');
// true
// //1.1, 3

// checkLogin('ee1*1ret3');
// false
// //1, 1, 3