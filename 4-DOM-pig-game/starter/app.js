/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, isTheGameActive, lastDice, valorLimite;
initGame();

document.querySelector('.settings').addEventListener('click', function () {
    valorLimite = prompt("Ingresa el limite para ganar el juego. Luego se reiniciará el juego.");
    initGame();
})

document.querySelector('.btn-roll').addEventListener('click', function () {
    var dice1, dice2; 
    
    dice1 = lanzaDado();
    dice2 = lanzaDado();
//    console.log(activePlayer, lastDice, dice, valorLimite);
        
    muestraDados(dice1, dice2);
    console.log(dice1, dice2);
        
    if (dice1 === 1 || dice2 === 1 ){
        //alert('Sacaste 1. Cambio de jugador');
        cambiaDeJugador();
    } else if (dice1 === dice2 && dice1 === 6) {
        alert('Doble 6. Pierdes TODO!');
        scores[activePlayer] = 0;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        cambiaDeJugador();
    } else {
//        lastDice = dice;
        roundScore = roundScore + dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    
    if (valorLimite) {
        var winningScore = parseInt(valorLimite);
    } else {
        winningScore = 100;
    }
    
    if ( scores[activePlayer] < winningScore ) {
        cambiaDeJugador();    
    } else {
        document.getElementById
        document.querySelector('#name-' + activePlayer).textContent = 'WINNER!';
        escondeDados();
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';
        alert('Player ' + (activePlayer + 1) + ' WON!!!');
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    }
});

document.querySelector('.btn-new').addEventListener('click', initGame);

function initGame() {
    isTheGameActive = true;
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    //lastDice = 0;
    escondeDados();
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block'; 
    
}
function cambiaDeJugador() {
    roundScore = 0;
    //lastDice = 0;
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        
    escondeDados();
}

function lanzaDado() {
    return Math.floor(Math.random()*6) + 1;
}

function escondeDados() {
    document.querySelector('.dice-1').style.display = 'none';
    document.querySelector('.dice-2').style.display = 'none';
}

function muestraDados(val01, val02) {
    document.querySelector('.dice-1').style.display = 'block';
    document.querySelector('.dice-2').style.display = 'block';
    
    document.querySelector('.dice-1').src = 'dice-' + val01 + '.png';
    document.querySelector('.dice-2').src = 'dice-' + val02 + '.png';
    
}



