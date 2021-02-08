//==============1==================
let rectangle = {a:{x : -20, y : 10}, c:{x : 20,y : -10} };
function areaRectangle(param) {
    return  Math.abs(param.c.x - param.a.x) * Math.abs(param.c.y - param.a.y);
}
    console.log(areaRectangle(rectangle));
function perRectangle(param) {
    return  Math.abs(param.c.x - param.a.x) * 2 + Math.abs(param.c.y - param.a.y) * 2;
}
    console.log(perRectangle(rectangle));
function changeWidth (param1, param2) {
    if (param1.a.x < 0){
         param1.a.x -= param2/2;
    } else {
         param1.a.x += param2/2;
    }
    if (param1.c.x < 0){
         param1.c.x -= param2/2;
    } else {
         param1.c.x += param2/2;
    }
    console.log(param1)
};
    // changeWidth(rectangle, 50);
function moveRectangle (param, moved_x, moved_y ){
    param1.a.x += moved_x;
    param1.c.x += moved_x;
    param1.a.y += moved_y;
    param1.c.y += moved_y;
    console.log(param);
} 
    // moveRectangle(rectangle, -10, -10);
function chekedPoint(param, point_x, point_y) {
        if(point_x > param.a.x && point_x < param.c.x && point_y < param.a.y && point_y > param.c.y){
        console.log("точка внутри")
    } else {
        console.log("точка снаружи")
    }
}
    // chekedPoint(rectangle, 0, 0);

let car = {
    manufacturer : "Daimler",
    model : "Mercedes-Benz",
    year_of_issue : 2012,
    average_speed : 100
}
function valueInfo(param) {
    alert(` manufacturer : ${param.manufacturer} \n model : ${param.model} \n year_of_issue : ${param.year_of_issue} \n average_speed : ${param.average_speed}`)
}
    // valueInfo(car);

function calkTime(param, distance) {
    let a = distance / param.average_speed;
    if (a > 4 && a % 4 === 0) {
        a = Math.floor(a / 4) + a - 1;
    } else {
        a = Math.floor(a / 4) + a;
    }
    console.log(a);
}
    // calkTime(car, 800);

    //==============4==================
let time = {hours : "00", minutes : "00", seconds : "00"}
function showTime (param) {
    alert(`${param.hours}:${param.minutes}:${param.seconds}`)
};
    // showTime(time);
function changeHours (param, h) {
    if (h < 10 && +param.hours + h < 10){
        param.hours = "0" + h 
    } else if (h >= 10 && h < 24){
        param.hours = h
    } else if (h > 24 && h % 24 < 10) {
        param.hours = "0" + h % 24 
    } else if (h % 24 === 0){
        param.hours = "00"
    }
     else {
        param.hours = h % 24 
    }
    console.log(`${param.hours}:${param.minutes}:${param.seconds}`)
};
    // changeHours(time, 35);


function changeSeconds (param, sec) {
    if (sec < 10 ){
        param.seconds = "0" + sec
    } else if (sec >= 10 && sec < 60) {
        param.seconds = sec
    } else if (sec % 60 === 0 && sec == 0 ) {
        param.seconds = "00"
    } else if (sec > 60 &&  Math.trunc(sec / 60) < 10 && sec % 60 < 10) {
        param.seconds ="0" + sec % 60;
        param.minutes ="0" + Math.trunc(sec / 60);
    } else if (sec > 60 &&  Math.trunc(sec / 60) < 10 && sec % 60 > 10) {
        param.seconds = sec % 60;
        param.minutes ="0" + Math.trunc(sec / 60); 
    } else if (sec > 60 &&  Math.trunc(sec / 60) >= 10 && sec % 60 >=10 && sec < 3600) {
        param.seconds = sec % 60;
        param.minutes = Math.trunc(sec / 60); 
    } else if (sec > 60 && Math.trunc(sec / 60) >= 10 && sec % 60 < 10 &&  sec < 3600) {
        param.seconds ="0" + sec % 60;
        param.minutes = Math.trunc(sec / 60);
    } else if (sec > 3600 && sec % 3600 < 10 && Math.trunc(sec / 3600) < 10 ) {
        param.seconds = "0" + sec % 3600
        param.hours = "0" + Math.trunc(sec / 3600)
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) < 10 && sec % 60 < 10 && Math.trunc(sec / 3600) < 24) {
        param.seconds = "0" + sec % 60
        param.minutes = "0" + Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600)
    } else if (sec % 3600 === 0 && Math.trunc(sec / 3600) < 10) {
        param.seconds = "00"
        param.minutes = "00"
        param.hours ="0" + Math.trunc(sec / 3600)
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) < 10 && sec % 60 >= 10 && Math.trunc(sec / 3600) < 24){
        param.seconds = sec % 60
        param.minutes = "0" + Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600)
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) >= 10 && sec % 60 < 10 &&  Math.trunc(sec / 3600) < 10){
        param.seconds ="0" + sec % 60
        param.minutes = Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600)
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) >= 10 && sec % 60 >= 10 && Math.trunc(sec / 3600) < 10 ){
        param.seconds = sec % 60
        param.minutes = Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600)
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) >= 10 && sec % 60 >= 10 && Math.trunc(sec / 3600) >= 10 && Math.trunc(sec / 3600) < 24){
        param.seconds = sec % 60
        param.minutes = Math.trunc((sec % 3600) / 60)
        param.hours =  Math.trunc(sec / 3600)
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) < 10 && sec % 60 >= 10 && Math.trunc(sec / 3600) > 24){
        param.seconds = sec % 60
        param.minutes = "0" + Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600) % 24
    } else if (sec > 3600 &&  Math.trunc((sec % 3600)/60) >= 10 && sec % 60 < 10 &&  Math.trunc(sec / 3600) < 10 && Math.trunc(sec / 3600) > 24){
        param.seconds ="0" + sec % 60
        param.minutes = Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600) % 24
    } else if (sec > 3600 && Math.trunc((sec % 3600)/60) >= 10 && sec % 60 >= 10 && Math.trunc(sec / 3600) < 10 && Math.trunc(sec / 3600) > 24){
        param.seconds = sec % 60
        param.minutes = Math.trunc((sec % 3600) / 60)
        param.hours = "0" + Math.trunc(sec / 3600) % 24
    } else if (sec > 3600 && Math.trunc((sec % 3600)/60) >= 10 && sec % 60 >= 10 && Math.trunc(sec / 3600) >= 10 && Math.trunc(sec / 3600) > 24){
        param.seconds = sec % 60
        param.minutes = Math.trunc((sec % 3600) / 60)
        param.hours = Math.trunc(sec / 3600) % 24
    }
    console.log(`${param.hours}:${param.minutes}:${param.seconds}`)
}
    changeSeconds (time,280871)
  