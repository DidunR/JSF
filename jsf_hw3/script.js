//1
// Написати функцію compact() яка має приймати на вхід масив, а на вихід має повертати значення нового масиву без повторень.
// приклад:

const arr1 = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr1);
console.log(arr2); // [5,3,4,6,7]

function compact(arr) {
    return Array.from(new Set(arr));
}


//2
// Написати функцію createArray(start, end), яка приймає на вхід 2 параметри:
//  - початкове значення
//  - кінцеве значення
// а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)

function createArray(start, end) {
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }

let arr = createArray(5, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]


//3
// Задані цілі числа a і b (a < b). Виведіть усі цілі числа від a до b включно, при цьому a виводится 1 раз, число а+1 - два рази і т.д.

function outputNumbers(a, b) {
    for (let i = a; i <= b; i++) {
      for (let j = a; j <= i; j++) {
        console.log(i);
      }
    }
  }

outputNumbers(1, 7);


//4
// Напишіть функцію randArray(k), яка заповнюватиме масив k випадковими цілими числами. Випадкові числа генеруються із діапазону 1-500.
// randArray(5);  // [399,310,232,379,40]

function randArray(k) {
  let arr = [];
  for (let i = 0; i < k; i++) {
    arr.push(Math.floor(Math.random() * 500));
  }
  return arr;
}

console.log(randArray(5));


//5
// Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
// Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, але одного типу даних 
// (не приводити тип стрінг в число навіть якщо там лише число)

/* 
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/

function splitByType(arr) {
  let numberArr = [];
  let stringArr = [];

  for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
          const subArrays = splitByType(arr[i]);
          numberArr = numberArr.concat(subArrays[0]);
          stringArr = stringArr.concat(subArrays[1]);
      } else if (typeof arr[i] === "number") {
          numberArr.push(arr[i]);
      } else if (typeof arr[i] === "string") {
          stringArr.push(arr[i]);
      }
  }
  return [numberArr, stringArr];
}

const mixedArr = [5, "Limit", 12, "a", "3", 99, 2, [2, 4, 3, "33", "a", "text"], "strong", "broun"];
const arrByType = splitByType(mixedArr);
console.log(arrByType);


//6
// Напишіть функцію calc(a, b, op), яка виконує над числами a і b одну із арифметичних операцій та повертає її результат. 
// Вид операції визначається цілим числом op: 1 – віднімання, 2 – добуток, 3 – ділення, інші значення – додавання.

function calc(a, b, op) {
  if (op === 1) {
    return a - b;
  } else if (op === 2) {
    return a * b;
  } else if (op === 3) {
    return a / b;
  } else {
    return a + b;
  }
}

console.log(calc(4, 6, 5));


//7
// Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
// Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.

function findUnique(arr) {
  const uniqueSet = new Set(arr);
  return uniqueSet.size === arr.length;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));