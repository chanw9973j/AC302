console.log("test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var ctx2 = c.getContext("2d")

// ctx.beginPath();
// ctx.arc(150,150,120,0,6.28);
// ctx.closePath();
// ctx.stroke();
// ctx.fillStyle = "deeppink";
// ctx.fill();

ctx.beginPath();
ctx.stokeStyle = "deeppink";
ctx.moveTo(150,25);
ctx.lineTo(225,150);
ctx.lineTo(75,150);
// ctx1.lineTo(110,50);
ctx.closePath();
ctx.stroke(); 
ctx.fillStyle = "pink";
ctx.fill();
