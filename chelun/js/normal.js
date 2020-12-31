(function name(params) {
    const MAX_FONT_SIZE = 100;
    const MAX_WIDTH = 750;
    document.addEventListener("DOMContentLoaded", () => {
        const html = document.querySelector("html");
        let fontSize = window.innerWidth * MAX_FONT_SIZE / MAX_WIDTH;
        console.log(fontSize);
        fontSize = fontSize > MAX_FONT_SIZE ? MAX_FONT_SIZE : fontSize;
        html.style.fontSize = fontSize + 'px';
    })
})()
