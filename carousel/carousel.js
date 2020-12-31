
//设置轮播图片

import Carousel from './carousel_core.js';

let carousel = new Carousel([
    '/carousel/banner.png',
    '/carousel/1.jpg',
    '/carousel/2.jpg'
]);

carousel.run();
// carousel.move();
setInterval(() => {
    carousel.move();
}, 2000);
