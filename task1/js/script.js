//======    1    ======
let a = +prompt("Введите число");
alert(a**2);


// ======   2   ======
let numb1 = +prompt("Введите число");
let numb2 = +prompt("Введите число");
let m = (numb1 + numb2)/2;
alert("Среднее арифметическое " + m);


// ======   3   ======
let area = +prompt("Введите сторону квадрата");
alert("Площадь квадрата " + area**2);

// ======   4   ======
const mile = 0.621371;
let klm = +prompt("Если Вы введете расстояние в километрах, получите расстояние в милях");
let summDistance = mile*klm;
alert("Расстояние в милях " +  summDistance);


// ======   5   ======
let arg1 = +prompt("Введите число");
let arg2 = +prompt("Введите число");
let summ, mns, pltp, dvsn; 
summ = arg1 + arg2;
mns = arg1 - arg2;
pltp = arg1 * arg2;
dvsn = arg1 / arg2;
alert("Сумма=" + summ + "\n" +"Вычетание=" + mns + "\n" + "Умножение=" + pltp + "\n" + "Деление=" + dvsn);


// ======   6   ======
let a = +prompt("Введите число  а");
let b = +prompt("Введите число  b");
let x = -b/a;
alert("x=" + x);


// ======   7   ======
const a = 23;
const b = 60;
let hour = +prompt("Введите время, часы");
let minutes = +prompt("Введите время, минуты");
let time1 = a - hour;
let time2 = b - minutes;
alert("До следуещего дня осталось " + time1 + "ч. " + time2 + "мин.");


// ======   8   ======
let number = +prompt("Введите трехзначное число");
let x = Math.trunc(number/10)%10;
alert(x);


// ======   9   ======
let number = +prompt("Введите число");
let number1 = Math.trunc(number/10)*10;
let x = number - number1;
alert((String(x) + Math.trunc(number/10)));


// ======   10   ======
let a = +prompt("Введите сумму продаж");
alert(a * 0.1 + 250 + "$");

//1
let a = prompt("Введите Ваше имя");
alert("Привет," + a + "!");

//2
let a = +prompt("Ваш год рождения");
const b = 2021;
alert("Вам " + (b - a));

//3
let a = +prompt("Введите сторону квадрата");
alert("Периметр=" + a*4);

//4
let a = +prompt("Введите радиус окружности");
alert("Площадь окружности " + (Math.PI * a**2));

//5
let a = +prompt("Введите расстояние между городами, км");
let b = +prompt("За сколько часов Вы хотите добраться");
alert("Необходимо двигаться со скоростью " + (a / b) + "км/ч");


//6
let a = +prompt("конвертер вылюты USD => euro")
const euro = 3.1288;
const usd = 2.5782;
let b = usd / euro;
alert(a + "$ = " + (a * b).toFixed(3) + "euro");


//7
let a = +prompt("Укажите объем накопителя в Гб");
alert("Поместится " + (a / .82).toFixed(0) + " файла(ов) размером 820 Мг");


//8
let a = +prompt("Введите сумму денег");
let b = +prompt("Цена одной шоколадки");
let c = (a / b).toFixed(0);
let d = a % b;
alert("Вы можете купить " + c + "шт." + "\n" + "Остаток " + d );

//9
let a = +prompt("Введите трехзначное число");
alert(String(a % 10) + Math.trunc(a / 10) % 10 + Math.trunc(a / 100) % 10);