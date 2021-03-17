let en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./";
let arrEn = en.split('');
let enUp = "QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./";
let arrEnUp = enUp.split('');
let ru = 'йцукенгшщзхъфывапролджэячсмитьбю.';
let arrRu = ru.split('');
let numbers = '1234567890-=';
let arrNumbersEn = numbers.split('');
let shiftNumbersEn = '!@#$%^&*()_+';
let arrShiftNumbersEn = shiftNumbersEn.split('');
let shiftNumbersRu = `!"№;%:?*()_+`;
let arrshiftNumbersRu = shiftNumbersRu.split('');

let objAllSymbol = {
	En: arrEn,
	Ru: arrRu,
	shiftEn: arrShiftNumbersEn,
	shiftRu: arrshiftNumbersRu,
	EnUp: arrEnUp,
};

let textArea = document.querySelector('#text');
let keyboard = document.querySelector(".keyboard")
function createEnButton(arr) {
	arr.forEach((item) => {
		let button = document.createElement('button');
		keyboard.append(button);
		button.innerHTML = item;
	});
}

function createNumber() {
	arrNumbersEn.forEach((item) => {
		let button = document.createElement('button');
		keyboard.append(button);
		button.innerHTML = item;
	});
}

let Caps = document.createElement('button');
keyboard.append(Caps);
Caps.innerHTML = 'Caps Lock';

createEnButton(objAllSymbol.En);
createNumber()

let toggleCapsLock = true;

function removeButton() {
	let arrbutton = document.querySelectorAll('button');
	for (let i = 1; i < arrbutton.length; i++) {
		arrbutton[i].remove();
	}
}

function capsLock() {
	if (event.target.innerHTML === 'Caps Lock') {
		toggleCapsLock = !toggleCapsLock;
	}
	if (toggleCapsLock === false) {
		removeButton();
		createEnButton(objAllSymbol.EnUp);
        createNumber()
	}
	if (toggleCapsLock) {
		removeButton();
		createEnButton(objAllSymbol.En);
        createNumber()
	}
}

document.addEventListener('click', capsLock);
