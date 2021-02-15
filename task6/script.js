// 1 Создайте массив styles с элементами «Джаз» и «Блюз».
//  2 Добавьте «Рок-н-ролл» в конец.
//  3 Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
//  4 Удалите первый элемент массива и покажите его.
//  5 Вставьте «Рэп» и «Регги» в начало массива

let styles = ["Джаз", "Блюз"];
let rock = "Рок-н-ролл";
let classic = "Классика";
let r = "Регги"
let rap = "Рэп"
let newMusic = styles.reduce(function (acc, currentValue, index) {
    if (index === styles.length - 1) {
        return (acc + "," + currentValue + "," + rock).split(",")
    }
    return (acc + "," + currentValue).split(",")
})
console.log(newMusic);

let newMusic1 = newMusic.reduce(function (acc, currentValue, index) {
    if (index === Math.floor(styles.length / 2)) {
        return (acc + "," + classic).split(",")
    } else {
        return (acc + "," + currentValue).split(",")
    }
})
console.log(newMusic1)

let newMusic2 = newMusic1.reduce(function (acc, currentValue, index) {
    if (index === 1) {
        console.log(acc)
    }
    if (index < 2) {
        acc = []
    }
    return acc.concat(currentValue)
})
console.log(newMusic2)

let newMusic3 = newMusic2.reduce(function (acc, currentValue, index) {
    return (acc + "," + currentValue).split(",")
}, rap + "," + r)
console.log(newMusic3)

// ==========================================================
let student = [
    { name: "AAA", enrollment: 100 },
    { name: "BBB", enrollment: 50 },
    { name: "CCC", enrollment: 50 }]
let abr = [
    { name: "AAA", enrollment: 100 },
    { name: "BBB", enrollment: 50 },
    { name: "CCC", enrollment: 50 }]

function changeStudent(arr,arr1) {
    let ar = arr1.splice(1, 2)
    let br = arr1.splice(0, 1)
    let b = arr.reduce(function (acc, item, i) {
        acc["50"] = item
        acc["100"] = item
        return acc
    }, {})
    let d = Object.fromEntries(
        Object.entries(b).map(([key, value]) => [key,[] ])
    );
    d[50].push(ar[0],ar[1]);
    d[100].push(br[0])
    return d
}
console.log(changeStudent(student,abr))