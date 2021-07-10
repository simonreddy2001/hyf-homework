class Circle {
    constructor(width, height, radius, startAngle, endAngle, fillColor) {
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');

        context.beginPath();
        context.arc(this.width, this.height, this.radius, this.startAngle, this.endAngle);
        context.fillStyle = this.fillColor;
        context.fill();
        context.stroke();
    }
}
//const c1 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#000000");
//c1.draw();
//const c2 = new Circle(50, 50, 20, 0, 2 * Math.PI, "#ff0000");
//c2.draw();

function fillingColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')';
}

function createCircle() {
    const canvas = document.getElementById('myCanvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const circleWidth = Math.floor(Math.random() * window.screen.width);
    const circleHeight = Math.floor(Math.random() * window.screen.height);
    const circleRadius = Math.floor(Math.random() * 100);
    const circleColor = fillingColor();
    const randomCircle = new Circle(circleWidth, circleHeight, circleRadius, 0, 2 * Math.PI, circleColor);
    randomCircle.draw();
}

//setInterval(createCircle, 100);
document.body.addEventListener("mousemove", createCircle);
