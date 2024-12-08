
function moveLeft() {
    const section = document.querySelector('#move');
    section.style.transform = 'translateX(-650px)';

    const buttons = document.querySelectorAll('.subselect');
    buttons.forEach(function(btn) {
        btn.classList.remove('clicked');
    });
    this.classList.add('clicked');

    const texts = document.querySelectorAll('.text');
    texts.forEach(function(text) {
        text.style.display = "none";
    });
    // Mostrando o texto correspondente
    const text = document.getElementById('text-left');
    text.style.display = "block";
}


function moveCenter(){
    const section = document.querySelector('#move')
    section.style.transform = 'translateX(0px)';

    const buttons = document.querySelectorAll('.subselect');
    buttons.forEach(function(btn) {
        btn.classList.remove('clicked');
    });
    this.classList.add('clicked');

    const texts = document.querySelectorAll('.text');
    texts.forEach(function(text) {
        text.style.display = "none";
    });

    const textcentroesquerda = document.getElementById('text-center');
    textcentroesquerda.style.display = "block";

    const textcentrodireita = document.getElementById('text-center1');
    textcentrodireita.style.display = "block";
}

function moveRight(){
    const section = document.querySelector('#move')
    section.style.transform = 'translateX(650px)';

    const buttons = document.querySelectorAll('.subselect');
    buttons.forEach(function(btn) {
        btn.classList.remove('clicked');
    });
    this.classList.add('clicked');

    const texts = document.querySelectorAll('.text');
    texts.forEach(function(text) {
        text.style.display = "none";
    });
    // Mostrando o texto correspondente
    const text = document.getElementById('text-right');
    text.style.display = "block";
}
