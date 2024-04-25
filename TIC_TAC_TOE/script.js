
const statusDisplay = document.querySelector('.game--status');

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
	gameState[clickedCellIndex] = currentPlayer;
	clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
	currentPlayer = currentPlayer === "X"? "O" : "X";
	statusDisplay.innerHTML = currentPlayerTurn();
}

function handleCellClick(clickedCellEvent) {
	const clickedCell = clickedCellEvent.target;
	const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

	if (gameState[clickedCellIndex]!== "" ||!gameActive) {
		return;
	}

	handleCellPlayed(clickedCell, clickedCellIndex);
	if (checkWin(currentPlayer)) {
		return;
	}
	handlePlayerChange();
}

function checkWin(currentPlayer) {
	for (let i = 0; i < winningConditions.length; i++) {
		const [a, b, c] = winningConditions[i];
		if (gameState[a] === currentPlayer && gameState[b] === currentPlayer && gameState[c] === currentPlayer) {
			gameActive = false;
			statusDisplay.innerHTML = winningMessage();
			return true;
		}
	}
	if (!gameState.includes("")) {
		gameActive = false;
		statusDisplay.innerHTML = drawMessage();
	}
	return false;
}

function handleRestartGame() {
	gameActive = true;
	currentPlayer = "X";
	gameState = ["", "", "", "", "", "", "", "", ""];
	statusDisplay.innerHTML = currentPlayerTurn();
	document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click',handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);