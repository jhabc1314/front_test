
class Canvas {
    constructor(canvasDom, shape = '2d') {
        this.canvas = canvasDom.getContext(shape);
        console.log(this.canvas);
    }

    draw() {
        this.canvas.fillStyle = "rgb(200, 0,0)";
        this.canvas.fillRect(30, 10, 155, 50);//左上角第一个点的x，y。 x边长 y边长
        this.canvas.fillStyle = "rgba(0, 0, 200, 0.5)";
        this.canvas.fillRect(30, 30, 155, 50);
    }
    draw2() {
        this.canvas.fillRect(25, 25, 100, 100);
        this.canvas.clearRect(45, 45, 60, 60);
        this.canvas.strokeRect(50, 50, 50, 50);
    }
    SanJiaoXing() {
        this.canvas.beginPath();
        this.canvas.moveTo(200, 200);
        this.canvas.lineTo(300, 150);
        this.canvas.lineTo(300, 250);
        this.canvas.closePath();
        this.canvas.stroke();
    }
    smileFace() {
        this.canvas.beginPath();
        this.canvas.arc(75, 75, 50, 0, Math.PI * 2, true);
        this.canvas.moveTo(110, 75);
        this.canvas.arc(75, 75, 35, 0, Math.PI, false);
        this.canvas.moveTo(65, 65);
        this.canvas.arc(60, 65, 5, 0, Math.PI * 2, true);
        this.canvas.moveTo(95, 65);
        this.canvas.arc(90, 65, 5, 0, Math.PI * 2, true);
        this.canvas.stroke();
    }
    halfArc() {
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                this.canvas.beginPath();
                let x = 25 + j * 50;
                let y = 25 + i * 50;
                let radius = 20;
                let startAngle = 0;
                let endAngle = Math.PI + (Math.PI * j) / 2;
                let anticlockwise = i % 2 === 0 ? false : true;//逆时针
                this.canvas.arc(x, y, radius, startAngle, endAngle, anticlockwise);
                if (i > 2) {
                    this.canvas.fill();
                } else {
                    this.canvas.stroke();
                }
            }
        }
    }
    //2次贝塞尔曲线
    quadraticCurveTo() {
        this.canvas.beginPath();
        this.canvas.moveTo(75, 25);
        this.canvas.quadraticCurveTo(25, 25, 25, 62.5);
        this.canvas.quadraticCurveTo(25, 100, 50, 100);
        this.canvas.quadraticCurveTo(50, 120, 30, 125);
        this.canvas.quadraticCurveTo(60, 120, 65, 100);
        this.canvas.quadraticCurveTo(125, 100, 125, 62.5);
        this.canvas.quadraticCurveTo(125, 25, 75, 25);
        this.canvas.stroke();
    }
    //3次贝塞尔曲线
    bezierCurveTo() {
        this.canvas.beginPath();
        this.canvas.moveTo(75, 40);
        this.canvas.bezierCurveTo(75, 37, 70, 25, 50, 25);
        this.canvas.bezierCurveTo(20, 25, 20, 62.5, 20, 62.5);
        this.canvas.bezierCurveTo(20, 80, 40, 102, 75, 120);
        this.canvas.bezierCurveTo(110, 102, 130, 80, 130, 62.5);
        this.canvas.bezierCurveTo(130, 62.5, 130, 25, 100, 25);
        this.canvas.bezierCurveTo(85, 25, 75, 37, 75, 40);
        this.canvas.fillStyle = "red";
        this.canvas.fill();
    }
    color() {
        this.canvas.fillStyle = 'rgb(255,221,0)';
        this.canvas.fillRect(0, 0, 150, 37.5);
        this.canvas.fillStyle = 'rgb(102,204,0)';
        this.canvas.fillRect(0, 37.5, 150, 37.5);
        this.canvas.fillStyle = 'rgb(0,153,255)';
        this.canvas.fillRect(0, 75, 150, 37.5);
        this.canvas.fillStyle = 'rgb(255,51,0)';
        this.canvas.fillRect(0, 112.5, 150, 37.5);
        for (let i = 0; i < 10; i++) {
            this.canvas.fillStyle = "rgba(255,255,255," + (i + 1) / 10 + ')';
            for (let j = 0; j < 4; j++) {
                this.canvas.fillRect(5 + i * 14, 5 + j * 37.5, 14, 27.5);
            }
        }
    }

}

let c = new Canvas(document.querySelector("canvas"));
// c.draw();
// c.draw2();
// c.smileFace();
// c.SanJiaoXing();
// c.halfArc();
// c.quadraticCurveTo();
// c.bezierCurveTo();
c.color();
