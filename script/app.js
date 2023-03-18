let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let GameIsOver = false

const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name: '',
        symbol: 'O'
    }
]

const playerConfigOverlay = document.getElementById('config-overlay')
const backdrop = document.getElementById('backdrop')
const form = document.querySelector('form')
const errorOutput = document.getElementById('config-error')
const gameArea = document.getElementById('active-game')
const activePlayerName = document.getElementById('active-player-game')

const editPlayer1Btn = document.getElementById('edit-player-1-btn')
const editPlayer2Btn = document.getElementById('edit-player-2-btn')
const cancelConfig = document.getElementById('cancel-config')
const startGameBtn = document.getElementById('start-game-btn')
// const gameField = document.querySelectorAll('#game-board li')
const gameBoard = document.getElementById('game-board')
const gameOver = document.getElementById('game-over')

editPlayer1Btn.addEventListener('click', openPlayerConfig)
editPlayer2Btn.addEventListener('click', openPlayerConfig)

cancelConfig.addEventListener('click', cancelPlayerConfig)
backdrop.addEventListener('click', cancelPlayerConfig)

form.addEventListener('submit', savePlayerData)

startGameBtn.addEventListener('click', startGame)

// for (const gameFieldElement of gameField) {
//     gameFieldElement.addEventListener('click', selectGameField)
// }
gameBoard.addEventListener('click', selectGameField)