let a = document.createElement('div');
a.classList.add('red');
document.body.append(a);
let x, y;
let div = document.querySelector('.red');
function remove() {
	div.style.margin = `${y - 50}px 0 0 ${x - 50}px`;
}
function getCoord(event) {
	x = event.clientX;
	y = event.clientY;
	remove();
}

document.addEventListener('click', getCoord);
let d = document.createElement('div');
function xxx() {
	let a = Math.random() * 600;
	let b = Math.random() * 1300;

	document.body.append(d);
	d.classList.add('div');
	d.style.margin = `${a}px 0 0 ${b}px`;
}

setInterval(xxx, 1000);
let inner = document.createElement('div');
document.body.append(inner);
inner.classList.add('inner');
let count = 0;
let countClik = 0;
function click() {
	if (event.target.classList[0] === 'div') {
		++count;
	}
	inner.innerHTML = `${count}; ${++countClik}`;
	if (countClik === 20) {
		d.classList.add('div2');
	}
	if (countClik === 10 && count < 7) {
		let div1 = document.createElement('div1');
		document.body.append(div1);
		div1.classList.add('div1');
		div1.innerHTML = 'Л0Х';
	}
	if (countClik === 10 && count > 7) {
		let div1 = document.createElement('div1');
		document.body.append(div1);
		div1.classList.add('div1');
		div1.innerHTML = 'НОРМ';
	}
}
document.addEventListener('click', click);
