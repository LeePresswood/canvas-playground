const canvas = document.querySelector("canvas");

//Set canvas to width and height of body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the manipulable 2D context of the canvas.
const ctx = canvas.getContext("2d");

let pointList = [];

function drawDot(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI * 2, true);
    ctx.fillStyle = "rgb(0, 0, 0)";
    ctx.fill();
}

function drawLine(coord1, coord2) {
    ctx.beginPath();

    ctx.fillStyle = "black";
    ctx.strokeStyle = "black";
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.moveTo(coord1.x, coord1.y);
    ctx.lineTo(coord2.x, coord2.y);
    ctx.stroke();
}

function draw() {
    ctx.clearRect(0, 0, innerWidth, innerHeight);

    for (i = 0; i < pointList.length; i++) {
        drawDot(pointList[i].x, pointList[i].y);
    }

    if (pointList && pointList.length > 1) {
        for (i = 1; i < pointList.length; i++) {
            drawLine(pointList[i - 1], pointList[i]);
        }
    }
}

window.addEventListener("click", (event) => {
    pointList.push({
        x: event.x,
        y: event.y,
    });

    draw();
});
