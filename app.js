const loadText = document.querySelector('.load-text');
const container = document.querySelector('.container');

let load = 0;
let loadBlur = 100;

let interval = setInterval(blurring, 30);

function blurring() {
    load++;
    loadBlur--;
    if (load >= 100) {
        clearInterval(interval);
        loadText.classList.add('hidden');
    }
    loadText.textContent = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    container.style.filter = `blur(${loadBlur}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
