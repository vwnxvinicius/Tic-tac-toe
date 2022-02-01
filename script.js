const statusDisplay = document.querySelector('.game--status')

let gameActive = true

let currentPlayer = 'X'

let gameState = ["", "", "", "", "", "", "", "", ""]

const winningMessage = () => `Player ${currentPlayer} won the game`

const drawMessage = () => `The game endede in a draw`

const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`

const winningConditions = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
    [1, 4, 7]
]

statusDisplay.innerHTML = currentPlayerTurn()

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer
    clickedCell.innerHTML = currentPlayer
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"
    statusDisplay.innerHTML = currentPlayerTurn()
}

function handleResultValidation() {
    let roundwon = false
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i]
        let a = gameState[winCondition[0]]
        let b = gameState[winCondition[1]]
        let c = gameState[winCondition[2]]
        if (a === '' || b === '' || c === '') {
            continue
        }
        if (a === b && b === c) {
            roundwon = true
            break
        }
    }
if (roundwon) {
    statusDisplay.innerHTML = winningMessage()
    gameActive = false
    return
}

    let roundDraw = !gameState.includes("")
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage()
        gameActive = false
        return
    }
    
    handlePlayerChange()
}

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target
    const clickedCellIndex = Number(clickedCell.getAttribute('data-cell-index'))
    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return
    }
    handleCellPlayed(clickedCell, clickedCellIndex)
    handleResultValidation()
}

function handleRestartGame() {
    gameActive = true
    currentPlayer = "X"
    gameState = ["", "", "", "", "", "", "", "", ""]
    statusDisplay.innerHTML = currentPlayerTurn()
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "")
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick))
document.querySelector('.game--restart').addEventListener('click', handleRestartGame)