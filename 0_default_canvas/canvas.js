const canvas = document.querySelector("canvas");

//Set canvas to width and height of body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the manipulable 2D context of the canvas.
const ctx = canvas.getContext("2d");

//Draw a triangle
ctx.beginPath();
ctx.strokeStyle = "red";
ctx.fillStyle = "rgba(255, 0, 0, 0.2)";
ctx.moveTo(50, 300);
ctx.lineTo(150, 100);
ctx.lineTo(250, 300);
ctx.lineTo(50, 300);
ctx.stroke();
ctx.fill();

//Draw a circle (takes radians)
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
ctx.arc(300, 300, 30, 0, 2 * Math.PI, false);
ctx.stroke();
ctx.fill();
