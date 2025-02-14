const canvas = document.querySelector("canvas");

//Set canvas to width and height of body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the manipulable 2D context of the canvas.
const ctx = canvas.getContext("2d");

const radius = 30;
let x = radius;
let y = radius;

let dx = 1;
let dy = 1;

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
    ctx.arc((x += dx), (y += dy), radius, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

    if (x + radius > innerWidth || x - radius < 0) {
        dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
        dy = -dy;
    }
}

animate();
