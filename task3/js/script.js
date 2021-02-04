//1
let a = +prompt("начало");
let b = +prompt("конец");
let c = 0;
for (let i = a; i <= b; i++){
    c += i;
}
console.log(c);


//3
let a = +prompt("число");
for (let i = 0; i <= a; i++) {
    if (a % i === 0) {
        console.log(i);
    }
};

//4
let a = +prompt("число");
let b = 1;
while ((a /= 10) >= 1) {
    b++;
}
console.log(b);

//5
let a;
let b = 1;
let c = 0;
let d = 0;
let f = 0;
do  {
    a = +prompt(`Введите число №${b}`);
    b++;
    if (a === 0) {
        c +=1
    } else if (a < 0){
        d +=1
    } else if (a > 0){
        f +=1
    }
} while (b <= 10);
    alert(`вы ввели:\n` + `нолей-${c}\n` + `отрицательных-${d}\n` + `положительных-${f}`);

//6
let d;
do{
    let a = +prompt("Введите число 1");
    let b = +prompt("Введите число 2");
    let c = prompt("Введите знак");
    switch (c) {
        case "-":alert(`результат ${a - b}`)
            break;
        case "+":alert(`результат ${a + b}`)
            break;
        case "*":alert(`результат ${a * b}`)
            break;
        case "/":alert(`результат ${a / b}`)
            break;
        default:
            break;
    }
    d = confirm("еще пример?");
} while (d);
    
//7
let a = prompt("Введите число ");
let b = +prompt("на сколько символов его сдвинуть?");
let c;
let d;
let f;
while (b > 0) {
   b--; 
   c = a.substr(0, 1)
   d = a.slice(1)
   f = d + c;
   a = f;
}
alert(f);

//8
let a;
do {
    a = +confirm("Понедельник. Хотите увидеть следующий день?");
    if (a == false) break;
    a = +confirm("Вторник. Хотите увидеть следующий день?");
    if (a == false) break;
    a = +confirm("Среда. Хотите увидеть следующий день?");
    if (a == false) break;
    a = +confirm("Четверг. Хотите увидеть следующий день?");
    if (a == false) break;
    a = +confirm("Пятница. Хотите увидеть следующий день?");
    if (a == false) break;
    a = +confirm("Суббота. Хотите увидеть следующий день?");
    if (a == false) break;
    a = +confirm("Воскресенье. Хотите увидеть следующий день?"); 
    if (a == false) break; 
} while (a == true);


//9
let a ;
let b = 2;
for ( let i = 1; b <= 11, i <= 10; i++) {
    a = b * i;
    console.log(`${b} * ${i} = ${a}`);
    if (i === 9){
    b++; 
    i = 0;
    if (b === 10){
        break;
    }
}    
}
 
   
    
//11
let b = 1;
let a = +prompt("Введите число ");
while (a > 1) {
    b *= a;
    a--; 
}
console.log(b);




