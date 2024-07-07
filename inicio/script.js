let currentIndex = 0;
const images = document.querySelectorAll('.banner img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].classList.remove('active', 'fade');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active', 'fade');
}

function startSlideshow() {
    images[currentIndex].classList.add('active', 'fade');
    setInterval(showNextImage, 5000);
}

document.addEventListener('DOMContentLoaded', startSlideshow);

document.getElementById('barbeiro-selecione').onclick = function () {
    let barbeiroOpcoes = document.getElementById('barbeiro-opcoes');
    let barbeiroSelecione = document.getElementById('barbeiro-selecione');
    let barbeiro1 = document.getElementById('barbeiro1');
    let barbeiro2 = document.getElementById('barbeiro2');

    if (barbeiroOpcoes.style.display === 'flex') {
        barbeiroOpcoes.style.display = 'none';
    } else {
        barbeiroOpcoes.style.display = 'flex';
    }

    barbeiro1.onclick = function () {
        let parent = barbeiroSelecione.parentElement; 
        parent.replaceChild(barbeiro1, barbeiroSelecione);
        barbeiroOpcoes.style.display = 'none'; 
        configurarEventosBarbeiros(); 
    };

    barbeiro2.onclick = function () {
        let parent = barbeiroSelecione.parentElement; 
        parent.replaceChild(barbeiro2, barbeiroSelecione);
        barbeiroOpcoes.style.display = 'none'; 
        configurarEventosBarbeiros(); 
    };
    
};






