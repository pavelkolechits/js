let x = true;
let y = false;
let z = false;

function switchLight() {
	if (x) {
		document.querySelector('#y1').classList.add('yellow--mod');
		document.querySelector('#r1').classList.remove('red--mod');
		x = false;
		y = true;
		z = false;
	} else if (y) {
		document.querySelector('#g1').classList.add('green--mod');
		document.querySelector('#y1').classList.remove('yellow--mod');
		x = false;
		y = false;
		z = true;
	} else if (z) {
		document.querySelector('#r1').classList.add('red--mod');
		document.querySelector('#g1').classList.remove('green--mod');
		x = true;
		y = false;
		z = false;
	}
}
//================================================
let arr = document.querySelectorAll('li');
function clik(e) {
	arr.forEach((item) => {
		item.classList.remove('color');
	});
	e.target.classList.add('color');
}
// ======================================================

function getRandomNumber() {
	let numb = Math.trunc(Math.random().toFixed(2) * 100);
	document.querySelector('#rn').innerHTML = numb;
}
// ===========================================================
let sw = true;
function showOrHide() {
	if (sw) {
		document.querySelector('#sh').classList.add('hide');
		sw = false;
	} else if (sw === false) {
		document.querySelector('#sh').classList.remove('hide');
		sw = true;
	}
}

// ================================================
let b = 0;
let lik = document.querySelector('#cl');

function addLike() {
	b += 1;
	lik.innerHTML = b;
}

// ===================================================
let bb = 0;
function addVolume() {
	bb += 5;
	document.querySelector('#hhh').value = bb;
}
//====================================================
let text;
let div = document.querySelector('.wind1');
let textarea = document.createElement('textarea');
let xxx;

function changetext() {
	div = document.querySelector('.wind1');
	document.querySelector('.changetext').append(textarea);
	textarea.innerHTML = div.innerHTML;
	textarea.classList.add('area');
	textarea.classList.remove('dn');
	div.classList.add('dn');
	xxx = true;
}
function saveText() {
	if (xxx) {
		div.innerHTML = textarea.value;
		textarea.classList.add('dn');
		div.classList.remove('dn');
	}
}
let ctrl;
document.addEventListener('keydown', function () {
	if (event.keyCode === 17) {
		ctrl = true;
	}
});
document.addEventListener('keydown', function () {
	if (event.keyCode === 69 && ctrl === true) {
		event.preventDefault();
		changetext();
	}
});
document.addEventListener('keydown', function () {
	if (event.keyCode === 83 && ctrl === true) {
		event.preventDefault();
		saveText();
	}
});

//==================================================================
document.addEventListener('scroll', function () {
	if (pageYOffset < 300) {
		document.querySelector('.pd').classList.add('pd--mod');
		document.querySelector('.pd').classList.remove('pd--mod2');
	}
	if (pageYOffset > 300) {
		document.querySelector('.pd').classList.add('pd--mod2');
		document.querySelector('.pd').classList.remove('pd--mod');
	}
});
function pageUp() {
	window.scrollTo({
		top: 0,
		behavior: 'smooth',
	});
}
//==================================================================
function hoverOver() {
	let elem = event.target;
	elem.classList.add('hov');
	if (event.target.id == 'h') {
		elem.classList.remove('hov');
	}
}
function hoverOut() {
	let elem = event.target;
	elem.classList.remove('hov');
}
//===============================================================
let getX;
let getY;
let heihgt;
let toggle = false;
let cont = document.querySelector('.container');
function getCoords() {
	getX = event.clientX;
	getY = event.clientY;
	let div = document.querySelector('.divarea');
	if (toggle) {
		div.style.height = `${getY - div.getBoundingClientRect().top}px`;
		div.style.width = `${getX - cont.clientWidth / 2 + div.clientWidth / 2}px`;
	}
}
function moveDiv() {
	toggle = true;
}
function leaveDiv() {
	toggle = false;
}
document.addEventListener('mousemove', getCoords);
document.addEventListener('mouseup', leaveDiv);
// ===============================================================

let arrUsers = [
	{ Firstname: 'Mark', Lastname: 'Zuckerberg', Age: 34, Company: 'Facebook' },
	{ Firstname: 'Larry', Lastname: 'Page', Age: 45, Company: 'Google' },
	{ Firstname: 'Timothy', Lastname: 'Cook', Age: 57, Company: 'Apple' },
	{ Firstname: 'Bill', Lastname: 'Gates', Age: 62, Company: 'Microsoft' },
];
let divtable = document.querySelector('.sort');

let first = document.createElement('div');
let last = document.createElement('div');
let age = document.createElement('div');
let company = document.createElement('div');
let arrElem = [first, last, age, company];

function appElem(elem, elemclass) {
	divtable.append(elem);
	elem.classList.add(elemclass);
}
appElem(first, 'info');
appElem(last, 'info');
appElem(age, 'age');
appElem(company, 'info');

function createH2(elem, eleminner) {
	elem.append(document.createElement('h2'));
	elem.innerHTML = eleminner;
}

createH2(first, '<h2>Firstname<h2>');
createH2(last, '<h2>Lastname<h2>');
createH2(age, '<h2>Age<h2>');
createH2(company, '<h2>Company<h2>');

let li;

arrUsers.sort(getSortFunction('Age'));

function getSortFunction(fieldName) {
	return function (a, b) {
		if (a[fieldName] > b[fieldName]) {
			return 1;
		}
		if (a[fieldName] < b[fieldName]) {
			return -1;
		}
		return 0;
	};
}

function addLi(param, fieldName) {
	arrUsers.forEach((item) => {
		li = document.createElement('h3');
		param.append(li);
		li.innerHTML = item[fieldName];
	});
}
let keys = Object.keys(arrUsers[0]);

function creatLI() {
	for (i = 0; i < keys.length; i++) {
		p = arrElem[i];
		b = keys[i];
		addLi(p, b);
	}
}

creatLI();
function deletUsers() {
	first.innerHTML = '<h2>Firstname<h2>';
	last.innerHTML = '<h2>Lastname<h2>';
	age.innerHTML = '<h2>Age<h2>';
	company.innerHTML = '<h2>Company<h2>';
}
document.addEventListener('click', () => {
	if (event.target.innerHTML == 'Firstname') {
		arrUsers.sort(getSortFunction('Firstname'));
	}
	if (event.target.innerHTML == 'Lastname') {
		arrUsers.sort(getSortFunction('Lastname'));
	}
	if (event.target.innerHTML == 'Age') {
		arrUsers.sort(getSortFunction('Age'));
	}
	if (event.target.innerHTML == 'Company') {
		arrUsers.sort(getSortFunction('Company'));
	}
	deletUsers();
	creatLI();
});

// let firstTagInnerHtml;
// let isFirstClick = true;
// let secondTagInnerHtml;
// let clickedTag;

// function rrr() {
// 	if (isFirstClick) {
// 		firstTagInnerHtml = event.target.innerHTML;
// 		clickedTag = event.target;
// 		clickedTag.classList.add('ddd');
// 		isFirstClick = false;
// 	} else {
// 		secondTagInnerHtml = event.target.innerHTML;
// 		event.target.innerHTML = firstTagInnerHtml
// 		clickedTag.classList.remove('ddd');
// 		clickedTag.innerHTML = secondTagInnerHtml;
// 		isFirstClick = true;
// 	}
// }
// let student = [
// 	{ name: 'AAA', enrollment: 100 },
// 	{ name: 'BBB', enrollment: 50 },
// 	{ name: 'CCC', enrollment: 150 },
// 	{ name: 'AAA', enrollment: 50 },
// 	{ name: 'BBB', enrollment: 250 },
// 	{ name: 'AAA', enrollment: 150 },
// 	{ name: 'CCC', enrollment: 250 },
// 	{ name: 'CCC', enrollment: 50 },
// ];

// let obj = student.reduce((acc, item) => {
// 	if (acc[item.enrollment]) {
// 		acc[item.enrollment].push(item);
// 	} else {
// 		acc[item.enrollment] = [item];
// 	}
// 	return acc;
// }, {});

// console.log(obj);
document.addEventListener("click")