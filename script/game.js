function resetGame() {
    activePlayer = 0
    currentRound = 1
    GameIsOver = false
    gameOver.firstElementChild.innerHTML = 'You won, <span id="winner-name">Player Name</span>'
    gameOver.style.display = 'none'
    let gameBoardIndex = 0
    for (let i=0; i<3; i++) {
        for (let j=0; j<3; j++) {
            gameData[i][j] = 0
            const gameBoardItem = gameBoard.children[gameBoardIndex]
            gameBoardItem.textContent = ''
            gameBoardItem.classList.remove('disabled')
            gameBoardIndex++
        }
    }
}

function startGame() {
    if (players[0].name === '' || players[0].name === '') {
        alert("Please insert player's name!")
        return
    }
    resetGame()
    gameArea.style.display = 'block'
    activePlayerName.textContent = players[activePlayer].name
}
function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }
    activePlayerName.textContent = players[activePlayer].name
}
function selectGameField(event) {
    if (event.target.tagName !== 'LI' || GameIsOver) {
        return
    }
    const selectedField = event.target

    const selectedCol = selectedField.dataset.col - 1 
    const selectedRow = selectedField.dataset.row - 1

    if (gameData[selectedRow][selectedCol] > 0) {
        alert('Choose another box!')
        return
    }

    selectedField.textContent = players[activePlayer].symbol
    selectedField.classList.add('disabled')

    gameData[selectedRow][selectedCol] = activePlayer + 1
    const winnerID = checkGameOver()
      
    if (winnerID !== 0) {
        endGame(winnerID)
    }
    currentRound++
    switchPlayer()
}
function checkGameOver() {
    for (let i = 0; i <= 2; i++) {
        if (gameData[i][0] > 0
            && gameData[i][0] === gameData[i][1]
            && gameData[i][1] === gameData[i][2]
        ) 
        {
            return gameData[i][0]
        }
    }
    for (let i = 0; i <= 2; i++) {
        if (gameData[0][i] > 0
            && gameData[0][i] === gameData[1][i]
            && gameData[1][i] === gameData[2][i]
        ) 
        {
            return gameData[0][i]
        }
    }
    if (gameData[0][0] > 0
        && gameData[0][0] === gameData[1][1]
        && gameData[1][1] === gameData[2][2]
    ) 
    {
        return gameData[0][0]
    }
    if (gameData[2][0] > 0
        && gameData[2][0] === gameData[1][1]
        && gameData[1][1] === gameData[0][2]
    ) 
    {
        return gameData[2][0]
    }
    if (currentRound === 9) {
        return -1
    }
    return 0
}
function endGame(winnerID) {
    GameIsOver = true
    gameOver.style.display = 'block'
    if (winnerID > 0) {
        const winnerName = players[winnerID - 1].name
        gameOver.firstElementChild.firstElementChild.textContent = winnerName
    } else {
        gameOver.firstElementChild.textContent = "It's a draw match!"
    }
    
}