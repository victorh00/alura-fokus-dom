const html = document.querySelector('html');
const focoBtn = document.querySelector('.app__card-button--foco');
const curtoBtn = document.querySelector('.app__card-button--curto');
const longoBtn = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');

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

[focoBtn, curtoBtn, longoBtn].forEach((btn) => {btn.addEventListener('click', () => {
    const contexto = btn.getAttribute('data-contexto');
    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `/imagens/${contexto}.png`);
})});