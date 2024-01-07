import { printInicio } from "../Inicio/Inicio";
import "./TresEnRaya.css";
import { getData, getUserData, setUserData } from "../../global/state/globalState"

const template = () => `
  <div class="container">
    <h1>Tres en Raya</h1>
    <div id="board" class="board"></div>
    <div id="result" class="result"></div>
    <button id="reinicio">Reiniciar juego</button>
  </div>
`;
const datos=getUserData()
const ROJO="ROJO"
let currentPlayer = ROJO;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;
let waiting=false

const createCell = (index) => {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  cell.setAttribute('data-index', index);
  cell.addEventListener('click', () => cellClick(index));
  document.getElementById('board').appendChild(cell);
};

const initializeBoard = () => {
    const botonReinicio = document.getElementById("reinicio");
botonReinicio.addEventListener("click",()=>{
    resetGame()
})

  for (let i = 0; i < 9; i++) {
    createCell(i);
  }
};

const cellClick = (index) => {
  if (gameBoard[index] === '' && !gameOver &&!waiting) {
  waiting=true
setTimeout(() => {
    gameBoard[index] = currentPlayer;
    waiting=false
    renderBoard();

if (checkWin()) {
  document.getElementById('result').textContent = `¡${currentPlayer} ha ganado!`;
  gameOver = true;
} else if (checkTie()) {
  document.getElementById('result').textContent = 'Empate';
  gameOver = true;
} else {
  currentPlayer = currentPlayer === ROJO ? 'VERDE' : ROJO;
  if (currentPlayer === 'VERDE' && !gameOver) {
    setTimeout(() => computerMove(), 300);
  }
}
}, 500);
      
  }
};

const computerMove = () => {
  const emptyCells = gameBoard.reduce((acc, cell, index) => (cell === '' ? acc.concat(index) : acc), []);
  const randomIndex = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  cellClick(randomIndex);
};

const checkWin = () => {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8], 
    [0, 4, 8], [2, 4, 6] 
  ];

  return winPatterns.some(pattern => pattern.every(index => gameBoard[index] === currentPlayer));
};

const checkTie = () => {
  return gameBoard.every(cell => cell !== '');
};

const renderBoard = () => {
    gameBoard.forEach((value, index) => {
      const cell = document.querySelector(`[data-index="${index}"]`);
  
      cell.innerHTML = '';
  
      if (value === ROJO) {
        const imgX = document.createElement('img');
        imgX.src = 'https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/i5fyik74lkgtgkainquc.png'; 
        imgX.alt = 'ROJO';
        cell.appendChild(imgX);
      } else if (value === 'VERDE') {
       
        const imgO = document.createElement('img');
        imgO.src = 'https://res.cloudinary.com/djfkchzyq/image/upload/v1697635530/uljdsrib9dbvdv8pftqx.png';
        imgO.alt = 'VERDE';
        cell.appendChild(imgO);
      }
    });
  };

const resetGame = () => {
  gameBoard = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = ROJO;
  gameOver = false;
  document.getElementById('result').textContent = '';
  renderBoard();
};


 


export const printTresEnRaya = () => {
    document.querySelector("main").innerHTML = template();
  initializeBoard();
};
