const canvas = document.querySelector("canvas");

//Set canvas to width and height of body
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Get the manipulable 2D context of the canvas.
const ctx = canvas.getContext("2d");

let circles = [];

class Circle {
    speed = 3;

    constructor(x, y, radius = 400, shatterCount = 5) {
        this.radius = radius;

        this.x = x ? x + Math.random() * radius : Math.random() * (innerWidth - this.radius * 2) + this.radius;

        this.y = y ? y + Math.random() * radius : Math.random() * (innerHeight - this.radius * 2) + this.radius;

        this.dx = this.speed * (Math.random() > 0.5 ? 1 : -1);
        this.dy = this.speed * (Math.random() > 0.5 ? 1 : -1);

        this.shatterCount = shatterCount;
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
            this.shatter();
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
            this.shatter();
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

    shatter() {
        if (this.shatterCount > 0) {
            this.radius /= 2;
            this.shatterCount--;
            circles.push(new Circle(this.x, this.y, this.radius, this.shatterCount));
            circles.push(new Circle(this.x, this.y, this.radius, this.shatterCount));
            circles.push(new Circle(this.x, this.y, this.radius, this.shatterCount));
            circles.push(new Circle(this.x, this.y, this.radius, this.shatterCount));
            circles.splice(circles.indexOf(this), 1);
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    circles.forEach((circle) => circle.update());
}

circles.push(new Circle());

animate();
