let inp = document.getElementById('ent');
let cont = 0;
let arrL = [];
let container;
let containerAcc = 0;
let arr1 = [];
let arr2 = [];
inp.value = 0;
function displayArray() {
	inp.value = arrL.join('');
}
function clickButton(param) {
	arrL.push(param);
	displayArray();
}
let point = ',';
document.addEventListener('keydown', function (event) {
	if (event.code == 'Digit1') {
		clickButton(1);
	}
	if (event.code == 'Digit2') {
		clickButton(2);
	}
	if (event.code == 'Digit3') {
		clickButton(3);
	}
	if (event.code == 'Digit4') {
		clickButton(4);
	}
	if (event.code == 'Digit5') {
		clickButton(5);
	}
	if (event.code == 'Digit6') {
		clickButton(6);
	}
	if (event.code == 'Digit7') {
		clickButton(7);
	}
	if (event.code == 'Digit8') {
		clickButton(8);
	}
	if (event.code == 'Digit9') {
		clickButton(9);
	}
	if (event.code == 'Digit0') {
		clickButton(0);
	}
});
//=======================================
let sw;
function plus() {
	if (containerAcc == 0) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		arr1.reduce(function (acc, item) {
			return (containerAcc = acc + +item);
		}, 0);


		
		inp.value = containerAcc;
		arrL = [];
		sw = true;
		sw1 = false;
		sw2 = false;
		sw3 = false;
		swpoint = true;
		// console.log(arrL,arr1)
		
	}
	
	
	// console.log(arrL,arr1)
	container = inp.value;
	arr1 = [];
	arr1.push(container);
	arr1.reduce(function (acc, item) {
		return (containerAcc = acc - +item);
	});

	inp.value = containerAcc;
	arrL = [];
	sw2 = false;
	sw1 = false;
	sw = true;
	sw3 = false;
	swpoint = true;
	console.log(arrL,arr1)
}

//===========================================
function minus() {
	if (containerAcc == 0) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		arr1.reduce(function (acc, item) {
			return (containerAcc = acc - +item);
		}, 2 * container);
		inp.value = containerAcc;
		arrL = [];
		sw1 = true;
		sw = false;
		sw2 = false;
		sw3 = false;
		swpoint = true;
	}
	container = inp.value;
	arr1 = [];
	arr1.push(container);
	arr1.reduce(function (acc, item) {
		return (containerAcc = acc - +item);
	});
	inp.value = containerAcc;
	arrL = [];
	sw1 = true;
	sw = false;
	sw2 = false;
	sw3 = false;
	swpoint = true;
}
//===============================================

let sw2;
function generation() {
	if (containerAcc == 0) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		arr1.reduce(function (acc, item) {
			return (containerAcc = acc * +item);
		}, 1);
		inp.value = containerAcc;
		arrL = [];
		sw2 = true;
		sw1 = false;
		sw = false;
		sw3 = false;
		swpoint = true;
	}
	container = inp.value;
	arr1 = [];
	arr1.push(container);
	arr1.reduce(function (acc, item) {
		return (containerAcc = acc * +item);
	}, 1);
	inp.value = containerAcc;
	arrL = [];
	sw2 = true;
	sw1 = false;
	sw = false;
	sw3 = false;
	swpoint = true;
}
//===================================================
let sw3;
function denominator() {
	if (containerAcc == 0) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		arr1.reduce(function (acc, item) {
			return (containerAcc = acc / +item);
		}, container * container);
		inp.value = containerAcc;
		arrL = [];
		sw3 = true;
		sw2 = false;
		sw1 = false;
		sw = false;
		swpoint = true;
	}
	container = inp.value;
	arr1 = [];
	arr1.push(container);
	arr1.reduce(function (acc, item) {
		return (containerAcc = acc / +item);
	}, container * container);
	inp.value = containerAcc;
	arrL = [];
	sw2 = false;
	sw1 = false;
	sw = false;
	sw3 = true;
	swpoint = true;
}

//===================================================
function result() {
	if (sw) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		inp.value = 0;
		arrL = [];

		arr1.reduce(function (acc, item) {
			return (containerAcc = acc + +item);
		}, 0);

		sw = false;
		swpoint = true;
		inp.value = containerAcc;
	}
	if (sw1) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		inp.value = 0;
		arrL = [];

		arr1.reduce(function (acc, item) {
			return (containerAcc = -acc - +item);
		}, 0);

		sw1 = false;
		swpoint = true;
		inp.value = containerAcc;
	}
	if (sw2) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		inp.value = 0;
		arrL = [];

		arr1.reduce(function (acc, item) {
			return (containerAcc = acc * +item);
		}, 1);

		sw2 = false;
		swpoint = true;
		inp.value = containerAcc;
	}
	if (sw3) {
		inp.value = arrL.join('');
		container = inp.value;
		arr1.push(container);
		inp.value = 0;
		arrL = [];

		arr1.reduce(function (acc, item) {
			return (containerAcc = acc / +item);
		});

		sw3 = false;
		swpoint = true;
		inp.value = containerAcc;
	}

	sw = false;
	sw1 = false;
	sw2 = false;
	sw3 = false;
	console.log(arr1);
	inp.value = containerAcc;
}
//=============================================
function ce() {
	inp.value = 0;
	containerAcc = 0;
	arrL = [];
	arr1 = [];
	sw = false;
	sw1 = false;
	sw2 = false;
	swpoint = true;
	sw3 = false;
	swNull = true;
}
function bckSp() {
	arrL.pop();
	inp.value = containerAcc;
	displayArray();
	swpoint = true;
}
let swpoint = true;
function Point() {
	if (swpoint) {
		arrL.push('.');
		inp.value = arrL.join('');
	}

	swpoint = false;
}
let swNull = true;






function Null() {
	if(swpoint === false || arrL[0] !== 0){
		arrL.push(0);
	}
	displayArray();
	swNull = false;
}
