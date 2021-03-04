
let x, y;
let centerX;
let centerY;

function sizePage(){
 centerX = document.documentElement.clientWidth ;
 centerY = document.documentElement.clientHeight ;
    return centerX, centerY
}
function whereMouse() {
    sizePage()
	x = event.clientX;
	y = event.clientY;
    if(x < 100){
        x =(event.clientX + 30);
    }
    if(y < 100){
        y = event.clientY + 45;
    }
    if(x > centerX - 100 ){
        x = centerX - 65;
    }
    if(y > centerY - 100 ){
        y = centerY - 50;
    }
    
}
function moveBall(){
    let div = document.querySelector("#bal")
    div.style.margin = `${y-50}px ${x-50}px`
    
    
}


