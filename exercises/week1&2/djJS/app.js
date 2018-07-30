
//add event listener
// The square's color will change as follows:
// Blue when the mouse hovers over the square
//.mouseenter
function mouseenter(){
    document.getElementById("squareColor").style.backgroundColor = "blue";
}
function mouseleave(){
    document.getElementById("squareColor").style.backgroundColor = "#aa82dd";
}// Red when the mouse button is held down over the square
//.mousedown
function mousedown(){
    document.getElementById("squareColor").style.backgroundColor = "red";
}
// Yellow when the mouse button is let go over the square
//.mouseover
function mouseup(){
    document.getElementById("squareColor").style.backgroundColor = "yellow";
}
// Green when the mouse is double clicked in the squar
// dblclick
function doubleClick(){
    document.getElementById("squareColor").style.backgroundColor = "green";
}
// Orange when the mouse scroll is used somewhere in the window (not just over the square).
//.scroll
function scrollBar(){
    document.getElementById("scrollText").style.backgroundColor = "orange";
}

document.getElementById("squareColor").addEventListener("mouseenter", mouseenter)
document.getElementById("squareColor").addEventListener("mouseleave", mouseleave )
document.getElementById("squareColor").addEventListener("mousedown", mousedown)
document.getElementById("squareColor").addEventListener("mouseup", mouseup)
document.getElementById("squareColor").addEventListener("mouseover", mouseOver )
document.getElementById("squareColor").addEventListener("dblclick", doubleClick )
document.getElementById("scrollText").addEventListener("scroll",  scrollBar)






