'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score00 = document.getElementById('score--0');
const score01 = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current00 = document.getElementById('current--0');
const current01 = document.getElementById('current--1');
//buttons
const btnRoll = document.querySelector('.btn--roll');
const newGame = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
//classhiden
diceEl.classList.add('hidden');
//total score
score00.textContent = 0;
score01.textContent = 0;
//current
//scores

//change the turn
const scores = [0, 0];
let value = 0;
let activePlayer = 0;
let playing = true;

console.log(typeof current00.textContent);
btnRoll.addEventListener('click', function () {
  if (playing === true) {
    diceEl.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      value += dice;
      document.getElementById(`current--${activePlayer}`).textContent = value;
    } else {
      changePlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing === true) {
    scores[activePlayer] += value;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] > 100) {
      diceEl.classList.add('.hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceEl.classList.add('hidden');
    } else {
      changePlayer();
    }
  }
});
newGame.addEventListener('click', function () {
  location.reload();
});
const changePlayer = function () {
  value = 0;
  document.getElementById(`current--${activePlayer}`).textContent = value;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
  activePlayer = activePlayer === 0 ? 1 : 0;
};
