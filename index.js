let player = {
  name: "Alex",
  chips: 200
}

let cards = []
let hasBlackJack = false
let isAlive = false
let sum = 0
let message = ''

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

playerEl.textContent = `${player.name}: ${player.chips}/-`

function getRandomCard() {
  let randomCard = Math.floor ( Math.random() * 13 + 1 )

  if (randomCard > 10) {
    return 10
  } else if (randomCard === 1) {
    return 11
  } else {
    return randomCard
  } 
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  cardsEl.textContent = `Cards: ${cards.join(" - ")}`
  sumEl.textContent = `Sum: ${sum}`
  if (sum < 21) {
    message = "Do you want to draw a new card?"
  } else if (sum === 21) {
    message = "You've got Blackjack!"
    hasBlackJack = true
  } else {
    message = "You are out of the game!"
    isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive && !hasBlackJack) {
    let newCard = getRandomCard()
    cards.push(newCard)
    sum += newCard
  
    renderGame()
  }
}