let minus = document.querySelector('#minus');
let tempoMarker = document.querySelector('#tempoMarker');
let plus = document.querySelector('#plus');
let playBtn = document.querySelector('#playBtn');
let playIcon = document.querySelector('#playIcon')
let metSound = document.querySelector('#metSound');
let inputRange = document.querySelector('#range');
let tempoBPM = 100;
let count = 0;
let mouseDown = true;

minus.addEventListener('click', () => {
    tempoBPM--;
    tempoMarker.innerHTML = tempoBPM;
});

plus.addEventListener('click', () => {
    tempoBPM++;
    tempoMarker.innerHTML = tempoBPM;
});

range.addEventListener('mousemove', () => {
    tempoBPM = range.value;
    tempoMarker.innerHTML = range.value;
});

playBtn.addEventListener('click', () => {
    if (count === 0) {
        count++;
        convertedTempo = 60000 / tempoBPM;
        interval = setInterval(() => {
            metSound.play();
        }, convertedTempo);
        playBtn.innerHTML = '<i id="stopBtn" class="fas fa-stop"></i>';
    } else if (count === 1) {
        count--;
        clearInterval(interval);
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
});











