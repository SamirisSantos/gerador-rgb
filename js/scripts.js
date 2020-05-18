window.addEventListener('load', start);

function start(){
    console.log('página carregada');

    var titulo = document.querySelector('h1');
    titulo.textContent = "Gerador RGB";
    titulo.style.color = 'black';
    titulo.style.fontFamily = 'sans-serif';

    var vermelho = document.querySelector('#vermelho');
    vermelho.addEventListener('change', numberR);

    var verde = document.querySelector('#verde');
    verde.addEventListener('change',numberG);

    var azul = document.querySelector('#azul');
    azul.addEventListener('change', numberB);

}

function numberR(event){
    var red = document.querySelector('#red');
    red.value = event.target.value;
}

function numberG(event){
    var green = document.querySelector('#green');
    green.value = event.target.value;
}

function numberB(event){
    
    var blue = document.querySelector('#blue');
    blue.value = event.target.value;
}