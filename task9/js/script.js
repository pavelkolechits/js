
let x,
	y,
	sw = false,
	sw1 = false;

function whereMouse() {
	x = event.clientX;
	y = event.clientY;
	let span = document.querySelector('#span');
	span.innerHTML = `X:${x}, Y:${y}`;
	if (sw) {
		span.innerHTML = `X:${x}, Y:${y} left`;
	} else if (sw1) {
		span.innerHTML = `X:${x}, Y:${y} right`;
	}
}
function leftClick() {
	span.innerHTML = `X:${x}, Y:${y} left`;
	return (sw = true);
}
function rightClick() {
	span.innerHTML = `X:${x}, Y:${y} right`;
	sw1 = true;
	event.preventDefault();
	sw = false;
}
