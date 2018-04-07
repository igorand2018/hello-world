var canvas = document.getElementById("canvas");
canvas.width  = 600;
canvas.height = 300;
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, 200, 150);
ctx.fillRect(210, 0, 30, 30);
ctx.fillRect(210, 40, 30, 30);
ctx.fillRect(250, 0, 200, 150);