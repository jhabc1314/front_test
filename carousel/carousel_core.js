
export default class Carousel {
    imgs = [];
    imgDoms = [];
    #interval;
    current;
    next;
    constructor(imgs, interval = 1000) {
        if (!(imgs instanceof Array)) {
            throw TypeError("请传递图片数组");
        }
        if (imgs.length < 1) {
            throw RangeError("图片不能为空");
        }
        this.imgs = imgs;
        this.interval = interval;
    }
    //运行
    run() {
        //创建所有imgdom
        for (let img of this.imgs) {
            this.imgDoms.push(this.createElementImg(img));
        }
        const app = document.querySelector("#app");

        this.current = this.imgDoms.shift();
        //this.current.style.marginLeft = '100px';
        this.next = this.imgDoms.shift();
        app.appendChild(this.current);
        app.appendChild(this.next);
    }

    move() {
        let next = this.imgDoms.shift();
        next.style.animation = ''; //追加的图片样式先重置
        //当前图片往指定方向移动
        this.current.style.animation = 'carouselCurrent 1s ease 1 normal forwards';
        this.next.style.animation = 'carouselNext 1s ease 1 normal forwards';

        const app = document.querySelector("#app");
        //移走的节点放入列表
        this.imgDoms.push(this.current);
        //后一个图片变为当前图片
        this.current = this.next;
        //从列表中补位一个
        this.next = next;
        //将新的图片添加到dom中
        app.appendChild(this.next);
    }

    createElementImg(imgUrl) {
        const img = document.createElement("img");
        img.src = imgUrl;
        return img;
    }
}
