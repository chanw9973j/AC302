console.log("test...");
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
    ctx.strokeStyle = "blue";

    ctx.moveTo(0,0);

    ctx.lineTo(110,50);

    ctx.moveTo(90,50);

    ctx.lineTo(210,10);

    ctx.moveTo(190,10);
    
    ctx.strokeStyle = "blue";

    ctx.lineWidth = 5;

    ctx.stroke(); 

    ctx.fillstyle = 'rgb(200,50,10)';

    ctx.fillRect(75,125,150,100);

    ctx.strokeStyle = "green";

    ctx.strokeRect(50,100,200,150);

    

    