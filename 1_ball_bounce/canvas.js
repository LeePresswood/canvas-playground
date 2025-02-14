const canvas = document.querySelector("canvas");

//Set canvas to width and height of body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the manipulable 2D context of the canvas.
const ctx = canvas.getContext("2d");

class Circle {
    speed = 6;
    radius = 30;

    constructor() {
        this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;
        this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;
        this.dx = this.speed * (Math.random() > 0.5 ? 1 : -1);
        this.dy = this.speed * (Math.random() > 0.5 ? 1 : -1);
    }

    draw() {
        ctx.beginPath();
        ctx.strokeStyle = "blue";
        ctx.fillStyle = "rgba(0, 0, 255, 0.2)";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.stroke();
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

const circles = Array.from({ length: 10 }, (v, k) => new Circle());

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach((circle) => circle.update());
}

animate();
