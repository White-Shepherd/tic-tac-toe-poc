let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameOver = false;

const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

function makeMove(position) {
  if (gameOver === true) {
    return;
  }

  if (board[position] !== "") {
    return;
  }

  board[position] = currentPlayer;

  renderBoard();

  if (checkWinner(currentPlayer)) {
    document.getElementById("status").textContent = "Player " + currentPlayer + " wins!";
    gameOver = true;
    return;
  }

  if (boardFull()) {
    document.getElementById("status").textContent = "It's a draw!";
    gameOver = true;
    return;
  }

  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }

  document.getElementById("status").textContent = "Player " + currentPlayer + "'s turn";
}

function renderBoard() {
  const cells = document.querySelectorAll(".cell");

  for (let i = 0; i < cells.length; i++) {
    cells[i].textContent = board[i];
  }
}

function checkWinner(player) {
  for (let i = 0; i < winningLines.length; i++) {
    const line = winningLines[i];

    const a = line[0];
    const b = line[1];
    const c = line[2];

    if (board[a] === player && board[b] === player && board[c] === player) {
      return true;
    }
  }

  return false;
}

function boardFull() {
  for (let i = 0; i < board.length; i++) {
    if (board[i] === "") {
      return false;
    }
  }

  return true;
}

function resetGame() {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  gameOver = false;

  document.getElementById("status").textContent = "Player X's turn";
  renderBoard();
}
