// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let formulaSquare = (a, b) => a * b;
console.log(formulaSquare(2,5));
// ====================================================================
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
let formulaCircleR = (r) => Math.PI * r * 2;
console.log(formulaCircleR(20));
// ====================================================================
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let formulaCylinder = (R, H) => 2 * Math.PI * R * H;
console.log(formulaCylinder(20, 10));
// ====================================================================
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayElements(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}
arrayElements([{ name: "Іван", age: 25 }, { name: "Олена", age: 30 }, { name: "Петро", age: 28 }])
// ====================================================================
// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let newParagraph = (txt) => document.write(`<p>${txt}</p>`);
newParagraph('Lorem ipsum dolor sit amet');
// ====================================================================
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let list = (text) =>
    document.write('<ul>' +
        '<li>' + text + '</li>' +
        '<li>' + text + '</li>' +
        '<li>' + text + '</li>' +
        '</ul>');
list('Lorem ipsum dolor sit amet');
// ====================================================================
// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let list2 = (txt2, countOfLi) => {
    document.write('<ul>');
    for (let j = 0; j < countOfLi; j++) {
        document.write('<li>' + txt2 + '</li>');
    }
    document.write('</ul>');
};
list2('Елемет списку', 6);
// ====================================================================
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let listOfArr = (...elements) => {
    document.write('<ul>');
    for (element of elements) {
        document.write('<li>' + element + '</li>')
    }
    document.write('</ul>');
};
listOfArr('Lorem ipsum dolor sit amet', 500, true, false, 33);
// ====================================================================
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrOfObjects = (users) =>{
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
arrOfObjects([{ id: 1, name: 'Ivan', age: 25 },
    { id: 2, name: 'Olena', age: 30 },
    { id: 3, name: 'Andriy', age: 22 },
    { id: 4, name: 'Nina', age: 27 }]);
// ====================================================================
// #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
let findMinNumber = (arr) => {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}
console.log(findMinNumber([5, 12, 3, 8, 22]))
// ====================================================================
// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sum = (arr) => {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sum([1,2,10]));
// ====================================================================
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;

        return arr;
    }
    return -Infinity;
}
console.log(swap([11, 22, 33, 44], 0, 1));
// ====================================================================
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value;
        }
    }
    return 'Валюта не знайдена';
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));