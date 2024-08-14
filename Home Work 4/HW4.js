// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function formulaSquare(a,b) {
    return a * b;
}
console.log(formulaSquare(15,20));
// ===============================================================
// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
function formulaCircleR(r){
    return Math.PI * r * 2;
}
console.log(formulaCircleR(20));
// ===============================================================
// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function formulaCylinder(R, H){
    return 2 * Math.PI * R * H;
}
console.log(formulaCylinder(20, 10));
// ===============================================================
// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент
function arrayElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrayElements([{ name: "Іван", age: 25 }, { name: "Олена", age: 30 }, { name: "Петро", age: 28 }])
// ===============================================================
// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент
function paragraph(txt) {
    // document.write('<p>' + txt +
    //     '</p>');
    document.write(`<p>${txt}</p>`)
}
paragraph('Lorem ipsum dolor sit amet');

// ===============================================================
// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write. Текст li задати через аргумент всім однаковий
function list(text) {
    document.write('<ul>' +
    '<li>' + text + '</li>' +
    '<li>' + text + '</li>' +
    '<li>' + text + '</li>' +
    '</ul>');
}
list('Lorem ipsum dolor sit amet');
// ===============================================================
// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write
function list2(txt2,countOfLi) {
    document.write('<ul>')
    for (let j = 0; j < countOfLi; j++) {
        document.write('<li>' + txt2 + '</li>');
        
    }
    document.write('</ul>');
}
list2('Елемет списку', 6);
// ===============================================================
// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write
function listOfArr(...elements){
    document.write('<ul>')
    for (element of elements) {
        document.write('<li>' + element + '</li>')

    }
    document.write('</ul>')
}
listOfArr('Lorem ipsum dolor sit amet', 500, true, false, 33);
// ===============================================================
// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function arrOfObjects(users) {
    for (const user of users) {
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`)
    }
}
arrOfObjects([{ id: 1, name: 'Ivan', age: 25 },
    { id: 2, name: 'Olena', age: 30 },
    { id: 3, name: 'Andriy', age: 22 },
    { id: 4, name: 'Nina', age: 27 }]);
// ===============================================================
//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву
function findMinNumber(arr) {
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    return min;
}
console.log(findMinNumber([5, 12, 3, 8, 22]))
// ===============================================================
// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}
console.log(sum([1,2,10]));
// ===============================================================
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// index-1
// index-2
function swap(arr, index1, index2) {
        if (index1 < arr.length && index2 < arr.length) {
            let temp = arr[index1];
            arr[index1] = arr[index2];
            arr[index2] = temp;

            return arr;
        }
    return -Infinity;


}

console.log(swap([11, 22, 33, 44], 0, 1));
// ===============================================================
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            return sumUAH / currencyValues[i].value; // Знаходимо відповідну валюту і виконуємо обмін
        }
    }
    return 'Валюта не знайдена';
}

console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
