const en = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split('');
const enUp = "QWERTYUIOP[]ASDFGHJKL;'ZXCVBNM,./".split('');
const ru = 'йцукенгшщзхъфывапролджэячсмитьбю.'.split('');
const ruUp = 'ЙЦУКЕНГШЩЗХЪФЫВАПРОЛДЖЭЯЧСМИТЬБЮ.'.split('');
const numbers = '1234567890-='.split('');
const shiftNumbersEn = '!@#$%^&*()_+'.split('');
const shiftNumbersRu = `!"№;%:?*()_+`.split('');
const objAllSymbol = [];

for (let i = 0; i < en.length; i++) {
	objAllSymbol.push([en[i], ru[i], enUp[i], ruUp[i]]);
}
for (let i = 0; i < numbers.length; i++) {
	objAllSymbol.push([numbers[i], shiftNumbersEn[i], numbers[i], shiftNumbersRu[i]]);
}
function createEnButton() {
	objAllSymbol.forEach((item) => {
		let button = document.createElement('button');
		document.body.append(button);
		button.innerHTML = item[0];
        button.classList.add("button")
	});
}
createEnButton();
console.log(objAllSymbol[0])

let CapsLock = document.createElement('button');
document.body.append(CapsLock);
CapsLock.innerHTML = 'Caps Lock';
CapsLock.id = "CapsLockId"

let arrButtons = document.querySelectorAll(".button")
let toggleCapsLock = true;
console.log(arrButtons)

function capsLock() {
	if (event.target.innerHTML === 'Caps Lock') {
		toggleCapsLock = !toggleCapsLock;
	}
    if(!toggleCapsLock){
       for(let i = 0; i < arrButtons.length; i++ ){
        arrButtons[i].innerHTML = objAllSymbol[i][2]
       }
    }
    if(toggleCapsLock){
        for(let i = 0; i < arrButtons.length; i++ ){
         arrButtons[i].innerHTML = objAllSymbol[i][0]
        }
    }
}

document.querySelector("#CapsLockId").onclick = capsLock
