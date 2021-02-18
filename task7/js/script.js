let i = document.getElementById('inp');
let b = +i.value;
function clikButton1() {
	b += 1;
	return (i.value = b);
}
function clikButton2() {
	b -= 1;
	return (i.value = b);
}
function onChange() {
	return (b = +i.value);
}

// ======================================================
let inp;
function nevTag(tag, parant_id, child_id) {
	let nevTag = document.createElement(tag);
	let div = document.getElementById(parant_id);
	div.append(nevTag);
	nevTag.id = child_id;
}
nevTag('h3', 'dv', 'rrr');
rrr.innerHTML = 'To Do List:';
let hhhh = 'id';
let a = document.getElementById('td');

function getToDo() {
	inp = a.value;
	return inp;
}

nevTag('ol', 'rrr', 'oll');

let li = '<li>';
let li1 = '</li>';

nevTag('ol', 'oll', 'liid');
function addToDo(value) {
	let acc = ` ${li}${value}${li1}`;
	liid.insertAdjacentHTML('beforeBegin', acc);
	a.value = '';
}
// =======================================================
let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2')
let num1;
let num2;
function getNumb1(){
    num1 = +inp1.value
    return num1
}
function getNumb2(){
    num2 = +inp2.value
    return num2
}
function showResult(a,b){
    let newDiv = document.createElement("div")
    let div12 = document.getElementById('dv2')
    div12.append(newDiv)
    newDiv.id = 'dv12'
    dv12.innerHTML = `${a+b}`
}
