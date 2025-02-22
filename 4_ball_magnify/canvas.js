const canvas = document.querySelector("canvas");

//Set canvas to width and height of body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the manipulable 2D context of the canvas.
const ctx = canvas.getContext("2d");

let circles = [];

//Capture mouse events.
let mouse = {
    x: undefined,
    y: undefined,
};

const colorArray = ["#264653", "#e9c46a", "#2a9d8f", "#f4a261", "#e76f51"];

class Circle {
    speed = 0.25;
    radius = 10;

    constructor() {
        this.x = Math.random() * (innerWidth - this.radius * 2) + this.radius;

        this.y = Math.random() * (innerHeight - this.radius * 2) + this.radius;

        this.dx = this.speed * (Math.random() > 0.5 ? 1 : -1);
        this.dy = this.speed * (Math.random() > 0.5 ? 1 : -1);

        this.color = colorArray[Math.floor(Math.random() * colorArray.length)];
    }

    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
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

        const diffSquared = (mouse.x - this.x) ** 2 + (mouse.y - this.y) ** 2;
        if (diffSquared < 1500) {
            //Tween the radius growth
            if (this.radius < 100) {
                this.radius += 1;
            }
        } else {
            //Tween the radius shrink
            if (this.radius > 10) {
                this.radius -= 1;
            }
        }

        this.draw();
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach((circle) => circle.update());
}

circles = [...new Array(200)].map((i) => new Circle());
window.addEventListener("mousemove", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

animate();
