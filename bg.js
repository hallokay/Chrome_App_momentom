
const body = document.querySelector('body');


function paintImg (imgNum) {
    const img = new Image();
    img.src = `img/${imgNum + 1}.jpg`
    img.classList.add('bg_img');
    body.appendChild(img)
}

const IMG_NUM = 4;

function genNum () {
    const num = Math.floor(Math.random() * IMG_NUM)
    return num;
}

(function init () {
    const randomNum = genNum();
    paintImg(randomNum);
})();