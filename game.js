
var jogador = null;

var jogadorEscolhido = document.getElementById('jogador-escolhido');

mudarJogador('X');

function escolherQuadrado(id){
    
    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorEscolhido.innerHTML = jogador;
}