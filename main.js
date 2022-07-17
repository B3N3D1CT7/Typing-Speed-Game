//Made by Benedict
const timeStamp = document.getElementById('time-stamp');
const currentWord = document.getElementById('word');
const easy = document.getElementById('easy');
const medium = document.getElementById('medium');
const hard = document.getElementById('hard');
const input = document.getElementById('input');
const result = document.getElementById('result');
const currentTime = document.getElementById('time');
const score = document.getElementById('score');
const startBtn = document.getElementById('start-btn');
const intro = document.getElementById('introduction');
const mainGame = document.getElementById('main-game');
const timeDisplay = document.getElementById('get-time');
const labels = document.querySelectorAll('label');
const instruction = document.querySelector('.instructions')

let scoreCount = 0;
let timeCounter;
let time = getTimeCount();
let mainWord;
let userInput;
let isPlaying = true;

function getTimeCount() {
  if (easy.checked) {
    timeCounter = 5;
  } else if (medium.checked) {
    timeCounter = 3;
  } else if (hard.checked ){
    timeCounter = 1;
  } else {
    timeCounter = 5;
  }
  return timeCounter;
}

for (const label of labels) {
  label.addEventListener('click', initGame)
}


function initGame() {
  instruction.style.display = 'block';
}

function randomWord() {
  let random = Math.floor(Math.random() * words.length)
  currentWord.textContent = words[random];
}

//window.onload = () => playGame();
startBtn.onclick = () => {
  intro.style.display = 'none';
  mainGame.style.display = 'block';
  playGame();
}

function playGame() {
  timeStamp.textContent = getTimeCount();
  currentTime.textContent = getTimeCount();
  randomWord();
  time = getTimeCount();
  setInterval(timeCount, 1000);
  input.addEventListener('input', wordMatch);
  setInterval(checkGameStatus, 50);
}

function timeCount() {
  if (time > 0) {
    time--;
  } else if (time === 0) {
    result.textContent = 'Game Over!!';
    result.style.color = 'crimson';
    isPlaying = false;
  }
  currentTime.textContent = time;
}

function wordMatch() {
  if (wordMatches()) {
    time = getTimeCount();
    input.value = '';
    input.focus();
    randomWord();
  }
  currentTime.textContent = time;
}

function wordMatches() {
  if (input.value === currentWord.textContent) {
    result.textContent = 'Great!!';
    result.style.color = 'green';
    scoreCount++
    return true;
  } else {
    result.textContent = '';
    return false;
  }
}

function checkGameStatus() {
  if (!isPlaying && time === 0) {
    scoreCount = -1;
    input.style.backgroundColor = 'crimson';
    input.style.color = '#fff';
  } else {
    input.style.backgroundColor = '#fff';
    input.style.color = '#111';
  }
  if (scoreCount === -1) {
    score.textContent = 0;
  } else {
    score.textContent = scoreCount;
  }
}