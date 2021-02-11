//  В массиве, состоящем из n элементов, вычислить:
//============2=================
// – сумму модулей элементов массива, расположенных после первого отрицательного элемента. 
let arr = [101, -34, 340, -1245, -74, -3, 0];
let e = 0;
let b;
for (i = 0; i < arr.length; i++) {
    if (b) {
        e += Math.abs(arr[i])
    }
    if (arr[i] < 0) {
        b = true;
    }
};
console.log(e);

//=======1===========
// – номер минимального элемента массива;
// – номер максимального элемента массива; 
let max;
let min;
let c = arr[0];
for (i = 0; i < arr.length; i++) {
    if (c < arr[i]) {
        c = arr[i];
        max = i
    }
    if (c > arr[i]) {
        c = arr[i];
        min = i
    }
};
console.log(min, max);

//=======3===========
// – сумму элементов массива, расположенных после первого положительного элемента.
let sum = 0;
let s;
for (i = 0; i < arr.length; i++) {
    if (s) {
        sum += (arr[i])
    }
    if (arr[i] > 0) {
        s = true;
    }
};
console.log(sum);


//=======4===========
// – количество элементов массива, лежащих в диапазоне от А до В .
let arr1 = [101, "A", -34, 340, -74, -3, 5, "B", 0];
let count = 0;
let s1;
for (i = 0; i < arr1.length; i++) {
    if (arr1[i] == "B") {
        break
    }
    if (s1 === true) {
        count++;
    }
    if (arr1[i] === "A") {
        s1 = true
    }
}
console.log(count);

//=======5===========
// – сумму элементов массива, расположенных после максимального элемента. 

let sum1 = 0;
let max1;
for (i = 0; i < arr.length; i++) {
    if (c < arr[i]) {
        c = arr[i];
        max1 = i;
    }
}
for (i = max1 + 1; i < arr.length; i++) {
    sum1 += arr[i]
}
console.log(sum1);

//=======6===========
// – количество элементов массива, равных 0 
let count1 = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
        count1++
    }
}
console.log(count1)

//=======7===========
// – количество элементов массива, больших С 
let count2 = 0;
for (i = 0; i < arr.length; i++) {
    if (arr[i] > 200) {
        count2++
    }
}
console.log(count2)

//=======8===========
// – произведение элементов массива, расположенных после максимального по модулю элемента 
let summ = 0;
let max1_1;
let c1 = arr[0];
for (i = 0; i < arr.length; i++) {
    if (c1 < Math.abs(arr[i])) {
        c1 = Math.abs(arr[i]);
        max1_1 = i;
    }
}
for (i = max1_1 + 1; i < arr.length; i++) {
    summ += arr[i]
}
console.log(summ);

// ==================================================================================================

// Задание 
// 1 Создать массив из 10 случайных чисел:
// 1. Программа выводит его на экран. 
// 2. Программа выводит только четные элементы. 
// 3. Программа возвращает сумму всех элементов массива. 
// 4. Программа возвращает его максимальный элемент. 
// 5. Программа добавляет новый элемент в массив по указанному индексу. 
// 6. Программа удаляет элемент из массива по указанному индексу.

// ==================================================================================================
// 1 Создать массив из 10 случайных чисел:
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
let numb;
let arrRandom = [];
for (i = 0; i < 10; i++) {
    numb = getRandomInt(-200, 200);
    arrRandom.push(numb);
}
console.log(arrRandom);
// ==================================================================================================
// 2. Программа выводит только четные элементы.
function getEven(e) {
    if (e % 2 === 0) {
        console.log(e);
    }
}
arrRandom.forEach(getEven);
// ==================================================================================================
// 5. Программа добавляет новый элемент в массив по указанному индексу.
let index1 = 4;
for (i = 0; i < arrRandom.length; i++) {
    if (i === index1) {
        arrRandom.splice(index1, 1, "000000")
    }
}
console.log(arrRandom);
// ==================================================================================================
// 6. Программа удаляет элемент из массива по указанному индексу.
let index = 1;
for (i = 0; i < arrRandom.length; i++) {
    if (i === index) {
        arrRandom.splice(index, 1)
    }
}
console.log(arrRandom);
// ==================================================================================================
// ====================================================================================
// ====================================================================
let a = +prompt("введите a")
let b = +prompt("введите b")
let c = +prompt("введите c")
let f;

function solveEquation1(arr, a, b, c) {
    for (let i = 0; i < arrRandom.length; i++) {
        if (arr[i] < 0 && b !== 0) {
            f = a * b ** 2 + b
        } else if (arr[i] > 0 && b === 0) {
            f = (arr[i] - a) / (arr[i] - c)
        } else {
            f = arr[i] / c
        }
        console.log(f);
    }
}
solveEquation1(arrRandom, a, b, c)


function solveEquation2(arr, a, b, c) {
    for (let i = 0; i < arrRandom.length; i++) {
        if (a < 0 && c !== 0) {
            f = a * arr[i] ** 2 + b * arr[i] + c
        } else if (a > 0 && c === 0) {
            f = -a / (c - arr[i])
        } else {
            f = a * (arr[i] + c)
        }
        console.log(f);
    }
}
solveEquation2(arrRandom, a, b, c);

// ======================================================================
// ======================================================================
// ======================================================================

let arrList = [
    { title: "milk", count: 3, buy: true },
    { title: "juice", count: 2, buy: true },
    { title: "apple", count: 5, buy: false },
    { title: "orangre", count: 1, buy: false }]

function showAll(arr) {
    let a = "", b = "";
    for (let i = 0; i < arr.length; i++)
        if (arr[i].buy === false) {
            a += "title: " + arr[i].title + ", count: " + arr[i].count + ", buy: " + arr[i].buy + "\n"
        } else {
            b += "title: " + arr[i].title + ", count: " + arr[i].count + ", buy: " + arr[i].buy + "\n"
        }
    alert(`${a}${b}`)
};

function addBuy(arr) {
    let a = "";
    let b;
    let c;
    for (let i = 0; i < arr.length; i++) {
        a += arr[i].title + "\n"
    }
    b = prompt(`что добавить? \n${a}`);
    c = +prompt("сколько?");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === b) {
            arr[i].count += c;
        }
    }
}
function changeBuy(arr) {
    let a = "";
    let b;
    for (let i = 0; i < arr.length; i++) {
        a += arr[i].title + "\n"
    }
    b = prompt(`что купили? \n${a}`);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].title === b) {
            arr[i].buy = true;
        }
    }
}
addBuy(arrList);
changeBuy(arrList);
showAll(arrList);