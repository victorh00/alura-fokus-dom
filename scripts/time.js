let tempoDecorrido_s = 25*60;
let intervaloId = null;
const startPauseBtn = document.getElementById("start-pause");
const startPauseBtnText = document.querySelector("#start-pause span");
const startPauseBtnIcon = document.querySelector("#start-pause img");
const tempoNaTela = document.querySelector("#timer");

function iniciarOuPararTempo() {
    if(intervaloId) {
        pauseBeep.play();
        pararTempo();
        setBtnToStart();
        return;
    } else {
        playBeep.play();
        iniciarTempo();
        setBtnToPause();
    }
}

const contagemRegressiva = () => {
    if(tempoDecorrido_s <= 0) {
        endBeep.play();
        pararTempo();
        alert('Tempo finalizado!');
        return;
    } 
    tempoDecorrido_s -= 1;
    mostrarTempo();
    console.log(tempoDecorrido_s);
}

function iniciarTempo() {
    intervaloId = setInterval(contagemRegressiva, 1000);
}

function pararTempo() {
    clearInterval(intervaloId);
    intervaloId = null;   
}

startPauseBtn.addEventListener('click', iniciarOuPararTempo);

function mostrarTempo() {
    const tempo = new Date(tempoDecorrido_s*1000);
    const tempoFormatado = tempo.toLocaleString('pt-br', {minute: '2-digit', second: '2-digit'});
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

function resetTempo() {
    pararTempo();
    setBtnToStart();
}

function setBtnToStart() {
    startPauseBtnText.textContent = 'Começar';
    startPauseBtnIcon.setAttribute('src', './imagens/play_arrow.png');
}

function setBtnToPause() {
    startPauseBtnText.textContent = 'Pausar';
    startPauseBtnIcon.setAttribute('src', './imagens/pause.png');
}

mostrarTempo();


  