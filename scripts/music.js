const musicaInput = document.querySelector('#alternar-musica');
const musica = new Audio('/sons/luna-rise-part-one.mp3');

const playBeep = new Audio('/sons/play-beep.mp3');
const pauseBeep = new Audio('/sons/pause-beep.mp3');
const endBeep = new Audio('/sons/end-beep.mp3');

musica.loop = true;
musicaInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play();
    } else {
        musica.pause();
    }
})

