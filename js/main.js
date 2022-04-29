// Maintain clicked cell state using arrays
let clickedCells = [];

// At the click of a cell, change the color to red

const cellsDOM = document.querySelectorAll('.cell');
cellsDOM.forEach(cell => cell.addEventListener('click', cellClick))



function cellClick(cell) {
    let clickedCellIndex = Number(cell.target.getAttribute('data-cell-index'));
    clickedCells[clickedCellIndex] = '1';
    console.log(clickedCells);
    cell.target.style.backgroundColor = "red";
    // disable cell click for the clicked cell
    cell.target.style.pointerEvents = 'none';
    triggerComputerTurn();
}

function triggerComputerTurn() {
    //const unclickedCells = document.
}


document.querySelector('.game-restart').addEventListener('click', restartGame);

function restartGame() {
    const resetGame = document.querySelectorAll('.cell');
    resetGame.forEach(cell => cell.style.backgroundColor = '#999');
    resetGame.forEach(cell => cell.style.pointerEvents = 'auto');
    clickedCells = [];
}