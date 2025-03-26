var btn_circle = document.getElementById("btn1");
var btn_rectangle = document.getElementById("btn2");
var btn_triangle = document.getElementById("btn3");

var circle = document.getElementById("circle");
var rectangle = document.getElementById("rectangle");
var triangle = document.getElementById("triangle");

btn_circle.onclick=function() {
    btn_circle.setAttribute("class","shape_circle");
}
btn_rectangle.onclick=function(){
    rectangle.setAttribute("class","shgape_rectangle");
}
btn_triangle.onclick=function() {
    btn_triangle.setAttribute("class","shape_triangle");
}
circle.onclick=function (){
    circle.setAttribute("class","hide");
}
rectangle.onclick=function (){
    rectangle.setAttribute("class","hide");
}
triangle.onclick=function (){
    triangle.setAttribute("class","hide");
}