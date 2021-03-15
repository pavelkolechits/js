let input = document.createElement('input');
let container = document.querySelector('.container');
container.append(input);
input.classList.add('input');

let button = document.createElement('button');
container.append(button);
button.classList.add('button');
button.innerHTML = 'Add';
let ol = document.createElement('ol');
container.append(ol);
ol.classList.add('ol');

let li;
let lastId = 0;
button.onclick = addli;
function addli() {
	if (input.value == '') {
		return;
	}

	li = document.createElement('li');
	ol.append(li);
	li.innerHTML = `<span>${input.value}</span> `;
	li.classList.add(`li`);
	li.id = `${lastId++}`;
	input.value = '';

	let btnDel = document.createElement('button');
	btnDel.classList = 'btn';
	btnDel.innerHTML = 'del';
	li.append(btnDel);

	let btnUp = document.createElement('button');
	btnUp.classList = 'btnup';
	btnUp.innerHTML = 'up';
	li.append(btnUp);

	let btnDown = document.createElement('button');
	btnDown.classList = 'btndown';
	btnDown.innerHTML = 'down';
	li.append(btnDown);

	let btnChange = document.createElement('button');
	btnChange.classList = 'ch';
	btnChange.innerHTML = 'change';
	li.append(btnChange);
}

document.addEventListener('click', () => {
	if (event.target.innerHTML == 'del') {
		event.target.parentNode.remove();
	}
});

document.addEventListener('click', () => {
	let fff;
	if (event.target.innerHTML == 'up') {
		let container = event.target.parentNode.id;

		let arr = document.querySelectorAll('li');

		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id == container) {
				console.log(arr[i].id);

				fff = arr[i].innerHTML;
				arr[i].innerHTML = arr[i - 1].innerHTML;
				arr[i - 1].innerHTML = fff;
			}
		}
	}
});
document.addEventListener('click', () => {
	let fff;
	if (event.target.innerHTML == 'down') {
		let container = event.target.parentNode.id;

		let arr = document.querySelectorAll('li');

		for (let i = 0; i < arr.length; i++) {
			if (arr[i].id == container) {
				console.log(arr[i].id);

				fff = arr[i].innerHTML;
				arr[i].innerHTML = arr[i + 1].innerHTML;
				arr[i + 1].innerHTML = fff;
			}
		}
	}
});
document.addEventListener('keydown', () => {
	if (event.keyCode == 13) {
		addli();
	}
});
document.addEventListener('click', () => {
	if (event.target.innerHTML == 'change') {
		tagId = event.target.parentNode.id;
		let container = event.target.parentNode;
		let arrInner = event.target.parentNode.childNodes;
		let cont = arrInner[0].innerHTML;
		container.innerHTML = `<textarea class = "text">${cont}</textarea><button class = "btnadd">add</button> `;
	}
});
document.addEventListener('click', () => {
	if (event.target.innerHTML == 'add') {
		let container = event.target.parentNode;
		let arrInner = event.target.parentNode.childNodes;
		let cont = arrInner[0].value;
		if (cont == '') {
			container.remove();
		} else {
			container.innerHTML = `<span>${cont}</span><button class = "btn">del</button><button class = "btnup">up</button><button class = "btndown">down</button><button class = "ch">change</button>`;
		}
	}
});
document.addEventListener('click', () => {
	if (event.target == 'LI') {
		event.target.innerHTML;
		console.log(event.target.innerHTML);
	}
	console.log(event.target.tagName);
});
