
class Canvas {
    constructor(canvasDom, shape = '2d') {
        this.canvas = canvasDom.getContext(shape);
        console.log(this.canvas);
    }

    draw() {
        this.canvas.fillStyle = "rgb(200, 0,0)";
        this.canvas.fillRect(30,10,155,50);//左上角第一个点的x，y。 x边长 y边长
        this.canvas.fillStyle = "rgba(0, 0, 200, 0.5)";
        this.canvas.fillRect(30, 30, 155, 50);
    }

}

let c = new Canvas(document.querySelector("canvas"));
c.draw();
