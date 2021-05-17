const clockContainer = document.querySelector('.clock_container'),
    clock = clockContainer.querySelector('h1');

function getTime () {
    const date = new Date();

    const hour = date.getHours(),
          min = date.getMinutes(),
          sec = date.getSeconds();

    clock.innerText = `${hour < 10 ? `0${hour}` : hour} : ${min  < 10 ? `0${min}` : min} : ${sec  < 10 ? `0${sec}` : sec}`;
};

(function init() {

setInterval(getTime, 1000)
})();