function openPlayerConfig(event) {
    const selectedPlayerID = +event.target.dataset.playerid
    editedPlayer = selectedPlayerID
    playerConfigOverlay.style.display = 'block'
    backdrop.style.display = 'block'
}
function cancelPlayerConfig() {
    playerConfigOverlay.style.display = 'none'
    backdrop.style.display = 'none'
    form.firstElementChild.classList.remove('error')
    errorOutput.textContent = ''
    form.firstElementChild.lastElementChild.value = ''
}
function savePlayerData(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const enteredPlayerName = formData.get('username').trim()
    
    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add('error')
        errorOutput.textContent = 'Please enter a valid name!'
        return
    }

    const updatePlayerData = document.getElementById('player-' + editedPlayer + '-data')  
    updatePlayerData.children[1].textContent = enteredPlayerName

    players[editedPlayer - 1].name = enteredPlayerName

    cancelPlayerConfig()
}