const html = document.querySelector('html');

const botoes = document.querySelectorAll('.app__card-button');
// const focoBtn = document.querySelector('.app__card-button--foco');
// const curtoBtn = document.querySelector('.app__card-button--curto');
// const longoBtn = document.querySelector('.app__card-button--longo');

const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');

// const titulos = {
//     foco: '',
//     descanso_curto: '', 
//     descanso-longo: '' 
// }

// focoBtn.addEventListener('click', () => {
//     hmtl.setAttribute('data-contexto', 'foco');
//     banner.setAttribute('src', '/imagens/foco.png');
// });

// curtoBtn.addEventListener('click', () => {
//     hmtl.setAttribute('data-contexto', 'descanso-curto');
//     banner.setAttribute('src', '/imagens/descanso-curto.png');
// })

// longoBtn.addEventListener('click', () => {
//    hmtl.setAttribute('data-contexto', 'descanso-longo');
//    banner.setAttribute('src', '/imagens/descanso-longo.png');
// })

botoes.forEach(btn => {
    btn.addEventListener('click', () => {
        botoes.forEach(item => item.classList.remove('active'));
        btn.classList.add('active');

        const contexto = btn.getAttribute('data-contexto');
        html.setAttribute('data-contexto', contexto);
        banner.setAttribute('src', `/imagens/${contexto}.png`);
        
        switch(contexto) {
            case 'foco':
                titulo.innerHTML = `
                Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
                `;
                resetTempo();
                tempoDecorrido_s = 25*60;
                mostrarTempo();
                break;
            case 'descanso-curto':
                titulo.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>
                `;
                resetTempo();
                tempoDecorrido_s = 5*60;
                mostrarTempo();
                break;
            case 'descanso-longo':
                titulo.innerHTML = `
                Hora de voltar à superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>
                `;
                resetTempo();
                tempoDecorrido_s = 15*60;
                mostrarTempo();
                break;
            default:
                break;
        }
})});