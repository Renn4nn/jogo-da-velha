var jogador = "x";
var vitoriasPlayer1 = 0;
var vitoriasPlayer2 = 0;

document.getElementById('placar1').innerHTML = vitoriasPlayer1;
document.getElementById('placar2').innerHTML = vitoriasPlayer2;

function jogar(celula){
    if(celula.innerHTML == ""){
        celula.innerHTML = jogador;
        
        if(verificarVitoria(jogador)){
            alert('Jogador "' + jogador.toUpperCase() + '" venceu!');
            if(jogador == 'x'){
                vitoriasPlayer1++;
                document.getElementById('placar1').innerHTML = vitoriasPlayer1;
            }
            else{
                vitoriasPlayer2++;
                document.getElementById('placar2').innerHTML = vitoriasPlayer2;
            }   
            return reiniciar();
        }

        if(jogador == "x"){
            jogador = "o";
            document.querySelector('.player1').style.color = "black";
            document.querySelector('.player2').style.color = "red";
        }
        else{
            jogador = "x";
            document.querySelector('.player1').style.color = "red";
            document.querySelector('.player2').style.color = "black";
        }
    }
}
function verificarVitoria(jogador){
    const combinacoesVitoria = [
        ['cell-1', 'cell-2', 'cell-3'],
        ['cell-4', 'cell-5', 'cell-6'],
        ['cell-7', 'cell-8', 'cell-9'],
        ['cell-1', 'cell-4', 'cell-7'],
        ['cell-2', 'cell-5', 'cell-8'],
        ['cell-3', 'cell-6', 'cell-9'],
        ['cell-1', 'cell-5', 'cell-9'],
        ['cell-3', 'cell-5', 'cell-7']
    ];
    for (let combinacao of combinacoesVitoria) {
        // Verificar se todas as células na combinação têm o valor do jogador
        if (combinacao.every(celula => document.querySelector(`.${celula}`).textContent === jogador)) {
            return true; // Vitória detectada
        }
    }
    return false; // Nenhuma vitória encontrada
}

function reiniciar(){
    document.querySelector('.player1').style.color = "black";
    document.querySelector('.player2').style.color = "black";
    var botoes = document.querySelectorAll('.quadrado');

    for(var i = 0 ; i < botoes.length ; i++){
        botoes[i].textContent = '';
    }
    if(jogador == "o"){
        jogador = "x"
    }
}