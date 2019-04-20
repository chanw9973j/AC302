console.log("test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var img = new Image();
img.src = 'tokidoki pic 10.jpg';

// img.onload = function(){
//     ctx.drawImage(img,0,0,300,300);
// };

// ctx.font = "60px Trebuchet MS";
// ctx.fillStyle = "deeppink"
// ctx.fillText("Canvas",40,125);
// ctx.strokeStyle = "pink";
// ctx.strokeText("Kady",140,205);

var tokidoki1 = new Image();
tokidoki1.src = 'tokidoki pic 1.png'

var tokidoki2 = new Image();
tokidoki2.src = 'tokidoki pic 2.jpg'

var tokidoki3 = new Image();
tokidoki3.src = 'tokidoki pic 3.png'

var tokidoki4 = new Image();
tokidoki4.src = 'tokidoki pic 4.jpeg'

var tokidoki5 = new Image();
tokidoki5.src = 'tokidoki pic 5.png'

var tokidoki6= new Image();
tokidoki6.src = 'tokidoki pic 6.png'


tokidoki1.onload = function(){
    ctx.drawImage(tokidoki1,650,200,150,200);
}

tokidoki2.onload = function(){
    ctx.drawImage(tokidoki2,120,100,300,300);
}

tokidoki3.onload = function(){
    ctx.drawImage(tokidoki3,400,50,150,200);
}

tokidoki4.onload = function(){
    ctx.drawImage(tokidoki4,550,50,150,200);
}

tokidoki5.onload = function(){
    ctx.drawImage(tokidoki5,370,450,150,200);
}



ctx.fillStyle = "deeppink";
ctx.fillStyle(0,350,800,150);
ctx.fillStyle = "pink";
ctx.Rect(0,0,600,300);
ctx.beginPath();
ctx.src(100,100,50,0,6,28);
ctx.fillStyle = "ivory";
ctx.fillStyle();