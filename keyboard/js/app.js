const en = "`qwertyuiop[]asdfghjkl;'zxcvbnm,./1234567890-= ";
const enUp = "`QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./1234567890-= ";
const enUpShift = `~qwertyuiop{}asdfghjkl:"zxcvbnm<>?!@#$%^&*()_+ `;
const enShift = `~QWERTYUIOP{}ASDFGHJKL:"ZXCVBNM<>?!@#$%^&*()_+ `;

const ru = 'ёйцукенгшщзхъфывапролджэячсмитьбю.1234567890-= ';
const ruUp = 'ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ.1234567890-= ';
const ruUpShift = `ёйцукенгшщзхъфывапролджэячсмитьбю,!"№;%:?*()_+ `;
const ruShift = `ЁЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ,!"№;%:?*()_+ `;

const arrEn = en.split('');
const arrEnUp = enUp.split('');
const arrEnUpShift = enUpShift.split('');
const arrEnShift = enShift.split('');

const arrRu = ru.split('');
const arrRuUp = ruUp.split('');
const arrRuUpShift = ruUpShift.split('');
const arrRuShift = ruShift.split('');

const allSymbol = [];

for (let i = 0; i < 47; i++) {
	allSymbol.push([
		arrEn[i],
		arrEnUp[i],
		arrEnUpShift[i],
		arrEnShift[i],
		arrRu[i],
		arrRuUp[i],
		arrRuUpShift[i],
		arrRuShift[i],
	]);
}
function createButton(param) {
	allSymbol.forEach((item) => {
		let button = document.createElement('button');
		document.body.append(button);
		button.innerHTML = item[param];
		button.classList.add('button');
	});
}
createButton(0);
let arrButtons = document.querySelectorAll('.button');
function innerButton(param) {
	for (let i = 0; i < 46; i++) {
		arrButtons[i].innerHTML = allSymbol[i][param];
	}
}

let CapsLock = document.createElement('button');
document.body.append(CapsLock);
CapsLock.innerHTML = 'CapsLock';
CapsLock.id = 'caps';

let Shift = document.createElement('button');
document.body.append(Shift);
Shift.innerHTML = 'Shift';
Shift.id = 'shift';

let Alt = document.createElement('button');
document.body.append(Alt);
Alt.innerHTML = 'Alt';
Alt.id = 'alt';

let space = arrButtons[46];
space.style.width = '100px';
space.style.height = '15px';

let BackSpace = document.createElement('button');
document.body.append(BackSpace);
BackSpace.innerHTML = 'BackSpace';
BackSpace.id = 'BackSpace';

let Enter = document.createElement('button');
document.body.append(Enter);
Enter.innerHTML = 'Enter';
Enter.id = 'enter';
function creatArrow(param, id) {
	let arrow = document.createElement('button');
	document.body.append(arrow);
	arrow.innerText = `${param}`;
	arrow.id = id;
}
creatArrow('←', 'arrowLeft');
creatArrow('↑', 'arrowUp');
creatArrow('→', 'arrowRight');
creatArrow('↓', 'arrowDown');

let toggleCaps = true;
function pushCapsLock() {
	if (!toggleLang) {
		if (toggleCaps) {
			CapsLock.style.background = '#ccc';
			innerButton(5);
		}
		if (!toggleCaps) {
			CapsLock.style.background = '';
			innerButton(1);
		}
		if (!toggleShift) {
			innerButton(6);
		}
	} else {
		if (toggleCaps) {
			CapsLock.style.background = '#ccc';
			innerButton(1);
		}
		if (!toggleCaps) {
			CapsLock.style.background = '';
			innerButton(0);
		}
		if (!toggleShift) {
			innerButton(2);
		}
	}
	toggleCaps = !toggleCaps;
}
let inner = '';
function addInStr(event, param) {
	let string = textArea.value;
	let rightStr = string.slice(0, coord);
	let leftStr = string.slice(coord);
	if (event.target.innerHTML !== 'Enter') {
		inner += event.target.innerHTML;
	}
	if (event.target.id === 'space') {
		inner += ' ';
	}
	textArea.value = inner;
	textArea.innerHTML = '';
	textArea.value = rightStr + inner + param + leftStr;
	inner = '';
	textArea.focus();
	return textArea.setSelectionRange(++coord, coord);
}

document.querySelector('#caps').onclick = pushCapsLock;
let textArea = document.querySelector('#text');

function pushButton(event) {
	addInStr(event, '');
	if (!toggleLang) {
		if (!toggleShift) {
			Shift.style.background = '';
			innerButton(4);
		}
		if (!toggleShift && !toggleCaps) {
			innerButton(5);
			toggleShift = true;
		}
	} else {
		if (toggleShift) {
			Shift.style.background = '';
			innerButton(0);
		}
		if (!toggleShift && !toggleCaps) {
			innerButton(1);
			toggleShift = true;
		}
	}
	Alt.style.background = '';
}
arrButtons.forEach((i) => {
	i.onclick = pushButton;
});
let toggleShift = true;
function pushShift() {
	if (!toggleAlt) {
		if (toggleCaps) {
			innerButton(6);
		}
		if (!toggleCaps) {
			innerButton(5);
		}
		toggleLang = !toggleLang;
		toggleShift = false;
	} else {
		if (toggleCaps) {
			innerButton(3);
		}
		if (!toggleCaps) {
			innerButton(2);
		}
		Shift.style.background = '#ccc';
		toggleShift = false;
		switchLang();
	}
	Alt.style.background = '';
}
document.querySelector('#shift').onclick = pushShift;
let toggleAlt = true;
function pushAlt() {
	if (toggleAlt) {
		Alt.style.background = '#ccc';
	} else {
		Alt.style.background = '';
	}
	toggleAlt = !toggleAlt;
	switchLang();
}
document.querySelector('#alt').onclick = pushAlt;

let toggleLang = true;

function switchLang() {
	if (!toggleAlt && !toggleShift) {
		toggleLang = !toggleLang;
	}
	console.log(toggleLang);
}

function getCaretPos() {
	textArea.focus();
	if (!toggleLeftRight) {
		toggleLeftRight = true;

		return --textArea.selectionEnd;
	} else if (toggleLeftRight) {
		return textArea.selectionStart;
	}
}
let coord;
function cleanForm() {
	coord = getCaretPos();
}
document.addEventListener('click', cleanForm);

function removeToRight() {
	textArea.focus();
	return textArea.setSelectionRange(coord + 1, coord + 1);
}
document.querySelector('#arrowRight').onclick = removeToRight;

let toggleLeftRight;

function removeToLeft() {
	textArea.focus();
	toggleLeftRight = false;
	return textArea.setSelectionRange(coord - 1, coord);
}

document.querySelector('#arrowLeft').onclick = removeToLeft;

function pushEnter() {
	addInStr(event, '\n');
}

document.querySelector('#enter').onclick = pushEnter;

function pushBackspace() {
	let string = textArea.value;
	let rightStr = string.slice(0, coord - 1);
	let leftStr = string.slice(coord);
	if (event.target.innerHTML !== 'Enter' && event.target.innerHTML !== 'BackSpace') {
		inner += event.target.innerHTML;
	}
	textArea.value = inner;
	textArea.innerHTML = '';
	textArea.value = rightStr + inner + leftStr;
	inner = '';
	textArea.focus();
	return textArea.setSelectionRange(--coord, coord);
}
document.querySelector('#BackSpace').onclick = pushBackspace;

// document.addEventListener("click",() => console.log(event))

let arrLine = [];

function getCoordEnter() {
	let arr = textArea.value.split('');
	let count = 0;

	arr.forEach((i) => {
		count++;
		if (i === '\n') {
			arrLine.push(count);
		}
	});
}
function pushDown() {
	getCoordEnter();
	let startCoord;
	for (let i = 0; i < arrLine.length; i++) {
		if (arrLine[i] <= coord && arrLine[i + 1] >= coord) {
			startCoord = coord - arrLine[i];
			coord = arrLine[i + 1] + startCoord;
			break;
		}
	}
	if (coord >= 0 && coord <= arrLine[0]) {
		coord = arrLine[0] + coord;
	}
	textArea.focus();
	textArea.setSelectionRange(coord, coord);
}
document.querySelector('#arrowDown').onclick = pushDown;
