let focus = document.getElementById("focus");
let targetFocus = target.offsetWidth/2;

document.onmousemove = function(e){
    target.style.left = e.pageX - targetHalfWidth + "px";
    target.style.top = e.pageY - targetHalfWidth + "px";
}