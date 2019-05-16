var scores, roundScore, activePlayer, dice;

init();




document.querySelector('.btn-roll').addEventListener('click',function(){
  var dice = Math.floor(Math.random() * 6) + 1;
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  document.querySelector('#current-' + activePlayer).textContent = dice;


  if (dice !== 1){
    roundScore+=dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;


  }else{
    nextPlayer();
  }

});
function nextPlayer(){
  activePlayer === 0 ?activePlayer = 1:activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-hold').addEventListener('click',function(){
  scores[activePlayer]+=roundScore;
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  if (scores[activePlayer] >= 100){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.btn-roll').style.visibility = 'hidden';
    document.querySelector('.btn-hold').style.visibility = 'hidden';

  }else{
  nextPlayer();
  }
});

 document.querySelector('.btn-new').addEventListener('click',init);
function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;
  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.btn-roll').style.visibility = 'visible';
  document.querySelector('.btn-hold').style.visibility = 'visible';
  document.querySelector('.dice').style.display = 'none';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

}
