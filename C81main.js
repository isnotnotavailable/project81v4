canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

color = "blue"; 

ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

color1 = "yellow"; 

ctx.beginPath();
ctx.strokeStyle = color1;
ctx.lineWidth = 2;
ctx.arc(250, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();

color2 = "black"; 

ctx.beginPath();
ctx.strokeStyle = color2;
ctx.lineWidth = 2;
ctx.arc(300, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();

color3 = "green";

ctx.beginPath();
ctx.strokeStyle = color3;
ctx.lineWidth = 2;
ctx.arc(350, 250, 40 ,0 , 2*Math.PI);
ctx.stroke();

color4 = "red"; 

ctx.beginPath();
ctx.strokeStyle = color4;
ctx.lineWidth = 2;
ctx.arc(400, 200, 40 ,0 , 2*Math.PI);
ctx.stroke();